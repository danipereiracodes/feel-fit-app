import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useStepFields from './useStepFields';
import { useStepStore } from '../store/StepStore';
import { InputValues } from '../types/InputTypes';

const useCustomForm = (onNextStep: () => void, onPrevStep: () => void) => {
  const { register, handleSubmit, control, reset } = useForm<InputValues>();
  const [formData, setFormData] = useState<InputValues | null>(null);
  const { fields } = useStepFields(register, control);
  const inputData = useStepStore((state) => state.data);
  const updateData = useStepStore((state) => state.updateData);

  const onSubmit: SubmitHandler<InputValues> = (data) => {
    updateData(data);
    onNextStep();
    console.log('hello');
  };

  useEffect(() => {
    const savedData = localStorage.getItem('user-data');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user-data', JSON.stringify(inputData));
    console.log('<------ inputdata ', inputData);
  }, [inputData]);

  useEffect(() => {
    if (formData) {
      reset(formData);
    }
  }, [formData, reset]);

  return {
    fields,
    handleSubmit: handleSubmit(onSubmit),
    onPrevStep,
  };
};

export default useCustomForm;
