import { useMainStore } from '../../store/MainStore';

import Steps from './step-wizard/StepWizard';

import Button from '../atoms/Buton';
import { useEffect, useState } from 'react';

const MainContent: React.FC = () => {
  const [backgroundImg, setBackgroundImg] = useState('background0.jpg');
  const step = useMainStore((state) => state.step);
  const setStep = useMainStore((state) => state.addStep);

  const handleStepBack = () => {
    setStep(step - 1);
  };

  const handleStepForward = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    setBackgroundImg(`background${step}.jpg`);
  }, [step]);

  return (
    <section
      style={{
        backgroundImage: `url("/images/background/${backgroundImg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
      className={`relative flex flex-col gap-8 p-12 items-center justify-center `}
    >
      <div className='absolute w-full h-full inset-0 bg-banner-overlay'></div>

      <Steps
        currentStep={step}
        onNextStep={handleStepForward}
        onPrevStep={handleStepBack}
      />

      {step === 0 && (
        <div className='flex items-center gap-4 z-20 text-white hover:scale-110 transition duration-300 ease-in-out'>
          <Button
            type='button'
            onClick={handleStepForward}
            text='Start'
            styles='uppercase w-32  py-2 px-6 bg-bright-secondary rounded-xl'
          />
        </div>
      )}
    </section>
  );
};

export default MainContent;
