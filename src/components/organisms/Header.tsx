import Heart from '../atoms/icons/heart.svg';
import User from '../atoms/icons/user.svg';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__logo'>
          <img src={Heart} alt='feel fit logo' /> <span>Feel Fit</span>
        </div>
        <div className='header__user'>
          {' '}
          <img src={User} alt='user login icon' />{' '}
        </div>
      </div>
    </header>
  );
};

export default Header;
