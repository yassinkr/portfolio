import PropTypes from 'prop-types';
import Book from '../assets/book.jsx';
import Pincel from '../assets/pincel.jsx';
import Tags from '../assets/tags.jsx';

const Card = ({ color,title,desc }) => {
  let svg;

  switch (color) {
    case 'myred':
      svg = <Book />;
      break;
    case 'myyellow':
      svg = <Tags />;
      break;
    case 'secondaryblue':
      svg = <Pincel />;
      break;
    default:
      svg = null;
  }
 
  return (
    <div className={`w-[250px] h-[342px] rounded-b-[125px] bg-${color} text-white relative `}>
      <div className={`bg-gradient-to-b from-${color} to-white w-full h-[145px] border-[9px] border-transparent text-42 text-white flex justify-center items-center `}>
       {title}
      </div>
      {svg && (
        <div className='rounded-full w-[97px] h-[97px] bg-white flex justify-center items-center absolute top-[97px] left-[72px] drop-shadow-[0_-5px_5px_rgba(0,0,0,0.25)]'>
          {svg}
        </div>
      )}
      <div className='text-center text-[17px] py-16 px-5 text-white'> {desc} </div>
    </div>
  );
};
Card.propTypes={
  color: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default Card;
