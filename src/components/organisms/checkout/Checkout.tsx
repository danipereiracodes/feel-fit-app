import { useState, useEffect } from 'react';

/* import { openAiMock } from '../../../mocks/dataResponseMock'; */

import usePlan from './Checkout.hooks';
import { healtData } from '../../../lib/data/healthTips';
import { mockResponse } from '../../../mocks/dataResponseMock';
import WeeklyPlan from '../weekly-plan/WeeklyPlan';
import FetchOpenAi from '../../FetchOpenAi';

const Plan = () => {
  const [planData, setPlanData] = useState<string>(null);
  const [username, setUserName] = useState('');
  const [tips, setTips] = useState<string | null>(
    'Some tips while we create your plan'
  );
  const { data, loading, error } = FetchOpenAi();
  const { userName } = usePlan();

  const shuffleTips = () => {
    const shuffledhealthData = healtData.sort(() => Math.random() - 0.5);
    return shuffledhealthData;
  };

  useEffect(() => {
    let tipInterval: number;

    if (data) {
      setPlanData(data);
      setUserName(userName);
      setTips(null);
    } else {
      tipInterval = setInterval(() => {
        setTips(shuffleTips()[0]);
      }, 5000);
    }

    return () => clearInterval(tipInterval);
  }, [data]);

  return loading ? (
    <div className='z-30 text-center text-white flex flex-col gap-12 justify-center items-center'>
      <h1 className='font-bold text-2xl'>{tips}</h1>
      <div className='loader'></div>
    </div>
  ) : error ? (
    <h1 className='z-20'>Error: {error}</h1>
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
