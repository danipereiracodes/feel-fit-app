/* eslint-disable react-refresh/only-export-components */
import { useForm, SubmitHandler } from 'react-hook-form';
import { useStepStore } from '../../store/StepStore';
import useStepFields from '../../hooks/useStepFields';
import { InputValues } from '../../types/InputTypes';
import Button from '../buttons/Buton';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface StepOneFormProps {
  title: string;
  gridCols: string;
  onNextStep: () => void;
}

const CustomForm: React.FC<StepOneFormProps> = ({
  gridCols,
  title,
  onNextStep,
}) => {
  const { register, handleSubmit, reset, control, watch } =
    useForm<InputValues>();

  const { fields } = useStepFields(register, control);
  const inputData = useStepStore((state) => state.data);
  const updateData = useStepStore((state) => state.updateData);
  const watchFasting = watch('fasting');

  useEffect(() => {
    console.log('fasting is changing');
  }, [watchFasting]);

  const onSubmit: SubmitHandler<InputValues> = (data) => {
    updateData(data);

    onNextStep();
    reset();
  };

  useEffect(() => {
    localStorage.setItem('step1', JSON.stringify(inputData));
    console.log(inputData);
  }, [inputData]);

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <fieldset
        className={`grid ${String(gridCols)} gap-8 text-black text-start`}
      >
        <legend className='w-full text-center mb-8'>{title}</legend>
        {fields &&
          fields.map((elements) => {
            const uniqueKey = uuidv4();
            return <div key={uniqueKey}>{elements}</div>;
          })}

        <Button
          type='submit'
          styles={
            'z-20 bg-bright-secondary rounded-xl py-2 text-white font-normal text-lg col-span-2 w-52 place-self-end'
          }
          text='Next Step'
        />
      </fieldset>
    </form>
  );
};

export default CustomForm;
