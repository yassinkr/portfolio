import js from '../assets/js.svg';
import figma_icon from '../assets/figma_icon.svg';
import Years from './years'
const Expertise = () => {
  return (
    <div className='relative w-full  h-screen flex justify-center items-center overflow-hidden '>
      <div className='absolute right-12 top-20 w-72 h-72'>
        <img src={js} alt="js" />
      </div>
      <div className='absolute left-12 top-20 w-72 h-72'>
        <img src={figma_icon} alt="figma_icon" />
      </div>

      <div className='absolute bg-secondaryblue right-[-8rem] bottom-[-4rem] w-[30rem] h-[30rem] rounded-full'></div>
      <div className='absolute bg-secondaryblue left-[-8rem] bottom-[-4rem] w-[30rem] h-[30rem] rounded-full'></div>

      <div className='absolute bg-myblue right-48 bottom-[-12rem] w-96 h-96 rounded-full'></div>
      <div className='absolute bg-myblue left-48 bottom-[-12rem] w-96 h-96 rounded-full'></div>


      <div className='flex flex-col justify-center aligne-middle items-center px-80 w-[500px] '>
        <div className=' text-7xl text-black-400 w-[500px] border-b-2 border-black-400'>
          specializing in Ui & UX and web development
        </div>
        
        <div className='flex justify-center align-middle items-center text-white py-2' >
        <ul className=' flex space-x-4'>
        <li>
        <Years prenumber={'+'} text={'YEARS OF EXPERIENCE'} targetValue={5}/>
        </li>
        <li>
        <Years prenumber={'+'} text={'Finished Projects'}targetValue={10}/>
        </li>
        <li>
        <Years prenumber={''} text={'Academic certificates'}targetValue={3}/>
        </li>
 
        </ul>

        </div>
      </div>
    </div>
  );
};

export default Expertise;
