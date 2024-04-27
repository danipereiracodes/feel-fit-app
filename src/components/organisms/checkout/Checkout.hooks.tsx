import { useState, useEffect } from 'react';
import { healtData } from '../../../lib/data/healthTips';
import useCheckoutFetch from './Checkout.fetch.hooks';
import { useMainStore } from '../../../store/MainStore';

const useCheckout = () => {
  const [planData, setPlanData] = useState<{
    exercisePlan: { [day: string]: string };
    mealPlan: { [day: string]: { [meal: string]: string } };
  } | null>(null);
  const [username, setUserName] = useState('');
  const [tips, setTips] = useState<string | null>(
    'Some tips while we create your plan'
  );
  const { data, loading, error } = useCheckoutFetch();
  const userName = useMainStore((state) => state.data.name);

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

  return { loading, planData, tips, error, username };
};

export default useCheckout;
