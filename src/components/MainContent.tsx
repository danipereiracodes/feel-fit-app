import { useStepStore } from '../store/StepStore';

import Steps from './Steps';

import Button from './buttons/Buton';

/* const fetchData = () => {
  const shuffledhealthData = healtData.sort(() => Math.random() - 0.5);
  return shuffledhealthData;
}; */

const MainContent: React.FC = () => {
  const step = useStepStore((state) => state.step);
  const setStep = useStepStore((state) => state.addStep);
  /* const [tips, setTips] = useState<string>('Loading...'); */

  const handleStepBack = () => {
    setStep(step - 1);
  };

  const handleStepForward = () => {
    setStep(step + 1);
  };

  return (
    <section className='relative flex flex-col gap-8 p-12 items-center justify-center bg-[url("/images/background/fitness_background.avif")] bg-center bg-cover bg-no-repeat'>
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
      {/* TODO: TIP COMPONENT <div className='fixed top-8 left-24 w-[150px] h-[150px] flex flex-wrap  bg-black text-white p-4 text-ellipsis line-clamp-3'>
        <div className=' relative  flex items-center no-wrap '>
          <img src={myBulb} alt='bulb'></img>{' '}
          <span className='mt-8'>{tips}</span>
        </div>
      </div> */}
    </section>
  );
};

export default MainContent;
