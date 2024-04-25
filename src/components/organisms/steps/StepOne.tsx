import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { InputValues } from '../../../types/InputTypes';
import { GenderEnum } from '../../../types/enums/GenderEnums';
import CustomSelect from '../../molecules/CustomSelect';
import NumberInput from '../../molecules/NumberInput';
import TextInput from '../../molecules/TextInput';
import { enumToSelectOptions } from '../../../utils/EnumToSelectOptions';

interface StepOneFieldsProps {
  register: UseFormRegister<InputValues>;
  errors: FieldErrors<InputValues>;
}

const StepOneFields: React.FC<StepOneFieldsProps> = ({ register, errors }) => {
  const genderOptions = enumToSelectOptions(GenderEnum);

  return (
    <>
      <TextInput
        name='name'
        label='Name'
        register={register}
        required
        placeholder='Jane'
        maxLength={15}
        minLength={3}
        error={errors.name}
      />
      <TextInput
        name='lastname'
        label='Last name'
        register={register}
        required={false}
        placeholder='Doe'
        maxLength={15}
        minLength={3}
        error={errors.lastname}
      />
      <CustomSelect
        register={register}
        label='Gender'
        name='gender'
        options={genderOptions}
        error={errors.gender}
        required
      />

      <NumberInput
        min={14}
        max={140}
        name='age'
        label='How old?'
        register={register}
        required
        placeholder='35'
        error={errors.age}
      />
      <NumberInput
        min={40}
        max={250}
        name='weight'
        label='Weight(kg)'
        register={register}
        required
        placeholder='50'
        error={errors.weight}
      />
      <NumberInput
        min={40}
        max={240}
        name='height'
        label='Height(cm)'
        register={register}
        required
        placeholder='162'
        error={errors.height}
      />
    </>
  );
};

export default StepOneFields;
