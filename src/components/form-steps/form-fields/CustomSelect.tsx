import { UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';

interface CustomSelectProps {
  name: string;
  label: string;
  register: UseFormRegister<InputValues>;
  required: boolean;
  options: {
    value: never;
    name: string;
  }[];
  disabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  register,
  required,
  options,
  disabled,
}) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      <select
        disabled={disabled}
        id='gender'
        {...register(name as keyof InputValues, { required })}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        <option value={''}>Select</option>
        {options?.map((option) => (
          <option key={option.name}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
