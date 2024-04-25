import { FieldError, UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../types/InputTypes';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

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
      <Label>
        {label}
        <Input
          name={name}
          type='text'
          placeholder={placeholder}
          register={register}
          validationRules={validationRules}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </Label>
      {error && (
        <p className='absolute -bottom-6 left-0 text-sm text-gray-700  font-bold'>
          *{error.message}
        </p>
      )}
    </div>
  );
};

export default TextInput;
