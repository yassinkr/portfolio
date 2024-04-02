import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import Arrow from '../assets/solar_arrow.svg'

const Footer = () => {
  return (
    <div className='w-full h-[600px] relative flex justify-center items-center overflow-hidden bg-myblue  text-white '>
        <div className="w-[70%] h-[80%] flex justify-between items-center">
        <div className="w-1/4 text-white flex flex-col justify-between items-start">
            <div className="text-[32px] h-[40px]">GIT A PROJECT?</div>
            <div className="text-[52px] h-[70px] ">Lets Talk!</div>
            <div className="text-[18px] mb-2">send me a detailed email containing your project&apos;s ideas and other details like budget specifications</div>
            <div className="text-[18px] mb-2">kerraiyassin@gmail.com</div>
            <div className='flex justify-start items-center ' >
                 <ul className='text-xs flex space-x-4'>
                    <li><img src={linkedin} alt="linkedin" /></li>
                    <li><img src={twitter} alt="twitter" /></li>
                    <li><img src={instagram} alt="instagram" /></li>
                 </ul>

            </div>
        </div>
        <div className="w-1/2 flex flex-col justify-start items-start">
            <div className="text-[52px] h-[70px] mb-5">Estimate your Project?</div>
            <div className='w-[80%]'>
            <label>your name :</label>
            <input className='w-full h-5  bg-transparent  ' placeholder=''type="text"></input>
            <div className='w-[100%] h-1 mb-5  bg-white'>
        <div className='w-1 h-1 shadow-sm shadow-white animate-move' ></div>
        </div>
            <label>Your Email Address :</label>
            <input className='w-full h-5  bg-transparent 'placeholder=''type="text"></input>
            <div className='w-[100%] h-1 mb-5  bg-white'>
        <div className='w-1 h-1 shadow-sm shadow-white animate-move' ></div>
        </div>
            <label>Project Details :</label>
            <textarea className='w-full h-15 bg-transparent 'placeholder='' ></textarea>
            <div className='w-[100%] h-1  mb-5 bg-white'>
        <div className='w-1 h-1 shadow-sm shadow-white animate-move' ></div>
        </div>
            <button className='bg-white px-5 py-1 rounded-full'><img src={Arrow} alt="Arrow" /></button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer