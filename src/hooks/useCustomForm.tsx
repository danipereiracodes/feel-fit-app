import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useStepStore } from '../store/StepStore';
import { InputValues } from '../types/InputTypes';
import CustomSelect from '../components/form-steps/form-fields/CustomSelect';

import ControlledInput from '../components/form-steps/form-fields/ControlledInput';
import CustomCheckbox from '../components/form-steps/form-fields/CustomCheckbox';
import { DietEnum } from '../enums/DietEnums';
import {
  ExerciseExpEnum,
  ExerciseFreqEnum,
  FitnessGoal,
} from '../enums/ExerciseExp';
import { FastingFrequencyEnum } from '../enums/FastingFreqEnum';
import { GenderEnum } from '../enums/GenderEnums';
import TextInput from '../components/form-steps/form-fields/TextInput';
import NumberInput from '../components/form-steps/form-fields/NumberInput';

const useCustomForm = (onNextStep: () => void, onPrevStep: () => void) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<InputValues>();
  const [formData, setFormData] = useState<InputValues | null>(null);

  const inputData = useStepStore((state) => state.data);
  const updateData = useStepStore((state) => state.updateData);

  const onSubmit: SubmitHandler<InputValues> = (data) => {
    updateData(data);
    onNextStep();
  };

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
    <TextInput
      name='name'
      label='Name'
      register={register}
      required
      placeholder='Jane'
      maxLength={15}
      minLength={3}
      error={errors.name}
    />,
    <TextInput
      name='lastname'
      label='Last name'
      register={register}
      required={false}
      placeholder='Doe'
      maxLength={15}
      minLength={3}
      error={errors.lastname}
    />,
    <CustomSelect
      register={register}
      label='Gender'
      name='gender'
      options={genderOptions}
      error={errors.gender}
      required
    />,

    <NumberInput
      min={14}
      max={140}
      name='age'
      label='How old?'
      register={register}
      required
      placeholder='35'
      error={errors.age}
    />,
    <NumberInput
      min={40}
      max={250}
      name='weight'
      label='Weight(kg)'
      register={register}
      required
      placeholder='50'
      error={errors.weight}
    />,
    <NumberInput
      min={40}
      max={240}
      name='height'
      label='Height(cm)'
      register={register}
      required
      placeholder='162'
      error={errors.height}
    />,
  ];

  const getStepTwoFields = () => [
    <CustomSelect
      register={register}
      label='How you eat'
      name='diet'
      options={dietOptions}
      error={errors.diet}
      required
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
          error={errors.allergies}
          required={false}
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
      name='fastingFreq'
      options={fastingOption}
      disabled={!isFasting}
      error={errors.fastingFreq}
      required={false}
    />,
  ];

  const getStepThreeFields = () => [
    <CustomSelect
      register={register}
      label='Exercise experience'
      name='exerciseExp'
      options={exerciseOptions}
      error={errors.exerciseExp}
      required
    />,

    <CustomSelect
      register={register}
      label='How often?'
      name='exerciseFreq'
      options={exerciseFreOptions}
      error={errors.exerciseFreq}
      required
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
          required={false}
          error={errors.injuries}
        />
      )}
    />,
    <CustomSelect
      register={register}
      label='Fitness Goal?'
      name='goal'
      options={fitnessGoalOptions}
      error={errors.goal}
      required
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

  useEffect(() => {
    const savedData = localStorage.getItem('user-data');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user-data', JSON.stringify(inputData));
    console.log('<------ inputdata ', inputData);
  }, [inputData]);

  useEffect(() => {
    if (formData) {
      reset(formData);
    }
  }, [formData, reset]);

  return {
    renderSteps,
    handleSubmit: handleSubmit(onSubmit),
    onPrevStep,
  };
};

export default useCustomForm;
