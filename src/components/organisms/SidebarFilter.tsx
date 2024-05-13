import { DietEnum } from '../../types/enums/DietEnums';
import { enumToSelectOptions } from '../../utils/EnumToSelectOptions';

/* 
interface SideBarFilterProps {
   
    
} */

const SideBarFilter: React.FC = () => {
  const dietOptions = enumToSelectOptions(DietEnum);

  return (
    <aside className='grid grid-cols-1 gap-4 bg-white mt-12 h-fit rounded-xl py-4 px-8 sticky top-0 left-0'>
      <div className='filter flex gap-2 mb-4 text-xl font-bold'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal '
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
          <path d='M4 6l8 0' />
          <path d='M16 6l4 0' />
          <path d='M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
          <path d='M4 12l2 0' />
          <path d='M10 12l10 0' />
          <path d='M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
          <path d='M4 18l11 0' />
          <path d='M19 18l1 0' />
        </svg>
        Filter
      </div>

      <div className='relative flex flex-col'>
        <label>
          Filter 1
          <select
            disabled={false}
            id='diet'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value={''}>Select</option>
            {dietOptions?.map((option, index) => (
              <option key={index}>{option.value}</option>
            ))}
          </select>
        </label>
      </div>
      <div className='relative flex flex-col'>
        <label>
          Filter 2
          <select
            disabled={false}
            id='diet'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value={''}>Select</option>
            {dietOptions?.map((option, index) => (
              <option key={index}>{option.value}</option>
            ))}
          </select>
        </label>
      </div>
      <div className='relative flex flex-col'>
        <label>
          Filter 3
          <select
            disabled={false}
            id='diet'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value={''}>Select</option>
            {dietOptions?.map((option, index) => (
              <option key={index}>{option.value}</option>
            ))}
          </select>
        </label>
      </div>
      <div className='relative flex flex-col'>
        <label>
          Filter 4
          <select
            disabled={false}
            id='diet'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value={''}>Select</option>
            {dietOptions?.map((option, index) => (
              <option key={index}>{option.value}</option>
            ))}
          </select>
        </label>
      </div>
      <span className='col-span-full text-center text-sm uppercase font-bold mt-4'>
        Apply Filter
      </span>
    </aside>
  );
};

export default SideBarFilter;
