import { Controller, Control, UseFormRegister } from 'react-hook-form';
import CustomInput from '../components/form-steps/form-fields/CustomInput';
import CustomSelect from '../components/form-steps/form-fields/CustomSelect';
import { InputValues } from '../types/InputTypes';
import { useStepStore } from '../store/StepStore';
import ControlledInput from '../components/form-steps/form-fields/ControlledInput';
import { GenderEnum } from '../enums/GenderEnums';
import { DietEnum } from '../enums/DietEnums';

const useStepFields = (
  register: UseFormRegister<InputValues>,
  control: Control<InputValues>
) => {
  const handleTextInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const splittedText = inputValue.split(/[,. ]+/);
    const formattedText = splittedText.join(', ');
    e.target.value = formattedText;
  };

  const currentStep = useStepStore((state) => state.step);

  const enumToSelectOptions = (
    enumObject: typeof GenderEnum | typeof DietEnum
  ) => {
    return Object.keys(enumObject).map((key) => ({
      value: enumObject[key as keyof typeof enumObject],
      name: key,
    }));
  };

  const genderOptions = enumToSelectOptions(GenderEnum);
  const dietOptions = enumToSelectOptions(DietEnum);

  const getStepOneFields = () => [
    <CustomInput
      type='text'
      name='name'
      label='Name'
      register={register}
      required
    />,
    <CustomInput
      type='text'
      name='lastname'
      label='Lastname'
      register={register}
      required
    />,
    <CustomSelect
      register={register}
      label='Gender'
      required
      name='gender'
      options={genderOptions}
    />,

    <CustomInput
      type='number'
      name='age'
      label='How old?'
      register={register}
      required
    />,
    <CustomInput
      type='number'
      name='weight'
      label='Weight(kg)'
      register={register}
      required
    />,
    <CustomInput
      type='number'
      name='height'
      label='Height(cm)'
      register={register}
      required
    />,
  ];

  const getStepTwoFields = () => [
    <>
      {' '}
      <CustomSelect
        register={register}
        label='diet'
        required
        name='diet'
        options={dietOptions}
      />
      ,
      <Controller
        control={control}
        name='allergies'
        render={() => (
          <ControlledInput
            type='text'
            label='Any allergies'
            register={register}
            onBlurHandler={handleTextInputBlur}
            name='allergies'
          />
        )}
      />
      <span className='text-xs'>
        (add them separated by comas or dots. Example: "gluten,lactose.shellfish
        etc..")
      </span>
    </>,
  ];

  return {
    fields: currentStep === 1 ? getStepOneFields() : getStepTwoFields(),
  };
};

export default useStepFields;
