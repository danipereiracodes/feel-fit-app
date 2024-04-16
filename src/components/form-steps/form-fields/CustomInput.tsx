import { Path, UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';

interface CustomInputProps {
  label: Path<InputValues>;
  register: UseFormRegister<InputValues>;
  required: boolean;
  type: string;
}

const CustomInput = ({ label, register, required, type }: CustomInputProps) => (
  <div className='flex flex-col capitalize'>
    <label>{label}</label>
    <input type={type} {...register(label, { required })} />
  </div>
);

export default CustomInput;
