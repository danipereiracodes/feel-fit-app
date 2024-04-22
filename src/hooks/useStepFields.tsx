import { Controller, Control, UseFormRegister } from 'react-hook-form';
import CustomInput from '../components/form-steps/form-fields/CustomInput';
import CustomSelect from '../components/form-steps/form-fields/CustomSelect';
import { InputValues } from '../types/InputTypes';
import { useStepStore } from '../store/StepStore';
import ControlledInput from '../components/form-steps/form-fields/ControlledInput';
import { GenderEnum } from '../enums/GenderEnums';
import { DietEnum } from '../enums/DietEnums';
import CustomCheckbox from '../components/form-steps/form-fields/CustomCheckbox';
import { FastingFrequencyEnum } from '../enums/FastingFreqEnum';
import { ExerciseExpEnum, ExerciseFreqEnum } from '../enums/ExerciseExp';

const useStepFields = (
  register: UseFormRegister<InputValues>,
  control: Control<InputValues>
) => {
  const currentStep = useStepStore((state) => state.step);
  const isFasting = useStepStore((state) => state.data.fasting);

  const handleTextInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const splittedText = inputValue.split(/[,. ]+/);
    const formattedText = splittedText.join(', ');
    e.target.value = formattedText;
  };

  type EnumType =
    | typeof GenderEnum
    | typeof DietEnum
    | typeof FastingFrequencyEnum
    | typeof ExerciseExpEnum
    | typeof ExerciseFreqEnum;

  const enumToSelectOptions = (enumObject: EnumType) => {
    return Object.keys(enumObject).map((key) => ({
      value: enumObject[key as keyof typeof enumObject],
      name: key,
    }));
  };

  const genderOptions = enumToSelectOptions(GenderEnum);
  const dietOptions = enumToSelectOptions(DietEnum);
  const fastingOption = enumToSelectOptions(FastingFrequencyEnum);
  const exerciseOptions = enumToSelectOptions(ExerciseExpEnum);
  const exerciseFreOptions = enumToSelectOptions(ExerciseFreqEnum);

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
    <CustomSelect
      register={register}
      label='diet'
      required
      name='diet'
      options={dietOptions}
    />,
    <Controller
      control={control}
      name='allergies'
      render={() => (
        <ControlledInput
          type='text'
          label='Any allergies?'
          register={register}
          onBlurHandler={handleTextInputBlur}
          name='allergies'
          spanText='Add them separated by comas or dots'
          placeHolder='gluten,soy...'
        />
      )}
    />,
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
    />,
    isFasting && (
      <CustomSelect
        register={register}
        label='How often?'
        required
        name='fastingFreq'
        options={fastingOption}
      />
    ),
  ];

  const getStepThreeFields = () => [
    <CustomSelect
      register={register}
      label='Exercise experience'
      required
      name='exerciseExp'
      options={exerciseOptions}
    />,

    <CustomSelect
      register={register}
      label='How often?'
      required
      name='exerciseFreq'
      options={exerciseFreOptions}
    />,
    <Controller
      control={control}
      name='injuries'
      render={() => (
        <ControlledInput
          type='text'
          label='Any injuries?'
          register={register}
          onBlurHandler={handleTextInputBlur}
          name='injuries'
          spanText='Add them separated by comas or dots'
          placeHolder='back hernia...'
        />
      )}
    />,
  ];

  const renderSteps = (step: number) => {
    switch (step) {
      case 1:
        return getStepOneFields();
      case 2:
        return getStepTwoFields();
      case 3:
        return getStepThreeFields();

      default:
        break;
    }
  };

  return {
    fields: renderSteps(currentStep),
  };
};

export default useStepFields;
