import {
  UseFormRegister,
  FieldErrors,
  Controller,
  Control,
} from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';
import ControlledInput from '../../molecules/ControlledInput';
import CustomCheckbox from '../../molecules/CustomCheckbox';
import CustomSelect from '../../molecules/CustomSelect';
import { enumToSelectOptions } from '../../../utils/EnumToSelectOptions';
import { FastingFrequencyEnum } from '../../../types/enums/FastingFreqEnum';
import { DietEnum } from '../../../types/enums/DietEnums';
import { useMainStore } from '../../../store/MainStore';

interface StepTwoFieldsProps {
  register: UseFormRegister<InputValues>;
  errors: FieldErrors<InputValues>;
  control: Control<InputValues>;
  onTextInputBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const StepTwoFields: React.FC<StepTwoFieldsProps> = ({
  register,
  errors,
  control,
  onTextInputBlur,
}) => {
  const isFasting = useMainStore((state) => state.data.fasting);
  const dietOptions = enumToSelectOptions(DietEnum);
  const fastingOption = enumToSelectOptions(FastingFrequencyEnum);

  return (
    <>
      <CustomSelect
        register={register}
        label='How you eat'
        name='diet'
        options={dietOptions}
        error={errors.diet}
        required
      />
      <Controller
        control={control}
        name='allergies'
        render={() => (
          <ControlledInput
            type='text'
            label='Any allergies?'
            register={register}
            onBlurHandler={onTextInputBlur}
            name='allergies'
            spanText='Add them separated by comas or dots'
            placeHolder='gluten,soy...'
            error={errors.allergies}
            required={false}
          />
        )}
      />
      <Controller
        control={control}
        name='fasting'
        render={() => (
          <CustomCheckbox
            required={false}
            register={register}
            title='I practice intermintent fasting'
            type='checkbox'
            name='fasting'
          />
        )}
      />
      <CustomSelect
        register={register}
        label='How often?'
        name='fastingFreq'
        options={fastingOption}
        disabled={!isFasting}
        error={errors.fastingFreq}
        required={false}
      />
    </>
  );
};

export default StepTwoFields;
