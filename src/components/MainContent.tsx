import { useEffect, useState } from 'react';
import { useStepStore } from '../store/StepStore';
import StepOneForm from './form-steps/StepOneForm';
import { healtData } from '../lib/data/healthTips';

const fetchData = () => {
  const shuffledhealthData = healtData.sort(() => Math.random() - 0.5);
  return shuffledhealthData;
};

const MainContent: React.FC = () => {
  const step = useStepStore((state) => state.step);
  const setStep = useStepStore((state) => state.addStep);
  const [tips, setTips] = useState<string>('Loading...');

  useEffect(() => {
    setTips(fetchData()[0]);
  }, []);

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
        return (
          <div className='transition-opacity ease-in-out delay-150 z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8 w-[350px] md:w-[500px] lg:w-[750px] text-black font-extrabold text-2xl'>
            <StepOneForm
              title='Some information about you'
              gridCols='grid-cols-2'
              onNextStep={handleSubmit}
            />
          </div>
        );
      case 2:
        return (
          <div className='z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8 max-w-2/3 min-w-1/3 text-black font-extrabold text-2xl'>
            <StepOneForm
              title='Tell us about your diet or alergies'
              gridCols='grid-cols-1'
              onNextStep={handleSubmit}
            />
          </div>
        );

      case 3:
        return (
          <div className='z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8 max-w-2/3 min-w-1/3 text-black font-extrabold text-2xl'>
            <StepOneForm
              title='How often do you exercise?'
              gridCols='1'
              onNextStep={handleSubmit}
            />
          </div>
        );

      case 4:
        return (
          <div className='z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8 max-w-2/3 min-w-1/3 text-black font-extrabold text-2xl'>
            <button onClick={() => setStep(0)}>Share</button>
          </div>
        );

      default:
        setStep(0);

        return HomeBanner();
    }
  };

  const handleSubmit = () => {
    setStep(step + 1);
  };

  return (
    <section className='relative flex flex-col gap-8 items-center justify-center bg-[url("/images/background/fitness_background.avif")] bg-center bg-cover bg-no-repeat'>
      <div className='absolute w-full h-full inset-0 bg-banner-overlay'></div>

      <RenderSteps currentStep={step} />

      {step === 0 && (
        <div className='flex items-center gap-4 z-20 text-white font-normal text-md'>
          <button
            onClick={handleSubmit}
            className='uppercase border-4 border-bright-secondary  rounded-xl w-32  py-2 px-6 hover:bg-bright-secondary'
          >
            Start
          </button>{' '}
          <button className='uppercase border-4 border-bright-secondary  w-32 rounded-xl py-2 px-6 hover:bg-bright-secondary '>
            Login
          </button>
        </div>
      )}
      <div className='fixed top-8 left-24 w-[150px] h-[150px] flex flex-wrap rounded-xl bg-black text-white p-4 text-ellipsis line-clamp-3'>
        <div className=' relative  flex items-center no-wrap '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='absolute top-0 icon icon-tabler icons-tabler-outline icon-tabler-bulb'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7' />
            <path d='M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3' />
            <path d='M9.7 17l4.6 0' />
          </svg>{' '}
          <span className='mt-8'>{tips}</span>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
