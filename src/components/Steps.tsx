import { useStepStore } from '../store/StepStore';
import HomeBanner from './HomeBanner';
import Summary from './Summary';

import CustomForm from './form-steps/CustomForm';

interface StepsProps {
  currentStep: number;
  onSubmit: () => void;
}

const Steps: React.FC<StepsProps> = ({ currentStep, onSubmit }) => {
  const setStep = useStepStore((state) => state.addStep);

  switch (currentStep) {
    case 1:
      return (
        <div className='transition-opacity ease-in-out delay-150 z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8 min-h-[500px] w-[350px] md:w-[500px] lg:w-[750px] text-black font-extrabold text-2xl'>
          <CustomForm
            title='Lets start with some information about you'
            gridCols='grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
            onNextStep={onSubmit}
          />
        </div>
      );
    case 2:
      return (
        <div className='z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8  text-black font-extrabold text-2xl w-[350px] min-h-[500px] md:w-[500px] lg:w-[750px]'>
          <CustomForm
            title='Now tell us about your alergies or special diet'
            gridCols='grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            onNextStep={onSubmit}
          />
        </div>
      );

    case 3:
      return (
        <div className='z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8  text-black font-extrabold text-2xl w-[350px] min-h-[500px] md:w-[500px] lg:w-[750px]'>
          <CustomForm
            title='How often do you exercise?'
            gridCols='grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            onNextStep={onSubmit}
          />
        </div>
      );

    case 4:
      return (
        <div className='z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8 text-black font-extrabold text-2xl w-[350px] min-h-[500px] md:w-[500px] lg:w-[750px]'>
          <Summary />
        </div>
      );

    default:
      setStep(0);

      return <HomeBanner />;
  }
};

export default Steps;
