import { ReactNode } from 'react';
import { useStepStore } from '../store/StepStore';
import HomeBanner from './HomeBanner';

import CustomForm from './form-steps/CustomForm';
import Summary from './Summary';

interface StepsProps {
  currentStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
}

interface FormLayoutProps {
  children: ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className='transition-opacity ease-in-out delay-150 z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8 min-h-[500px] w-[350px] md:w-[500px] lg:w-[750px] text-black font-extrabold text-2xl'>
      {children}
    </div>
  );
};

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
      stepContent = <Summary onPrevStep={onPrevStep} />;
      break;
    default:
      setStep(0);

      break;
  }

  return currentStep === 0 ? (
    <HomeBanner />
  ) : (
    <FormLayout>{stepContent}</FormLayout>
  );
};

export default Steps;
