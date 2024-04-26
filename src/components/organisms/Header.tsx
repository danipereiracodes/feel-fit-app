const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-center bg-secondary-dark text-primary-gray font-extrabold text-2xl'>
      <a href='/'>
        <div className='flex gap-2 items-center'>
          <h1>Feel fit </h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 30 30'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-stretching'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
            <path d='M5 20l5 -.5l1 -2' />
            <path d='M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2' />
          </svg>
        </div>
      </a>
    </header>
  );
};

export default Header;
