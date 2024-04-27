import { useMainStore } from '../../store/MainStore';

const ProgressBar = () => {
  const currentStep = useMainStore((state) => state.step);

  const steps = 3;
  const progress = ((currentStep - 1) / steps) * 100;
  return (
    <div className='absolute top-0 w-full'>
      <div className='relative w-full h-[16px] bg-gray-200 rounded-t-xl overflow-hidden'>
        <div
          className='absolute top-0 left-0 h-full bg-bright-secondary rounded-tl-xl  transition-width duration-500 ease-in-out'
          style={{ width: `${progress}%` }}
        ></div>
        <div className='absolute top-0 right-0 h-full flex items-center justify-center pr-2 text-sm text-black font-bold'>
          {`${currentStep - 1}/${steps}`}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
