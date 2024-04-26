import { UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../types/InputTypes';

import { useMainStore } from '../../store/MainStore';

import { useEffect } from 'react';

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

  const isChecked = useMainStore((state) => state.data.fasting);
  const updateFasting = useMainStore((state) => state.updateFasting);


  useEffect(() => {
    register(name as keyof InputValues, { required });
  }, [register, required, name]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = e.target.checked;
    updateFasting(newCheckedState);
  };
  return (
    <div className='col-span-1'>
      <input
        id={name}
        type={type}
        {...register(name as keyof InputValues, { required })}
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
      <label>{title}</label>
    </div>
  );
}

export default CustomCheckbox;
