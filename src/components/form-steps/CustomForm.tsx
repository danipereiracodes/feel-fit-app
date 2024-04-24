import Button from '../buttons/Buton';
import useCustomForm from '../../hooks/useCustomForm';
import { useStepStore } from '../../store/StepStore';

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
    renderSteps,
    handleSubmit,
    onPrevStep: handlePrevStep,
  } = useCustomForm(onNextStep, onPrevStep);
  const currentStep = useStepStore((state) => state.step);
  return (
    <>
      <form className='flex flex-col '>
        <fieldset
          className={` grid ${String(gridCols)} gap-8 text-black text-start`}
        >
          <legend className='w-full text-center mb-8 text-2xl font-bold'>
            {title}
          </legend>
          {renderSteps(currentStep)?.map((element, index) => (
            <div key={index}>{element}</div>
          ))}
        </fieldset>
      </form>
      <div className='flex gap-4 col-span-full text-end flex-1 justify-end pb-4 mt-4'>
        <Button
          onClick={handlePrevStep}
          type='button'
          styles={
            'px-4 z-20 bg-gray-700 rounded-lg py-2 text-white font-normal text-lg col-span-2 place-self-end  hover:scale-110 transition duration-300 ease-in-out'
          }
          text='Back'
        />
        <Button
          onClick={handleSubmit}
          type='button'
          styles={
            'px-4 ml-4 z-20 bg-bright-secondary rounded-lg py-2 text-white font-normal text-lg col-span-2 place-self-end  hover:scale-110 transition duration-300 ease-in-out'
          }
          text='Next'
        />
      </div>
    </>
  );
};

export default CustomForm;
