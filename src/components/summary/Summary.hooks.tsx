import { useState } from 'react';
import { useMainStore } from '../../store/MainStore';

const useSummary = () => {
  const [loading, setLoading] = useState(false);

  const data = useMainStore((state) => state.data);

  return { data, loading, setLoading };
};

export default useSummary;
