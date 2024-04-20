import { UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';

interface CustomCheckbox {
  register: UseFormRegister<InputValues>;
  required?: boolean;

  name: string;
  type: string;
  title: string;
}

function CustomCheckbox({
  register,
  required,
  name,
  type,
  title,
}: CustomCheckbox) {
  return (
    <>
      <input
        id={name}
        type={type}
        {...register(name as keyof InputValues, { required })}
      />
      <label htmlFor={name}>{title}</label>
    </>
  );
}

export default CustomCheckbox;
