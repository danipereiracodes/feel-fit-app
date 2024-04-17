import { UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';

interface CustomInputProps {
  name: string;
  register: UseFormRegister<InputValues>;
  required?: boolean;
  type: string;
  label: string;
}

const CustomInput = ({
  name,
  register,
  required,
  type,
  label,
}: CustomInputProps) => (
  <div className='flex flex-col capitalize'>
    <label htmlFor={name}>{label}</label>
    <input type={type} {...register(name as keyof InputValues, { required })} />
  </div>
);

export default CustomInput;
