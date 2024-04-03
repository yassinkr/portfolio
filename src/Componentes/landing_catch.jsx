import github from '../assets/github_icon.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import sparcle1 from '../assets/sparcle_1.svg'
import sparcle2 from '../assets/sparcle_2.svg'
import My_pic from '../assets/pic.jpg'

const LandingCatch = () => {
  const containerStyle = {
    position: 'absolute',
    zIndex: 10,
    width: '',
    height: '',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Adjust as needed
    borderRadius: '170px',
    border: '15px solid white',
    backgroundImage: `url(${My_pic})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',  // Adjust as needed
    boxShadow: '-20px 0px 40px rgba(0, 0, 0, 0.25)',
  };

  return (
    
    <div id="hero" className='bg-myblue flex justify-center lg:justify-end items-end lg:items-center text-center text-white h-screen w-full relative overflow-hidden'>
      <div style={containerStyle} className='w-[200px] h-[400px] md:w-[270px] md:h-[500px] lg:w-[330px] lg:h-[600px] top-[6%] mx-auto lg:mx-0 lg:left-[22%] 3xl:left-[490px]  lg:top-32 '></div>
        <div className=' bg-white absolute left-[-80rem] md:left-[-70rem] lg:left-[-65rem] 3xl:left-[-46rem] md:top-[-10rem] lg:top-[-19rem] h-[80rem] rotate-45 aspect-square flex flex-col gap-16  py-16 z-0'>
        <div className='bg-myblue w-full h-10'></div>
        <div className='bg-myblue w-full h-10'></div>
      </div>
      <div className='absolute  w-[180px] h-[180px] top-[5rem] lg:top-[150px] left-[120%] md:left-[60%]  lg:left-[45%] xl:left-[38%] z-10'>
     <img src={sparcle1} alt="sparcle1" />
      </div>
      <div className='absolute  w-[197px] h-[197px] bottom-[20rem] lg:bottom-32 left-[120%] md:left-[20%] z-10 '>
     <img src={sparcle2} alt="sparcle2" />
      </div>

      <div className='flex flex-col justify-center items-center mb-24 lg:mb-36  lg:mr-[5%] xl:mr-[7%]  3xl:px-80'>
        <div className=' font-md text-42 xl:text-7xl text-white'>
          HI! I am Yassin Kerrai
        </div>
        <div className='w-[80%] sm:w-full h-1 lg:mb-5 bg-white relative'>
                <div className=' absolute w-3 h-1 top-0 bottom-0 bg-white shadow-sm shadow-white animate-move'></div>
            </div>
        <div className='text-xl xl:text-29  font-md pt-2'>
          Crafting Digital Experiences with Precision and Passion
        </div>
        <div className='flex justify-center align-middle items-center text-white ' >
        <ul className='text-xs flex space-x-4'>
        <li>
          <a href="https://dz.linkedin.com/in/mohammed-yassine-kerrai-5a5237242"><img src={linkedin} alt="linkedin" /></a>
        </li>
        <li>
          <a href="https://twitter.comhttps://x.com/xyassinkr?t=S2jhJu9Uz0OmaZmbzOiO1Q&s=09"><img src={twitter} alt="twitter" /></a>
        </li>
        <li>
          <a href="https://github.com/yassinkr"><img src={github} alt="github" /></a>
        </li>
      </ul>

        </div>
      </div>
    </div>
  );
};

export default LandingCatch;
