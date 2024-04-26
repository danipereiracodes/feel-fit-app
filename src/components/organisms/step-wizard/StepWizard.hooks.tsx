import Checkout from '../checkout/Checkout';
import Summary from '../../Summary';
import Form from '../forms/Form';

/**
 * useStepWizard is a custom hook that encapsulates the logic for determining
 * the content to render based on the current step of a multi-step process.
 * It takes the current step, onNextStep, and onPrevStep functions as input,
 * and returns the corresponding component to render for the current step.
 *
 * @param {UseStepLogicProps} props - The properties object containing currentStep,
 * onNextStep, and onPrevStep functions.
 * @returns {Object} - An object containing the stepContent component to render.
 */

interface UseStepWizardProps {
  currentStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
}

const useStepWizard = ({
  currentStep,
  onNextStep,
  onPrevStep,
}: UseStepWizardProps) => {
  const steps = [
    {
      component: (
        <Form
          onNextStep={onNextStep}
          onPrevStep={onPrevStep}
          title='Lets start with some information about you'
          gridCols='grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '
        />
      ),
    },
    {
      component: (
        <Form
          onNextStep={onNextStep}
          onPrevStep={onPrevStep}
          title='Now tell us about your alergies or special diet'
          gridCols='grid-cols-1 md:grid-cols-2 lg:grid-cols-2'
        />
      ),
    },
    {
      component: (
        <Form
          onNextStep={onNextStep}
          onPrevStep={onPrevStep}
          title='How often do you exercise?'
          gridCols='grid-cols-1 md:grid-cols-2 lg:grid-cols-2'
        />
      ),
    },
    {

      component: (
        <Summary
          title='Check your information'
          onPrevStep={onPrevStep}
          onNextStep={onNextStep}
        />
      ),

    },
    {
      component: <Checkout />,
    },
  ];

  const currentStepConfig = steps[currentStep - 1];
  const stepContent = currentStepConfig ? currentStepConfig.component : null;

  return { stepContent };
};

export default useStepWizard;
