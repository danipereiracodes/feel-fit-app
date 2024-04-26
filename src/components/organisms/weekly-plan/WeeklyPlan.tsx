import { ExercisePlan, MealPlan } from '../../../mocks/dataResponseMock';
import DayIcon from '../DayIcon';

interface WeeklyPlanProps {
  userName: string;
  timeStamp: string | Date;
  data: {
    exercisePlan: ExercisePlan;
    mealPlan: { [day: string]: MealPlan };
  };
}

const WeeklyPlan: React.FC<WeeklyPlanProps> = ({
  userName,
  timeStamp,
  data,
}) => {
  return (
    <section className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-bold z-20 gap-4 justify-items-center'>
      <div className=' text-center text-white flex flex-col gap-4 col-span-full'>
        <h1 className='text-2xl'>
          {`${userName}'s week meal and exercise plan on ${timeStamp}`}
        </h1>
      </div>
      {Object.keys(data.exercisePlan).map((day, index) => (
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
