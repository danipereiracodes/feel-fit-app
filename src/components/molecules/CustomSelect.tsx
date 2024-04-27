import { FieldError, Merge, UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../types/InputTypes';

interface CustomSelectProps {
  name: string;
  label: string;
  register: UseFormRegister<InputValues>;
  required?: boolean;
  options: {
    value: never;
    name: string;
  }[];
  disabled?: boolean;
  error: Merge<FieldError, (FieldError | undefined)[]> | undefined;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  register,
  required,
  options,
  disabled,
  error,
}) => {
  const isRequired = {
    required: `required`,
  };

  const notRequired = {
    required: required,
  };

  const validateRequired = required ? isRequired : notRequired;

  return (
    <div className='relative flex flex-col'>
      <label>
        {label}
        <select
          disabled={disabled}
          id='gender'
          {...register(name as keyof InputValues, validateRequired)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
          <option value={''}>Select</option>
          {options?.map((option, index) => (
            <option key={index}>{option.value}</option>
          ))}
        </select>
      </label>
      {error && (
        <p className='absolute -bottom-6 left-0 text-sm text-gray-700 font-bold'>
          *{error.message}
        </p>
      )}
    </div>
  );
};

export default CustomSelect;
