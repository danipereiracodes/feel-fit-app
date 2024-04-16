/* eslint-disable react-refresh/only-export-components */
import { useForm, SubmitHandler } from 'react-hook-form';
import { useStepStore } from '../../store/StepStore';
import CustomInput from './form-fields/CustomInput';
import CustomSelect from './form-fields/CustomSelect';
import { InputValues } from '../../types/InputTypes';
import Button from '../buttons/Buton';

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
  const { register, handleSubmit } = useForm<InputValues>();

  const inputData = useStepStore((state) => state.data);
  const updateData = useStepStore((state) => state.updateData);

  const onSubmit: SubmitHandler<InputValues> = (data) => {
    updateData(data);
    onNextStep();

    console.log(inputData);
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <fieldset
        className={`grid ${String(gridCols)} gap-8 text-black text-start`}
      >
        <legend>{title}</legend>

        <CustomSelect register={register} required label='gender' />

        <CustomInput type='number' label='age' register={register} required />
        <CustomInput
          type='number'
          label='weight'
          register={register}
          required
        />
        <CustomInput
          type='number'
          label='height'
          register={register}
          required
        />

        <Button
          type='submit'
          styles={
            'z-20 bg-bright-secondary rounded-xl py-2 text-white font-normal text-lg col-span-2 w-52 place-self-end'
          }
          text='Next Step'
        />

        {inputData && (
          <div>
            <ul>
              <li>{inputData.gender && inputData.gender}</li>
              <li>{inputData.age > 0 && inputData.age}</li>
              <li>{inputData.height > 0 && inputData.height}</li>
              <li>{inputData.weight > 0 && inputData.weight}</li>
            </ul>
          </div>
        )}
      </fieldset>
    </form>
  );
};

export default CustomForm;
