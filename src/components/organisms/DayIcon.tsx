import { FaRegCalendarAlt, FaRegSun } from 'react-icons/fa';
import { IoMdTrendingUp, IoMdSunny, IoMdBeer } from 'react-icons/io';
import { MdEvent } from 'react-icons/md';
import { BiCoffee } from 'react-icons/bi';

interface DayIconProps {
  day: string;
}

const DayIcon: React.FC<DayIconProps> = ({ day }) => {
  let iconComponent;
  console.log(day);

  switch (day) {
    case 'Sunday':
      iconComponent = <FaRegSun />;
      break;
    case 'Monday':
      iconComponent = <FaRegCalendarAlt />;
      break;
    case 'Tuesday':
      iconComponent = <IoMdTrendingUp />;
      break;
    case 'Wednesday':
      iconComponent = <MdEvent />;
      break;
    case 'Thursday':
      iconComponent = <BiCoffee />;
      break;
    case 'Friday':
      iconComponent = <IoMdBeer />;
      break;
    case 'Saturday':
      iconComponent = <IoMdSunny />;
      break;
    default:
      iconComponent = null;
  }

  return <div className='text-8xl'>{iconComponent}</div>;
};

export default DayIcon;
