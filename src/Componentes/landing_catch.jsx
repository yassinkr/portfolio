import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import sparcle1 from '../assets/sparcle_1.svg'
import sparcle2 from '../assets/sparcle_2.svg'
import My_pic from '../assets/pic.jpg'
const LandingCatch = () => {
  const containerStyle = {
    position: 'absolute',
    left: '490px',
    top: '140px',
    zIndex: 10,
    width: '330px',
    height: '600px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Adjust as needed
    borderRadius: '170px',
    border: '15px solid white',
    backgroundImage: `url(${My_pic})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',  // Adjust as needed
    boxShadow: '-20px 0px 40px rgba(0, 0, 0, 0.25)',
  };

  return (
    
    <div className='bg-myblue flex justify-end font-bebas items-center text-center text-white h-screen w-full relative overflow-hidden'>
      <div style={containerStyle}></div>
        <div className=' bg-white absolute left-[-45rem] top-[-19rem] h-[80rem] rotate-45 aspect-square flex flex-col gap-16  py-16 z-0'>
        <div className='bg-myblue w-full h-10'></div>
        <div className='bg-myblue w-full h-10'></div>
      </div>
      <div className='absolute  w-[180px] h-[180px] top-[150px] left-[755px] z-10'>
     <img src={sparcle1} alt="sparcle1" />
      </div>
      <div className='absolute  w-[197px] h-[197px] bottom-32 left-[380px] z-10 '>
     <img src={sparcle2} alt="sparcle2" />
      </div>

      <div className='flex flex-col justify-center items-center px-80 '>
        <div className=' font-md text-7xl text-white'>
          HI! I am Yassin Kerrai
        </div>
        <div className='w-[80%] h-1 bg-white'>
        <div className='w-1 h-1 shadow-sm shadow-white animate-move' ></div>
        </div>
        <div className='text-29 font-md pt-2'>
          Crafting Digital Experiences with Precision and Passion
        </div>
        <div className='flex justify-center align-middle items-center text-white ' >
        <ul className='text-xs flex space-x-4'>
        <li>
        <img src={linkedin} alt="linkedin" />
        </li>
        <li>
        <img src={twitter} alt="twitter" />
        </li>
        <li>
        <img src={instagram} alt="instagram" />
        </li>
 
        </ul>

        </div>
      </div>
    </div>
  );
};

export default LandingCatch;
