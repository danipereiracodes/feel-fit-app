import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from 'react-hook-form';
import ControlledInput from '../../molecules/ControlledInput';

import CustomSelect from '../../molecules/CustomSelect';
import { DietEnum } from '../../../types/enums/DietEnums';
import {
  ExerciseExpEnum,
  ExerciseFreqEnum,
  FitnessGoal,
} from '../../../types/enums/ExerciseExp';
import { FastingFrequencyEnum } from '../../../types/enums/FastingFreqEnum';
import { useStepStore } from '../../../store/StepStore';
import { InputValues } from '../../../types/InputTypes';
import { UseStepsEnum } from '../../../types/enums/UseStepsEnums';
import StepOneFields from './StepOne';
import CustomCheckbox from '../../molecules/CustomCheckbox';

interface UseSteps {
  register: UseFormRegister<InputValues>;
  errors: FieldErrors<InputValues>;
  control: Control<InputValues>;
}

const useSteps = ({ register, errors, control }: UseSteps) => {
  const isFasting = useStepStore((state) => state.data.fasting);

  const handleTextInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const splittedText = inputValue.split(/[,. ]+/);
    const formattedText = splittedText.join(', ');
    e.target.value = formattedText;
  };

  const enumToSelectOptions = (enumObject: UseStepsEnum) => {
    return Object.keys(enumObject).map((key) => ({
      value: enumObject[key as keyof typeof enumObject],
      name: key,
    }));
  };

  const dietOptions = enumToSelectOptions(DietEnum);
  const fastingOption = enumToSelectOptions(FastingFrequencyEnum);
  const exerciseOptions = enumToSelectOptions(ExerciseExpEnum);
  const exerciseFreOptions = enumToSelectOptions(ExerciseFreqEnum);
  const fitnessGoalOptions = enumToSelectOptions(FitnessGoal);

  const StepTwoFields: React.FC = () => {
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
              onBlurHandler={handleTextInputBlur}
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

  const StepThreeFields: React.FC = () => {
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
              onBlurHandler={handleTextInputBlur}
              name='injuries'
              spanText='Add them separated by comas or dots'
              placeHolder='back hernia...'
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

  const renderSteps = (step: number) => {
    switch (step) {
      case 1:
        return <StepOneFields register={register} errors={errors} />;
      case 2:
        return <StepTwoFields />;
      case 3:
        return <StepThreeFields />;

      default:
        break;
    }
  };

  return { renderSteps };
};

export default useSteps;
