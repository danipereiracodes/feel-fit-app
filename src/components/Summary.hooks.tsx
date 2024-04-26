import { useState } from 'react';
import { useMainStore } from '../store/MainStore';

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

  const data = useMainStore((state) => state.data);

  return { data, loading, setLoading };
};

export default useSummary;
