/* import { mockInputValues } from '../mocks/userDataMock'; */

import useSummary from './Summary.hooks';
import Button from './atoms/Buton';

interface SummaryProps {
  onPrevStep: () => void;
  onNextStep: () => void;
  title: string;
}

const Summary: React.FC<SummaryProps> = ({ onPrevStep, onNextStep, title }) => {
  const { data } = useSummary();
  const {
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
    goal,
  } = data;

  return (
    <>
      {' '}
      <h1 className='w-full text-center mb-8 text-2xl font-bold'>
        {title && title}
      </h1>
      <ul className='grid grid-cols-3 overflow-auto'>
        <li className='flex flex-col'>
          <strong className=' font-bold text-black'>Age:</strong> {age}
        </li>
        <li className='flex flex-col'>
          <strong className=' font-bold text-black'>Gender:</strong> {gender}
        </li>
        <li className='flex flex-col'>
          <strong className=' font-bold text-black'>Height:</strong> {height}
        </li>
        <li className='flex flex-col'>
          <strong className=' font-bold text-black'>Weight:</strong> {weight}
        </li>
        <li className='flex flex-col'>
          <strong className=' font-bold text-black'>Diet:</strong> {diet}
        </li>
        <li className='flex flex-col'>
          <strong className=' font-bold text-black'>Fasting:</strong>{' '}
          {fasting ? 'Yes' : 'No'}
        </li>
        {fastingFreq.length ? (
          <li className='flex flex-col'>
            <strong className=' font-bold text-black'>Fasting freq:</strong>{' '}
            {fastingFreq}
          </li>
        ) : null}
        {allergies !== '' ? (
          <li className='flex flex-col'>
            <strong className=' font-bold text-black'>Allergies:</strong>{' '}
            {allergies}
          </li>
        ) : null}
        <li className='flex flex-col'>
          <strong className=' font-bold text-black'>Exercise Exp:</strong>{' '}
          {exerciseExp}
        </li>
        <li className='flex flex-col'>
          <strong className=' font-bold text-black'>Exercise Freq:</strong>{' '}
          {exerciseFreq}
        </li>
        {injuries !== '' ? (
          <li className='flex flex-col'>
            <strong className=' font-bold text-black'>Injuries:</strong>{' '}
            {injuries}
          </li>
        ) : null}
        <li className='flex flex-col'>
          <strong className=' font-bold text-black'>Goal:</strong> {goal}
        </li>
      </ul>
      <div className='gap-4 col-span-full text-end mt-8 bottom-16 right-4'>
        <Button
          onClick={onPrevStep}
          type='button'
          styles='w-24 z-20 rounded-xl bg-gray-700 py-2 text-white font-normal text-lg col-span-2 place-self-end hover:scale-110 transition duration-300 ease-in-out'
          text='Back'
        />
        <Button
          onClick={onNextStep}
          type='button'
          styles='w-24 rounded-xl ml-4 z-20 bg-bright-secondary py-2 text-white font-normal text-lg col-span-2 place-self-end hover:scale-110 transition duration-300 ease-in-out'
          text='Proceed'
        />
      </div>
    </>
  );
};
export default Summary;
