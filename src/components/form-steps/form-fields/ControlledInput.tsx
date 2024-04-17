import { UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';

interface CustomInputProps {
  name: string;
  register: UseFormRegister<InputValues>;
  required?: boolean;
  type: string;
  label: string;
  onBlurHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  name,
  onBlurHandler,
  register,

  required,
  type,
  label,
}: CustomInputProps) => {
  return (
    <div className='flex flex-col capitalize'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        {...register(name as keyof InputValues, { required })}
        onBlur={onBlurHandler}
      />
    </div>
  );
};

export default CustomInput;
