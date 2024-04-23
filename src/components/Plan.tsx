import { useEffect, useState } from 'react';
import { OpenAIResponse, mockResponse } from '../mocks/dataResponseMock';
import { useStepStore } from '../store/StepStore';
const Plan = () => {
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

  return loading ? (
    <div className='loader'></div>
  ) : fakeData && error === null ? (
    <section className='flex flex-col gap-4 z-20 text-white w-screen p-4 md:container'>
      <div className='mx-auto p-8 flex flex-col text-center gap-2'>
        {' '}
        <h1 className='text-4xl text-center mb-4'>
          Here's what we got for you {userName && userName}{' '}
        </h1>
        <p className='font-bold text-lg'>{date}</p>
        <p className='text-lg text-center'>
          Please note that our service provides a basic starting point for meal
          plans and exercise routines. Transform your journey towards a
          healthier lifestyle with our service! We offer a quick and motivating
          starting point for meal plans and exercise routines. While our tool
          provides valuable guidance, always remember to consult with a
          healthcare professional for personalized advice. Your path to wellness
          starts here!
        </p>
      </div>
      <article className='  overflow-auto p-8 bg-black/50 backdrop-opacity-50'>
        <h1 className='text-4xl font-bold text-center mb-24'>Exercise Plan</h1>
        <ul className='grid grid-cols-auto gap-4 '>
          {Object.keys(fakeData.data.exercisePlan).map((day) => (
            <li key={day} className=''>
              <span className='text-2xl font-bold cursive underline text-bright-secondary'>
                {day}
              </span>{' '}
              {fakeData.data.exercisePlan[day]}
            </li>
          ))}
        </ul>
      </article>

      <article className=' overflow-auto p-8 bg-black/50 backdrop-opacity-50'>
        <h1 className='text-4xl font-bold text-center mb-24'>Meals</h1>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {Object.keys(fakeData.data.mealPlan).map((day) => (
            <li key={day} className=''>
              <span className='text-2xl font-bold cursive underline text-bright-secondary'>
                {day}
              </span>

              <ul className='flex flex-col gap-4'>
                {Object.keys(fakeData.data.mealPlan[day]).map((meal) => (
                  <li key={meal}>
                    {' '}
                    <span className='font-bold'>{meal}</span>.{' '}
                    {fakeData.data.mealPlan[day][meal]}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </article>
    </section>
  ) : (
    <h1>{error}</h1>
  );
};

export default Plan;
