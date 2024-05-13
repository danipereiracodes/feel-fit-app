const Header: React.FC = () => {
  return (
    <header className='flex items-center bg-secondary-dark text-primary-gray font-extrabold text-2xl'>
      <div className='container mx-auto'>
        <a href='/'>
          <div className='flex gap-2 items-center'>
            <img
              className='w-[125px]'
              src='./images/logo/fee-fit-logo.png'
              alt='feel fit logo'
            />
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
