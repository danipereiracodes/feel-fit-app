import useStepWizard from './StepWizard.hooks';
import FormContainer from '../FormContainer';
import HomeBanner from '../HomeBanner';

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
        <HomeBanner />
      ) : (
        <>

          {stepContent && currentStep !== 5 && (
            <FormContainer>
              <div className='flex flex-col p-8 h-full'>{stepContent}</div>
            </FormContainer>
          )}
          {currentStep === 5 && stepContent}

        </>
      )}
    </>
  );
};
export default StepWizard;
