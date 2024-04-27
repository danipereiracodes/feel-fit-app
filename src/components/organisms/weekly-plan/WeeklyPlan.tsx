import { IoMdDownload } from 'react-icons/io';

import DayIcon from '../DayIcon';
import { useState } from 'react';
import WeeklyPlanPDF from './WeeklyPlanPdf';
import { PDFViewer } from '@react-pdf/renderer';

interface WeeklyPlanProps {
  userName: string;
  timeStamp: string | Date;
  data: {
    exercisePlan: { [day: string]: string };
    mealPlan: { [day: string]: { [meal: string]: string } };
  } | null;
}

const WeeklyPlan: React.FC<WeeklyPlanProps> = ({
  userName,
  timeStamp,
  data,
}) => {
  const [showPdf, setShowPdf] = useState(false);

  const handleShowPdf = () => {
    setShowPdf(true);
  };

  const handleHidePdf = () => {
    setShowPdf(false);
  };

  const renderPdf = () => {
    return (
      <>
        <button
          onClick={handleHidePdf}
          className='z-20 font-boldflex gap-2 text-white w-[250px] mx-auto items-center justify-center uppercase py-2 px-6 bg-bright-secondary rounded-xl hover:scale-110 transition duration-300 ease-in-out'
        >
          Close pdf
        </button>
        <PDFViewer
          showToolbar={true}
          width='100%'
          height='600'
          style={{ zIndex: '20' }}
        >
          <WeeklyPlanPDF data={data} userName={userName} />
        </PDFViewer>
      </>
    );
  };
  return showPdf ? (
    renderPdf()
  ) : (
    <section className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-bold z-20 gap-4 justify-items-center'>
      <div className=' text-center text-white flex flex-col gap-4 col-span-full'>
        <h1 className='text-2xl'>
          {`${userName}'s week meal and exercise plan on ${timeStamp}`}
        </h1>
        <button
          onClick={handleShowPdf}
          className='flex gap-2 text-white w-[250px] mx-auto items-center justify-center uppercase py-2 px-6 bg-bright-secondary rounded-xl hover:scale-110 transition duration-300 ease-in-out'
        >
          View PDF
          <IoMdDownload />
        </button>
      </div>
      {data &&
        Object.keys(data.exercisePlan).map((day, index) => (
          <article key={index} className='relative group '>
            <div className='flip-card '>
              <div className='flip-card-inner '>
                <div className='flip-card-front bg-gray-700 text-center flex flex-col gap-4 justify-center items-center text-2xl rounded-xl '>
                  {day && <DayIcon day={day} />}
                  <h3>{day}</h3>
                </div>

                <div className='flip-card-back bg-white text-black p-4 overflow-auto rounded-xl no-scrollbar'>
                  <h2 className='text-bright-secondary text-xl uppercase '>
                    Exercise plan
                  </h2>

                  <p className='font-light'>{data.exercisePlan[day]}</p>
                  <h2 className='text-bright-secondary text-xl uppercase mt-4 '>
                    Meal Plan
                  </h2>

                  {Object.keys(data.mealPlan[day]).map((meal, mealIndex) => (
                    <div key={mealIndex} className='font-light'>
                      <span className='font-bold'>{meal}</span>{' '}
                      <p>{data.mealPlan[day][meal]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
    </section>
  );
};

export default WeeklyPlan;
