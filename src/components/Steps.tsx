import { useStepStore } from '../store/StepStore';
import HomeBanner from './HomeBanner';

import CustomForm from './form-steps/CustomForm';
import Summary from './Summary';
import Plan from './Plan';
import FormLayout from './layouts/FormLayout';

interface StepsProps {
  currentStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
}

const Steps: React.FC<StepsProps> = ({
  currentStep,
  onNextStep,
  onPrevStep,
}) => {
  const setStep = useStepStore((state) => state.addStep);

  let stepContent;
  switch (currentStep) {
    case 1:
      stepContent = (
        <CustomForm
          title='Lets start with some information about you'
          gridCols='grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
          onNextStep={onNextStep}
          onPrevStep={onPrevStep}
        />
      );
      break;
    case 2:
      stepContent = (
        <CustomForm
          title='Now tell us about your alergies or special diet'
          gridCols='grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '
          onNextStep={onNextStep}
          onPrevStep={onPrevStep}
        />
      );
      break;
    case 3:
      stepContent = (
        <CustomForm
          title='How often do you exercise?'
          gridCols='grid-cols-1 md:grid-cols-2 lg:grid-cols-2'
          onNextStep={onNextStep}
          onPrevStep={onPrevStep}
        />
      );
      break;
    case 4:
      stepContent = <Summary onPrevStep={onPrevStep} onNextStep={onNextStep} />;
      break;
    case 5:
      stepContent = <Plan />;
      break;
    default:
      setStep(0);

      break;
  }

  return currentStep === 0 ? (
    <HomeBanner />
  ) : (
    <>
      {currentStep !== 4 && currentStep !== 5 && (
        <FormLayout>{stepContent}</FormLayout>
      )}

      {currentStep === 4 && stepContent}
      {currentStep === 5 && stepContent}
    </>
  );
};

export default Steps;
