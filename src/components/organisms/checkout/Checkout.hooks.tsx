import { useState, useEffect } from 'react';
import { OpenAIResponse, mockResponse } from '../../../mocks/dataResponseMock';
import { useStepStore } from '../../../store/StepStore';

const usePlan = () => {
  const [fakeData, setFakeData] = useState<OpenAIResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const userName = useStepStore((state) => state.data.name);

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

  const date = new Date().toLocaleString();

  return { fakeData, loading, error, userName, date };
};

export default usePlan;
