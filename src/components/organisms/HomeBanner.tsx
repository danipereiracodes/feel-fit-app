const HomeBanner: React.FC = () => {
  return (
    <section className='homebanner'>
      <h1 className='homebanner__title'>Welcome to feel-fit</h1>
      <p className='homebanner__paragraph'>
        Get your full meal plans and exercise plans in seconds to start taking
        action.
      </p>
      <button className='homebanner__button'>Get Started</button>
    </section>
  );
};

export default HomeBanner;
