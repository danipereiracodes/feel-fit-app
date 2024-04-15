import { useStepStore } from '../store/StepStore';
import StepOneForm from './form-steps/StepOneForm';

const MainContent: React.FC = () => {
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
            />
          </div>
        );

      case 3:
        return (
          <div className='z-20 backdrop-blur-sm bg-white/30 rounded-xl p-8 max-w-2/3 min-w-1/3 text-black font-extrabold text-2xl'>
            <StepOneForm title='How often do you exercise?' gridCols='1' />
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
        <button
          onClick={handleSubmit}
          className='z-20 bg-bright-secondary rounded-xl py-2 px-4 text-white font-normal text-lg'
        >
          Get Started!
        </button>
      )}
    </section>
  );
};

export default MainContent;
