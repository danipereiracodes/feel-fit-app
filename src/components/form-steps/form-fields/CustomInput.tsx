import { Path, UseFormRegister } from 'react-hook-form';

export interface InputValues {
  age: number;
  height: number;
  weight: number;
}

interface CustomInputProps {
  label: Path<InputValues>;
  register: UseFormRegister<InputValues>;
  required: boolean;
  type: string;
}

const CustomInput = ({ label, register, required, type }: CustomInputProps) => (
  <>
    <label>{label}</label>
    <input type={type} {...register(label, { required })} />
  </>
);

export default CustomInput;
