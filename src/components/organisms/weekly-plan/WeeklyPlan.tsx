import { useEffect, useState } from 'react';
import { Result } from '../../../types/UnsplashTypes';
import { MealPlan } from '../../../mocks/dataResponseMock';

interface WeeklyPlanProps {
  userName: string;
  timeStamp: string | Date;
  data: {
    exercisePlan: {
      [day: number]: { id: number; name: string; description: string };
    };
    mealPlan: {
      [day: number]: {
        id: number;
        name: string;
        description: MealPlan;
      };
    };
  } | null;
}

const ACCESS_KEY = 'h2YsqdVaG-F_K_dkgmvxytnS7WulHUzjJ0FT2w5XFN4';
const API_KEY = 'FRwY5Ts9Y8FPpJmudbnEVHimapHwcGRLHB4awpFadjI';

const WeeklyPlan: React.FC<WeeklyPlanProps> = ({ data }) => {
  const [exerciseImages, setExerciseImages] = useState<Result>();
  const [mealImages, setMealImages] = useState<Result>();
  const [showPlan, setShowPlan] = useState<string | null>('exercise');

  const fetchPhotos = (keyword: string) => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${keyword}&order_by=relevant&page=1&per_page=7&client_id=NdciUVGHqPk23VZ0p-uoF4Bt4DsiAgW_QyTOMefG-iM`
    )
      .then((response) => response.json())
      .then((data) => {
        if (keyword === 'exercise') {
          setExerciseImages(data.results);
        } else if (keyword === 'healthy meal') {
          setMealImages(data.results);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchPhotos('exercise');
    fetchPhotos('healthy meal');
  }, []);

  const handleShowPlan = (type: string) => {
    if (data && type === 'exercise') {
      return Object.keys(data.exercisePlan).map((day, index: number) => (
        <div className='relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg'>
          <div className='relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40'>
            <img
              src={exerciseImages && exerciseImages[index].urls?.small}
              alt='photo by whatever'
              className='w-[380px] h-[250px] object-cover'
            />
            <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60'></div>
            <button
              className='!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
              data-ripple-dark='true'
            >
              <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='white'
                  aria-hidden='true'
                  className='h-6 w-6'
                >
                  <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z'></path>
                </svg>
              </span>
            </button>
          </div>
          <div className='p-6'>
            <div className='mb-3 flex items-center justify-between'>
              <h5 className='block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased'>
                {data && data.exercisePlan[index + 1].name}
              </h5>
              <p className='flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  aria-hidden='true'
                  className='-mt-0.5 h-5 w-5 text-yellow-700'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                5.0
              </p>
            </div>
            <p className='block font-sans text-base font-light leading-relaxed text-gray-700 antialiased'>
              {data && data.exercisePlan[index + 1].description}
            </p>
          </div>
          <div className='p-6 pt-3'>
            <button
              className='block w-full select-none rounded-lg bg-bright-secondary py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-bright-secondary-500/20 transition-all hover:shadow-lg hover:shadow-bright-secondary-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
              data-ripple-light='true'
            >
              Instructions
            </button>
          </div>
        </div>
      ));
    } else {
      return Object.keys(data.mealPlan).map((day, index: number) => (
        <div className='relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg'>
          <div className='relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40'>
            <img
              src={mealImages && mealImages[index].urls?.small}
              alt='photo by whatever'
              className='w-[380px] h-[250px] object-cover'
            />
            <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60'></div>
            <button
              className='!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
              data-ripple-dark='true'
            >
              <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='white'
                  aria-hidden='true'
                  className='h-6 w-6'
                >
                  <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z'></path>
                </svg>
              </span>
            </button>
            <a
              className='flex gap-2 items-center absolute bottom-0 right-1 m-2 p-1 bg-black/50'
              href={mealImages && mealImages[index].user?.links.html}
              target='_blank'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-camera'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2' />
                <path d='M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
              </svg>
              <span className='text-white text-xs'>
                {mealImages && mealImages[index].user?.name}
              </span>
            </a>
          </div>
          <div className='p-6'>
            <div className='mb-3 flex items-center justify-between'>
              <h5 className='block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased'>
                {data && data.mealPlan[index + 1].name}
              </h5>
              <p className='flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased text-xs'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='#1f2833'
                  aria-hidden='true'
                  className='-mt-0.5 h-5 w-5 text-yellow-700'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                No rate
              </p>
            </div>
            <p className='block font-sans text-base font-light leading-relaxed text-gray-700 antialiased'>
              {data && data.exercisePlan[index + 1].description}
            </p>
          </div>
          <div className='p-6 pt-3'>
            <button
              className='block w-full select-none rounded-lg bg-bright-secondary py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-bright-secondary-500/20 transition-all hover:shadow-lg hover:shadow-bright-secondary-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
              data-ripple-light='true'
            >
              Recipe
            </button>
          </div>
        </div>
      ));
    }
  };

  return (
    <section className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-bold z-20 gap-4 justify-items-center'>
      <nav className=' text-center text-white flex gap-4 col-span-full'>
        <ul className='flex gap-4 text-shite text-lg'>
          <li
            className='hover:text-secondary-dark cursor-pointer'
            onClick={() => setShowPlan('exercise')}
          >
            Exercise Plan
          </li>
          <li
            className='hover:text-secondary-dark cursor-pointer'
            onClick={() => setShowPlan('meal')}
          >
            Meal Plan
          </li>
        </ul>
      </nav>
      {showPlan && handleShowPlan(showPlan)}
      {/* <div className=' text-center text-white flex flex-col gap-4 col-span-full'>
        <h2>Meal plan</h2>
      </div>
      {data &&
        Object.keys(data.mealPlan).map((day, index: number) => (
          <div className='relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg'>
            <div className='relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40'>
              <img
                src={mealImages && mealImages[index].urls?.small}
                alt='photo by whatever'
                className='w-[380px] h-[250px] object-cover'
              />
              <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60'></div>
              <button
                className='!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                type='button'
                data-ripple-dark='true'
              >
                <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='white'
                    aria-hidden='true'
                    className='h-6 w-6'
                  >
                    <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z'></path>
                  </svg>
                </span>
              </button>
              <a
                className='flex gap-2 items-center absolute bottom-0 right-1 m-2 p-1 bg-black/50'
                href={mealImages && mealImages[index].user?.links.html}
                target='_blank'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='icon icon-tabler icons-tabler-outline icon-tabler-camera'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2' />
                  <path d='M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
                </svg>
                <span className='text-white text-xs'>
                  {mealImages && mealImages[index].user?.name}
                </span>
              </a>
            </div>
            <div className='p-6'>
              <div className='mb-3 flex items-center justify-between'>
                <h5 className='block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased'>
                  {data && data.mealPlan[index + 1].name}
                </h5>
                <p className='flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased text-xs'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='#1f2833'
                    aria-hidden='true'
                    className='-mt-0.5 h-5 w-5 text-yellow-700'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  No rate
                </p>
              </div>
              <p className='block font-sans text-base font-light leading-relaxed text-gray-700 antialiased'>
                {data && data.exercisePlan[index + 1].description}
              </p>
            </div>
            <div className='p-6 pt-3'>
              <button
                className='block w-full select-none rounded-lg bg-bright-secondary py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-bright-secondary-500/20 transition-all hover:shadow-lg hover:shadow-bright-secondary-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                type='button'
                data-ripple-light='true'
              >
                Recipe
              </button>
            </div>
          </div>
        ))} */}
    </section>
  );
};

export default WeeklyPlan;
