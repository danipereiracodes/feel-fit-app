import { UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';

interface CustomInputProps {
  name: string;
  register: UseFormRegister<InputValues>;
  required?: boolean;
  type: string;
  label: string;
  onBlurHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
  spanText: string | undefined;
  placeHolder: string;
}

const CustomInput = ({
  name,
  onBlurHandler,
  register,
  spanText,
  required,
  type,
  label,
  placeHolder,
}: CustomInputProps) => {
  return (
    <div className='flex flex-col '>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        {...register(name as keyof InputValues, { required })}
        onBlur={onBlurHandler}
        placeholder={placeHolder}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
      {spanText && <span className='text-sm text-gray-800'>{spanText}</span>}
    </div>
  );
};

export default CustomInput;
