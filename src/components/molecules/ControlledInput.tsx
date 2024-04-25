import { FieldError, UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../types/InputTypes';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

interface ControlledInputProps {
  name: string;
  register: UseFormRegister<InputValues>;
  required?: boolean;
  type: string;
  label: string;
  onBlurHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
  spanText: string | undefined;
  placeHolder: string;
  error?: FieldError;
}

const ControlledInput = ({
  name,
  onBlurHandler,
  register,
  error,
  type,
  label,
  placeHolder,
  required,
}: ControlledInputProps) => {
  const textDotsandComasPattern = /^[a-zA-Z,.\\s]*$/;

  const validateRequired = required ? `required` : required;

  const validationRules = {
    required: validateRequired,
    pattern: {
      value: textDotsandComasPattern,
      message: 'Text characters and comas only',
    },
  };

  return (
    <div className='relative flex flex-col '>
      <Label>
        {label}
        <Input
          type={type}
          name={name as keyof InputValues}
          register={register}
          onBlurHandler={onBlurHandler}
          validationRules={validationRules}
          placeholder={placeHolder}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </Label>
      {error && (
        <p className='absolute -bottom-6 left-0 text-sm text-gray-700 font-bold font-bold'>
          *{error.message}
        </p>
      )}
    </div>
  );
};

export default ControlledInput;
