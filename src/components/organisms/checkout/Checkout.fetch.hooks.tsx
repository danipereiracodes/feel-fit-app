import { useEffect, useState } from 'react';
import { generatePrompt } from '../../../utils/GeneratePrompt';
import { useMainStore } from '../../../store/MainStore';

export interface PlanData {
  exercisePlan: string;
  mealPlan: string;
}

const useCheckoutFetch = () => {
  const [data, setData] = useState<{
    exercisePlan: { [day: string]: string };
    mealPlan: { [day: string]: { [meal: string]: string } };
  } | null>(null); // Updated type
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showTips, setShowTips] = useState(false);
  const userData = useMainStore((state) => state.data);
  const prompt = generatePrompt(userData);

  async function fetchChatCompletions() {
    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
    const url = 'https://api.openai.com/v1/chat/completions';

    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorMessage = `Error: ${response.status} - ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
  }

  useEffect(() => {
    setLoading(true);
    setShowTips(true);
    fetchChatCompletions()
      .then((data) => {
        setData(JSON.parse(data.choices[0]?.message?.content));
        setLoading(false);
        setShowTips(false);
      })
      .catch((error) => {
        console.error(error);
        setError(
          'There was a problem generating your Plan , please try again in a few seconds'
        );
      });
  }, []);

  return { data, loading, error, showTips };
};

export default useCheckoutFetch;
