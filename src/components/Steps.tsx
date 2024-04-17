import { useStepStore } from '../store/StepStore';
import HomeBanner from './HomeBanner';
import Button from './buttons/Buton';
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
        <div className='transition-opacity ease-in-out delay-150 z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8 w-[350px] md:w-[500px] lg:w-[750px] text-black font-extrabold text-2xl'>
          <CustomForm
            title='Some information about you'
            gridCols='grid-cols-3'
            onNextStep={onSubmit}
          />
        </div>
      );
    case 2:
      return (
        <div className='z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8 max-w-2/3 min-w-1/3 text-black font-extrabold text-2xl'>
          <CustomForm
            title='Tell us about your diet or alergies'
            gridCols='grid-cols-1'
            onNextStep={onSubmit}
          />
        </div>
      );

    case 3:
      return (
        <div className='z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8 max-w-2/3 min-w-1/3 text-black font-extrabold text-2xl'>
          <CustomForm
            title='How often do you exercise?'
            gridCols='1'
            onNextStep={onSubmit}
          />
        </div>
      );

    case 4:
      return (
        <div className='z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8 max-w-2/3 min-w-1/3 text-black font-extrabold text-2xl'>
          <Button
            type='button'
            onClick={() => setStep(0)}
            text='Share'
            styles=''
          />
        </div>
      );

    default:
      setStep(0);

      return <HomeBanner />;
  }
};

export default Steps;
