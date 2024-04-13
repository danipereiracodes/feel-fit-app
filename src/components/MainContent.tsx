import StepOneForm from './form-steps/StepOneForm';

const MainContent: React.FC = () => {
  return (
    <section className='relative flex items-center justify-center bg-[url("/images/background/fitness_background.avif")] bg-center bg-cover bg-no-repeat'>
      <div className='absolute w-full h-full inset-0 bg-banner-overlay'></div>
      <div className='z-20 flex flex-col gap-4 items-center text-center w-2/3 text-white text-2xl font-bold'>
        <h1>
          Get your weekly meal prep and exercise plan{' '}
          <span className='font-bold underline'>in seconds</span>, starting now!
        </h1>

        <button className='bg-bright-secondary rounded-xl py-2 px-4 text-white font-normal text-lg'>
          Get started!
        </button>
      </div>

      <div className='z-30'>
        <StepOneForm />
      </div>
    </section>
  );
};

export default MainContent;
