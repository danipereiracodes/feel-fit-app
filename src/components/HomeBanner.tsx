const HomeBanner: React.FC = () => {
  return (
    <div className='z-20 flex flex-col gap-4 items-center text-center w-2/3 text-white text-2xl font-bold'>
      <h1>
        Get your weekly meal prep and exercise plan{' '}
        <span className='font-bold underline'>in seconds</span>, starting now!
      </h1>
    </div>
  );
};

export default HomeBanner;
