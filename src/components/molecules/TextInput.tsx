import { FieldError, UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../types/InputTypes';
import Input from '../atoms/Input';

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
    <>
      <Input
        name={name}
        type='text'
        placeholder={placeholder}
        register={register}
        validationRules={validationRules}
      />

      {error && (
        <p className='absolute -bottom-6 left-0 text-sm text-gray-700  font-bold'>
          *{error.message}
        </p>
      )}
    </>
  );
};

export default TextInput;
