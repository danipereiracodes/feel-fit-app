import { UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';

interface CustomInputProps {
  name: string;
  register: UseFormRegister<InputValues>;
  required?: boolean;
  type: string;
  label: string;
  placeholder: string;
}

const CustomInput = ({
  name,
  register,
  required,
  type,
  label,
  placeholder,
}: CustomInputProps) => (
  <div className='flex flex-col '>
    <label htmlFor={name}>{label}</label>
    <input
      placeholder={placeholder}
      type={type}
      {...register(name as keyof InputValues, { required })}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    />
  </div>
);

export default CustomInput;
