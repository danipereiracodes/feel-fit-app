import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';

import { InputValues } from '../../../types/InputTypes';

import StepOneFields from './StepOne';
import StepTwoFields from './StepTwo';
import StepThreeFields from './StepThree';

interface UseSteps {
  register: UseFormRegister<InputValues>;
  errors: FieldErrors<InputValues>;
  control: Control<InputValues>;
}

const useSteps = ({ register, errors, control }: UseSteps) => {
  const handleTextInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const splittedText = inputValue.split(/[,. ]+/);
    const formattedText = splittedText.join(', ');
    e.target.value = formattedText;
  };

  const renderSteps = (step: number) => {
    switch (step) {
      case 1:
        return <StepOneFields register={register} errors={errors} />;
      case 2:
        return (
          <StepTwoFields
            register={register}
            errors={errors}
            control={control}
            onTextInputBlur={handleTextInputBlur}
          />
        );
      case 3:
        return (
          <StepThreeFields
            register={register}
            errors={errors}
            control={control}
            onTextInputBlur={handleTextInputBlur}
          />
        );

      default:
        break;
    }
  };

  return { renderSteps };
};

export default useSteps;
