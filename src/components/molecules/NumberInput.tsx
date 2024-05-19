import { FieldError, UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../types/InputTypes';
import Input from '../atoms/Input';

interface NumberInputProps {
  name: string;
  register: UseFormRegister<InputValues>;
  required?: boolean;
  min: number;
  max: number;
  label: string;
  placeholder: string;
  error?: FieldError;
}

const NumberInput = ({
  name,
  register,

  min,
  max,
  placeholder,
  error,
}: NumberInputProps) => {
  const numPattern = /^[0-9]*$/;

  const validationRules = {
    required: `required`,
    pattern: {
      value: numPattern,
      message: 'only numbers',
    },
    min: {
      value: min,
      message: `too short`,
    },
    max: {
      value: max,
      message: `too long`,
    },
  };

  return (
    <>
      <Input
        name={name}
        type='number'
        placeholder={placeholder}
        register={register}
        validationRules={validationRules}
      />

      {error && (
        <p className='absolute -bottom-6 left-0 text-sm text-gray-700 font-bold'>
          *{error.message}
        </p>
      )}
    </>
  );
};

export default NumberInput;
