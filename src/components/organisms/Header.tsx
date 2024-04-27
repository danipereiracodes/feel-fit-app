const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-center bg-secondary-dark text-primary-gray font-extrabold text-2xl'>
      <a href='/'>
        <div className='flex gap-2 items-center'>
          <img
            className='w-[125px]'
            src='./images/logo/fee-fit-logo.png'
            alt='feel fit logo'
          />
        </div>
      </a>
    </header>
  );
};

export default Header;
