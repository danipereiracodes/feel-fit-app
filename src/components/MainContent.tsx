import { useState } from 'react';
import { useStepStore } from '../store/StepStore';

const buttonTextInitialState = 'Get Started!';

const MainContent: React.FC = () => {
  const [buttonText, setButtonText] = useState<string>(buttonTextInitialState);
  const step = useStepStore((state) => state.step);
  const setStep = useStepStore((state) => state.addStep);

  const HomeBanner = () => {
    return (
      <div className='z-20 flex flex-col gap-4 items-center text-center w-2/3 text-white text-2xl font-bold'>
        <h1>
          Get your weekly meal prep and exercise plan{' '}
          <span className='font-bold underline'>in seconds</span>, starting now!
        </h1>
      </div>
    );
  };

  const RenderSteps = ({ currentStep }: { currentStep: number }) => {
    switch (currentStep) {
      case 1:
        setButtonText('Step Two');
        return (
          <div className='bg-slate-200 rounded-xl p-8 w-[500px] h-[500px] text-black font-extrabold text-2xl'>
            Form Step 1
          </div>
        );

      case 2:
        setButtonText('Step three');
        return (
          <div className='bg-slate-200 rounded-xl p-8 w-[500px] h-[500px] text-black font-extrabold text-2xl'>
            Form Step 2
          </div>
        );

      case 3:
        setButtonText('Go to summary');
        return (
          <div className='bg-slate-200 rounded-xl p-8 w-[500px] h-[500px] text-black font-extrabold text-2xl'>
            Form Step 3
          </div>
        );

      case 4:
        setButtonText('Submit');
        return (
          <div className='bg-slate-200 rounded-xl p-8 w-[500px] h-[500px] text-black font-extrabold text-2xl'>
            SUMMARY <button>Share</button>
          </div>
        );

      default:
        setStep(0);
        setButtonText(buttonTextInitialState);
        return HomeBanner();
    }
  };

  return (
    <section className='relative flex flex-col gap-8 items-center justify-center bg-[url("/images/background/fitness_background.avif")] bg-center bg-cover bg-no-repeat'>
      <div className='absolute w-full h-full inset-0 bg-banner-overlay'></div>
      <RenderSteps currentStep={step} />
      <button
        onClick={() => {
          setStep(step + 1);
        }}
        className='z-20 bg-bright-secondary rounded-xl py-2 px-4 text-white font-normal text-lg'
      >
        {buttonText}
      </button>
    </section>
  );
};

export default MainContent;
