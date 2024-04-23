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
import {
  ExerciseExpEnum,
  ExerciseFreqEnum,
  FitnessGoal,
} from '../enums/ExerciseExp';

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
    | typeof ExerciseFreqEnum
    | typeof FitnessGoal;

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
  const fitnessGoalOptions = enumToSelectOptions(FitnessGoal);

  const getStepOneFields = () => [
    <CustomInput
      type='text'
      name='name'
      label='Name'
      register={register}
      required
      placeholder='Jane'
    />,
    <CustomInput
      type='text'
      name='lastname'
      label='Lastname'
      register={register}
      required={false}
      placeholder='Doe'
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
      placeholder='35'
    />,
    <CustomInput
      type='number'
      name='weight'
      label='Weight(kg)'
      register={register}
      required
      placeholder='50'
    />,
    <CustomInput
      type='number'
      name='height'
      label='Height(cm)'
      register={register}
      required
      placeholder='162'
    />,
  ];

  const getStepTwoFields = () => [
    <CustomSelect
      register={register}
      label='How you eat'
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
    <CustomSelect
      register={register}
      label='How often?'
      required
      name='fastingFreq'
      options={fastingOption}
      disabled={!isFasting}
    />,
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
    <CustomSelect
      register={register}
      label='Fitness Goal?'
      required
      name='goal'
      options={fitnessGoalOptions}
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
