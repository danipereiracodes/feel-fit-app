import WeeklyPlan from '../weekly-plan/WeeklyPlan';
import useCheckout from './Checkout.hooks';

const Plan = () => {
  const { loading, tips, error, planData, username } = useCheckout();

  return loading ? (
    <div className='z-30 text-center text-white flex flex-col gap-12 justify-center items-center'>
      <h1 className='font-bold text-2xl'>{tips}</h1>
      <div className='loader'></div>
    </div>
  ) : error ? (
    <h1 className='z-20 text-white text-2xl text-center'>Error: {error}</h1>
  ) : planData ? (
    <WeeklyPlan
      userName={username}
      timeStamp={new Date().toLocaleDateString()}
      data={planData}
    />
  ) : (
    <div className='text-white text-2xl uppercase z-20'>
      <h1>No data available, please try again in a few seconds</h1>
    </div>
  );
};

export default Plan;
