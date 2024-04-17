import { UseFormRegister } from 'react-hook-form';
import CustomInput from '../components/form-steps/form-fields/CustomInput';
import CustomSelect from '../components/form-steps/form-fields/CustomSelect';
import { InputValues } from '../types/InputTypes';
import { useStepStore } from '../store/StepStore';

const useStepFields = (register: UseFormRegister<InputValues>) => {
  const currentStep = useStepStore((state) => state.step);

  const getStepOneFields = () => [
    <CustomInput type='text' label='name' register={register} required />,
    <CustomInput type='text' label='lastname' register={register} required />,
    <CustomSelect register={register} required label='gender' />,

    <CustomInput type='number' label='age' register={register} required />,
    <CustomInput type='number' label='weight' register={register} required />,
    <CustomInput type='number' label='height' register={register} required />,
  ];

  const getStepTwoFields = () => [
    <CustomInput type='text' label='allergies' register={register} />,
  ];

  return {
    fields: currentStep === 1 ? getStepOneFields() : getStepTwoFields(),
  };
};

export default useStepFields;
