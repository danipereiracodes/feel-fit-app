import {
  UseFormRegister,
  FieldErrors,
  Control,
  Controller,
} from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';
import {
  ExerciseExpEnum,
  ExerciseFreqEnum,
  FitnessGoal,
} from '../../../types/enums/ExerciseExp';
import { enumToSelectOptions } from '../../../utils/EnumToSelectOptions';
import ControlledInput from '../../molecules/ControlledInput';
import CustomSelect from '../../molecules/CustomSelect';

const exerciseOptions = enumToSelectOptions(ExerciseExpEnum);
const exerciseFreOptions = enumToSelectOptions(ExerciseFreqEnum);
const fitnessGoalOptions = enumToSelectOptions(FitnessGoal);

interface StepThreeFieldsProps {
  register: UseFormRegister<InputValues>;
  errors: FieldErrors<InputValues>;
  control: Control<InputValues>;
  onTextInputBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const StepThreeFields: React.FC<StepThreeFieldsProps> = ({
  register,
  errors,
  control,
  onTextInputBlur,
}) => {
  return (
    <>
      {' '}
      <CustomSelect
        register={register}
        label='Exercise experience'
        name='exerciseExp'
        options={exerciseOptions}
        error={errors.exerciseExp}
        required
      />
      <CustomSelect
        register={register}
        label='How often?'
        name='exerciseFreq'
        options={exerciseFreOptions}
        error={errors.exerciseFreq}
        required
      />
      <Controller
        control={control}
        name='injuries'
        render={() => (
          <ControlledInput
            type='text'
            label='Any injuries?'
            register={register}
            onBlurHandler={onTextInputBlur}
            name='injuries'
            placeHolder='separated by comas or spaces'
            required={false}
            error={errors.injuries}
          />
        )}
      />
      <CustomSelect
        register={register}
        label='Fitness Goal?'
        name='goal'
        options={fitnessGoalOptions}
        error={errors.goal}
        required
      />
    </>
  );
};

export default StepThreeFields;
