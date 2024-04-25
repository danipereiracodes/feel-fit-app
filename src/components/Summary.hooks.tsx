import { useState, useEffect } from 'react';
import { useStepStore } from '../store/StepStore';

const useSummary = () => {
  const [loading, setLoading] = useState(false);
  /* const {
      name,
      lastname,
      age,
      gender,
      height,
      weight,
      allergies,
      fasting,
      fastingFreq,
      injuries,
      diet,
      exerciseExp,
      exerciseFreq,
    } = mockInputValues; */

  const data = useStepStore((state) => state.data);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return { data, loading };
};

export default useSummary;
