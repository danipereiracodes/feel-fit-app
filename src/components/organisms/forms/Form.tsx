import Button from '../../atoms/Buton';
import useCustomForm from './Form.hooks';

interface FormProps {
  title: string;
  gridCols: string;
  onNextStep: () => void;
  onPrevStep: () => void;
}

const Form: React.FC<FormProps> = ({
  gridCols,
  title,
  onNextStep,
  onPrevStep,
}) => {
  const {
    renderSteps,
    handleSubmit,
    onPrevStep: handlePrevStep,
    currentStep,
  } = useCustomForm(onNextStep, onPrevStep);

  return (
    <>
      <form className='flex flex-col '>
        <fieldset
          className={` grid ${String(
            gridCols
          )} gap-8 text-black text-start place-self-center`}
        >
          <legend className='w-full text-center mb-8 text-2xl font-bold'>
            {title}
          </legend>
          {renderSteps(currentStep)}
        </fieldset>
      </form>
      <div className='absolute bottom-4 right-8 gap-4 col-span-full pb-4 mt-4'>
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

export default Form;
