import { UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';
import { GenderEnum } from '../../../enums/GenderEnums';

interface CustomSelectProps {
  label: string;
  register: UseFormRegister<InputValues>;
  required: boolean;
}

const enumToSelectOptions = (genderEnumObject: typeof GenderEnum) => {
  return Object.keys(genderEnumObject).map((key) => ({
    value: genderEnumObject[key as keyof typeof genderEnumObject],
    label: key,
  }));
};

const genderOptions = enumToSelectOptions(GenderEnum);

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  register,
  required,
}) => {
  return (
    <select
      id='gender'
      {...register(label as keyof InputValues, { required })}
      className='backdrop-blur-sm bg-white/30 px-2 py-1'
    >
      {' '}
      <option value={''}>Select</option>
      {genderOptions.map((option) => (
        <option key={option.label}>{option.value}</option>
      ))}
    </select>
  );
};

export default CustomSelect;
