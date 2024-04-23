/* import { mockInputValues } from '../mocks/userDataMock'; */
import { useEffect, useState } from 'react';
import { useStepStore } from '../store/StepStore';
import Button from './buttons/Buton';

interface SummaryProps {
  onPrevStep: () => void;
  onNextStep: () => void;
}

const Summary: React.FC<SummaryProps> = ({ onPrevStep, onNextStep }) => {
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

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <div className='loader'></div>
  ) : (
    <section className='transition-opacity ease-in-out delay-150 z-20 bg-white/50 p-8 w-[350px] md:w-[500px] lg:w-[750px] text-black text-lg'>
      <table className='  text-md'>
        <tbody className=' grid grid-cols-2 md:grid-cols-4 gap-2'>
          {/* <tr className='flex flex-col '>
            <td className='px-4 bg-gray-700 text-white font-bold text-black'>
              name
            </td>
            <td className='px-4 py-2 '>{name}</td>
          </tr>
          <tr className='flex flex-col  '>
            <td className=' px-4 bg-gray-700 text-white font-bold text-black'>
              Lastname
            </td>
            <td className='px-4 py-2  h-full'>{lastname}</td>
          </tr> */}
          <tr className='flex flex-col  '>
            <td className=' px-4 bg-gray-700 text-white font-bold text-black'>
              Age
            </td>
            <td className='px-4 py-2  h-full'>{age}</td>
          </tr>
          <tr className='flex flex-col  '>
            <td className=' px-4 bg-gray-700 text-white font-bold text-black'>
              Gender
            </td>
            <td className='px-4 py-2  h-full'>{gender}</td>
          </tr>
          <tr className='flex flex-col  '>
            <td className=' px-4 bg-gray-700 text-white font-bold text-black'>
              Height
            </td>
            <td className='px-4 py-2  h-full'>{height}</td>
          </tr>
          <tr className='flex flex-col  '>
            <td className=' px-4 bg-gray-700 text-white font-bold text-black'>
              Weight
            </td>
            <td className='px-4 py-2  h-full'>{weight}</td>
          </tr>
          <tr className='flex flex-col  '>
            <td className=' px-4 bg-gray-700 text-white font-bold text-black '>
              Diet
            </td>
            <td className='px-4 py-2  h-full'>{diet}</td>
          </tr>
          <tr className='flex flex-col  '>
            <td className=' px-4 bg-gray-700 text-white font-bold text-black'>
              Fasting
            </td>
            <td className='px-4 py-2  h-full'>{fasting ? 'Yes' : 'No'}</td>
          </tr>
          {fastingFreq.length ? (
            <tr className='flex flex-col  '>
              <td className=' px-4 bg-gray-700 text-white font-bold text-black'>
                Fasting freq
              </td>
              <td className='px-4 py-2  h-full'>{fastingFreq}</td>
            </tr>
          ) : null}
          {allergies !== '' ? (
            <tr className='flex flex-col  '>
              <td className=' px-4 bg-gray-700 text-white font-bold text-black'>
                Allergies
              </td>
              <td className='px-4 py-2  h-full truncate'>{allergies}</td>
            </tr>
          ) : null}
          <tr className='flex flex-col'>
            <td className=' px-4 bg-gray-700 text-white font-bold text-black'>
              Exercise Exp
            </td>
            <td className='px-4 py-2  h-full truncate'>{exerciseExp}</td>
          </tr>
          <tr className='flex flex-col'>
            <td className=' px-4 bg-gray-700 text-white font-bold text-black'>
              Exercise Freq
            </td>
            <td className='px-4 py-2  h-full truncate'>{exerciseFreq}</td>
          </tr>
          {injuries !== '' ? (
            <tr className='flex flex-col'>
              <td className=' px-4 bg-gray-700 text-white font-bold text-black'>
                Injuries
              </td>
              <td className='px-4 py-2  h-full truncate lip'>{injuries}</td>
            </tr>
          ) : null}
          <tr className='flex flex-col'>
            <td className=' px-4 bg-gray-700 text-white font-bold text-black'>
              Goal
            </td>
            <td className='px-4 py-2  h-full truncate'>{goal}</td>
          </tr>
        </tbody>
      </table>
      <div className='gap-4 col-span-full  text-end mt-8  bottom-16 right-4'>
        <Button
          onClick={onPrevStep}
          type='button'
          styles={
            'w-24 z-20 rounded-xl bg-gray-700  py-2 text-white font-normal text-lg col-span-2place-self-end hover:scale-110 transition duration-300 ease-in-out'
          }
          text='Back'
        />
        <Button
          onClick={onNextStep}
          type='button'
          styles={
            'w-24 rounded-xl ml-4 z-20 bg-bright-secondary  py-2 text-white font-normal text-lg col-span-2 place-self-end hover:scale-110 transition duration-300 ease-in-out'
          }
          text='Finish'
        />
      </div>
    </section>
  );
};
export default Summary;
