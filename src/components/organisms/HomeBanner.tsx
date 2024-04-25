const HomeBanner: React.FC = () => {
  return (
    <div className='z-20 flex flex-col gap-4 items-center text-center p-8 text-white '>
      <h1 className='text-4xl text-bright-primary'>Welcome to feel-fit</h1>
      <p className='text-lg'>
        You can stop spending half a day watching tens of YouTube and Tiktok
        videos seeking motivation.
        <br />
        Just
        <span className='font-bold text-xl text-bright-primary ml-1'>
          press start
        </span>{' '}
        and get a full week meal prep and exercise plan in seconds to{' '}
        <span className='font-bold text-bright-primary ml-1 text-xl'>
          {' '}
          start taking action.
        </span>
      </p>
    </div>
  );
};

export default HomeBanner;
