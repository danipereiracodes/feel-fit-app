import { FieldError, UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';

interface TextInputProps {
  name: string;
  register: UseFormRegister<InputValues>;
  required?: boolean;
  maxLength: number;
  minLength: number;
  label: string;
  placeholder: string;
  error?: FieldError;
}

const TextInput = ({
  name,
  register,
  label,
  placeholder,
  error,
  maxLength,
  minLength,
}: TextInputProps) => {
  const textPattern = /^[a-zA-Z\s]*$/;

  const validationRules = {
    required: `required`,
    pattern: {
      value: textPattern,
      message: 'only text characters',
    },
    maxLength: {
      value: maxLength,
      message: `too long`,
    },
    minLength: {
      value: minLength,
      message: `too short`,
    },
  };

  return (
    <div className='relative flex flex-col '>
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        type='text'
        {...register(name as keyof InputValues, validationRules)}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
      {error && (
        <p className='absolute -bottom-6 left-0 text-sm text-gray-700  font-bold'>
          *{error.message}
        </p>
      )}
    </div>
  );
};

export default TextInput;
