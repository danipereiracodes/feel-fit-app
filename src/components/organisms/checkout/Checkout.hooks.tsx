
import { useState } from 'react';

import { useMainStore } from '../../../store/MainStore';

const usePlan = () => {
  /*   const [fakeData, setFakeData] = useState<OpenAIResponse | null>(null); */
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const userName = useMainStore((state) => state.data.name);
  

  useEffect(() => {
    function fetchMockData() {
      setLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return new Promise<OpenAIResponse | null>((resolve, _reject) => {
        setTimeout(() => {
          resolve(mockResponse);
          setLoading(false);
        }, 2000);
      });
    }

    fetchMockData()
      .then((data: OpenAIResponse | null) => {
        console.log('Fetched data:', data);
        setFakeData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(
          'There was an error trying to get the data , please try again'
        );
      });
  }, []);

  const date = new Date().toLocaleString(); */

  return { loading, setLoading, setError, error, userName };

};

export default usePlan;
