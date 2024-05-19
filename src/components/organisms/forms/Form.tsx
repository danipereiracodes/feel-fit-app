import Button from '../../atoms/Buton';
import useCustomForm from './Form.hooks';

interface FormProps {
  title: string;

  onNextStep: () => void;
  onPrevStep: () => void;
}

const Form: React.FC<FormProps> = ({ title, onNextStep, onPrevStep }) => {
  const {
    renderSteps,
    handleSubmit,
    onPrevStep: handlePrevStep,
    currentStep,
  } = useCustomForm(onNextStep, onPrevStep);

  return (
    <>
      <form className='step__form'>
        <fieldset className='step__form__fieldset'>
          <legend>{title}</legend>
          {renderSteps(currentStep)}
        </fieldset>
      </form>

      <Button
        onClick={handleSubmit}
        type='button'
        className='step__form__button'
        text='Next'
      />

      <Button
        onClick={handlePrevStep}
        type='button'
        className='step__form__button--back'
        text='Go Back'
      />
    </>
  );
};

export default Form;
