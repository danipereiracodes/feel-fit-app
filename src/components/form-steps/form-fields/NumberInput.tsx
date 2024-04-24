import { FieldError, UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';

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
  label,
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
    <div className='flex flex-col relative'>
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        {...register(name as keyof InputValues, validationRules)}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
      {error && (
        <p className='absolute -bottom-6 left-0 text-sm text-gray-700 font-bold'>
          *{error.message}
        </p>
      )}
    </div>
  );
};

export default NumberInput;
