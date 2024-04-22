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
}

const CustomInput = ({
  name,
  onBlurHandler,
  register,
  spanText,
  required,
  type,
  label,
}: CustomInputProps) => {
  return (
    <div className='flex flex-col '>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        {...register(name as keyof InputValues, { required })}
        onBlur={onBlurHandler}
        placeholder='gluten,soy...'
      />
      {spanText && <span className='text-sm text-gray-800'>{spanText}</span>}
    </div>
  );
};

export default CustomInput;
