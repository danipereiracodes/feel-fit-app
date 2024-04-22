import { v4 as uuidv4 } from 'uuid';
import Button from '../buttons/Buton';
import useCustomForm from '../../hooks/useCustomForm';

interface StepOneFormProps {
  title: string;
  gridCols: string;
  onNextStep: () => void;
  onPrevStep: () => void;
}

const CustomForm: React.FC<StepOneFormProps> = ({
  gridCols,
  title,
  onNextStep,
  onPrevStep,
}) => {
  const {
    fields,
    handleSubmit,
    onPrevStep: handlePrevStep,
  } = useCustomForm(onNextStep, onPrevStep);
  return (
    <>
      <form className='flex flex-col'>
        <fieldset
          className={` grid ${String(gridCols)} gap-8 text-black text-start`}
        >
          <legend className='w-full text-center mb-8'>{title}</legend>
          {fields &&
            fields.map((elements) => {
              const uniqueKey = uuidv4();
              return <div key={uniqueKey}>{elements}</div>;
            })}
        </fieldset>
      </form>
      <div className='gap-4 col-span-full  text-end mt-8'>
        <Button
          onClick={handlePrevStep}
          type='button'
          styles={
            'w-24 z-20 bg-bright-secondary rounded-xl py-2 text-white font-normal text-lg col-span-2 w-52 place-self-end'
          }
          text='Go back'
        />
        <Button
          onClick={handleSubmit}
          type='button'
          styles={
            'w-24 ml-4 z-20 bg-bright-secondary rounded-xl py-2 text-white font-normal text-lg col-span-2 w-52 place-self-end'
          }
          text='Next'
        />
      </div>
    </>
  );
};

export default CustomForm;
