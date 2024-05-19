import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';
import NumberInput from '../../molecules/NumberInput';

interface StepOneFieldsProps {
  register: UseFormRegister<InputValues>;
  errors: FieldErrors<InputValues>;
}

const StepOneFields: React.FC<StepOneFieldsProps> = ({ register, errors }) => {
  return (
    <>
      <NumberInput
        min={14}
        max={140}
        name='age'
        label='How old?'
        register={register}
        required
        placeholder='Your Age'
        error={errors.age}
      />
      <NumberInput
        min={40}
        max={250}
        name='weight'
        label='Weight(kg)'
        register={register}
        required
        placeholder='Your Weight'
        error={errors.weight}
      />
      <NumberInput
        min={40}
        max={240}
        name='height'
        label='Height(cm)'
        register={register}
        required
        placeholder='Your Height'
        error={errors.height}
      />
    </>
  );
};

export default StepOneFields;
