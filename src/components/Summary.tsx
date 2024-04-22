/* import { mockInputValues } from '../mocks/userDataMock'; */
import { useStepStore } from '../store/StepStore';
import Button from './buttons/Buton';

const Summary: React.FC = () => {
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
  } = data;

  return (
    <>
      <table className='w-full  text-md '>
        <tbody className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2'>
          <tr className='flex flex-col border border-1 '>
            <td className='px-4 bg-bright-secondary w-full'>name</td>
            <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white'>
              {name}
            </td>
          </tr>
          <tr className='flex flex-col border border-1  '>
            <td className='bg-bright-secondary px-4 '>Lastname</td>
            <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white h-full'>
              {lastname}
            </td>
          </tr>
          <tr className='flex flex-col border border-1  '>
            <td className='bg-bright-secondary px-4 '>Age</td>
            <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white h-full'>
              {age}
            </td>
          </tr>
          <tr className='flex flex-col border border-1  '>
            <td className='bg-bright-secondary px-4 '>Gender</td>
            <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white h-full'>
              {gender}
            </td>
          </tr>
          <tr className='flex flex-col border border-1  '>
            <td className='bg-bright-secondary px-4 '>Height</td>
            <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white h-full'>
              {height}
            </td>
          </tr>
          <tr className='flex flex-col border border-1  '>
            <td className='bg-bright-secondary px-4 '>Weight</td>
            <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white h-full'>
              {weight}
            </td>
          </tr>
          <tr className='flex flex-col border border-1  '>
            <td className='bg-bright-secondary px-4  '>Diet</td>
            <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white h-full'>
              {diet}
            </td>
          </tr>
          <tr className='flex flex-col border border-1  '>
            <td className='bg-bright-secondary px-4 '>Fasting</td>
            <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white h-full'>
              {fasting ? 'Yes' : 'No'}
            </td>
          </tr>
          {fastingFreq.length ? (
            <tr className='flex flex-col border border-1  '>
              <td className='bg-bright-secondary px-4 '>Fasting freq</td>
              <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white h-full'>
                {fastingFreq}
              </td>
            </tr>
          ) : null}
          {allergies !== '' ? (
            <tr className='flex flex-col border border-1  '>
              <td className='bg-bright-secondary px-4 '>Allergies</td>
              <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white h-full'>
                {allergies}
              </td>
            </tr>
          ) : null}
          <tr className='flex flex-col border border-1'>
            <td className='bg-bright-secondary px-4 '>Exercise Exp</td>
            <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white h-full overflow-x-auto'>
              {exerciseExp}
            </td>
          </tr>
          <tr className='flex flex-col border border-1'>
            <td className='bg-bright-secondary px-4 '>Exercise Freq</td>
            <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white h-full overflow-x-auto'>
              {exerciseFreq}
            </td>
          </tr>
          {injuries !== '' ? (
            <tr className='flex flex-col border border-1'>
              <td className='bg-bright-secondary px-4 '>Injuries</td>
              <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap bg-white h-full overflow-x-auto'>
                {injuries}
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <div className='button-container text-end mt-8'>
        <Button
          type='button'
          styles={
            'w-1/3 mx-auto z-20 bg-bright-secondary rounded-xl py-2 text-white font-normal text-lg col-span-2 w-52 place-self-end'
          }
          text='Get plan!'
        />
      </div>
    </>
  );
};

export default Summary;
