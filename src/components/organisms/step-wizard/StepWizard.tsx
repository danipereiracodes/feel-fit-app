import useStepWizard from './StepWizard.hooks';
import FormContainer from '../FormContainer';
import HomeBanner from '../HomeBanner';
import formVector from '../../atoms/vectors/formVector.svg';

/**
 * StepWizard  manages the overall flow and rendering of the application.
 * It handles the logic for determining which content to display based on the current step,
 * and renders the appropriate UI components, including step forms, summary and the checkout (plan) component.
 *
 * @param {number} currentStep - The current step of the application flow.
 * @param {Function} onNextStep - Function to proceed to the next step.
 * @param {Function} onPrevStep - Function to go back to the previous step.
 * @returns {JSX.Element} - The rendered component.
 */

interface StepsProps {
  currentStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
}

const StepWizard: React.FC<StepsProps> = ({
  currentStep,
  onNextStep,
  onPrevStep,
}) => {
  const { stepContent } = useStepWizard({
    currentStep,
    onNextStep,
    onPrevStep,
  });

  return (
    <>
      {currentStep === 0 ? (
        <>
          <HomeBanner />
          <section className='signin'>
            <form className='signin__form'>
              <fieldset>
                <legend>Sign In</legend>
                <input
                  type='text'
                  className='signin__form__input'
                  placeholder='Your Email'
                />
                <input
                  type='text'
                  className='signin__form__input'
                  placeholder='Your Password'
                />
                <button type='submit' className='signin__form__button'>
                  Sign In
                </button>

                <p>
                  Don't have an account?
                  <a href='/'>
                    {' '}
                    <span>register now</span>
                  </a>
                </p>
              </fieldset>
            </form>
            <img
              src={formVector}
              alt='not relevant stlye vector'
              className='signin__form__vector'
            />
          </section>
        </>
      ) : (
        <>
          {stepContent && currentStep !== 5 && (
            <FormContainer>{stepContent}</FormContainer>
          )}
          {currentStep === 5 && stepContent}
        </>
      )}
    </>
  );
};
export default StepWizard;
