import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMainStore } from '../../../store/MainStore';
import { InputValues } from '../../../types/InputTypes';
import useSteps from '../steps/Steps.hooks';

const useCustomForm = (onNextStep: () => void, onPrevStep: () => void) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<InputValues>();
  const [formData, setFormData] = useState<InputValues | null>(null);
  const { renderSteps } = useSteps({ register, control, errors });
  const inputData = useMainStore((state) => state.data);
  const updateData = useMainStore((state) => state.updateData);
  const currentStep = useMainStore((state) => state.step);

  const onSubmit: SubmitHandler<InputValues> = (data) => {
    updateData(data);
    onNextStep();
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
    renderSteps,
    handleSubmit: handleSubmit(onSubmit),
    onPrevStep,
    currentStep,
  };
};

export default useCustomForm;
