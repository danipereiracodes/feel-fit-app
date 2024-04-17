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
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  register,
  required,
  options,
}) => {
  return (
    <div className='flex flex-col capitalize'>
      <label htmlFor={name}>{label}</label>
      <select
        id='gender'
        {...register(name as keyof InputValues, { required })}
        className='backdrop-blur-sm bg-white/30 px-2 py-1'
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
