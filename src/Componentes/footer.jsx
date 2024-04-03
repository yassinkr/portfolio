import github from '../assets/github_icon.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import Arrow from '../assets/solar_arrow.svg'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9o3v7o9', 'template_ja6v1o8', form.current, {
        publicKey: 'e0ydrBxzMY_6aWfET',
      })
      .then(
        () => {
          alert('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          alert('FAILED...');
        },
      );
  };
  return (
    <div id="contact" className='w-full relative flex justify-center items-center overflow-hidden bg-myblue text-white'>
      <div className="w-full  mb-32 md:pb-0 max-w-screen-lg  px-5 md:px-10 py-10 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full  md:w-1/4 text-white flex flex-col justify-between items-start mb-10 md:mb-0">
          <div className="text-2xl h-10 mb-3">GIT A PROJECT?</div>
          <div className="text-4xl mb-5">Let&apos;s Talk!</div>
          <div className="text-base mb-5">Send me a detailed email containing your project&apos;s ideas and other details like budget specifications</div>
          <div className="text-base mb-5">kerraiyassin@gmail.com</div>
          <div className='flex justify-start space-x-4'>
          
          <a href="https://dz.linkedin.com/in/mohammed-yassine-kerrai-5a5237242"><img src={linkedin} alt="linkedin" /></a>
       
          <a href="https://twitter.comhttps://x.com/xyassinkr?t=S2jhJu9Uz0OmaZmbzOiO1Q&s=09"><img src={twitter} alt="twitter" /></a>
       
          <a href="https://github.com/yassinkr"><img src={github} alt="github" /></a>
      
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start md:flex-wrap">
          <div className="text-4xl mb-10">Estimate your Project?</div>
          <form ref={form} onSubmit={sendEmail} className="w-full">
    <label htmlFor="name">Your Name:</label>
    <input id="name" name="from_name" className="w-full h-10 bg-transparent px-3" placeholder="" type="text"></input>
    <div className="w-[100%] h-1 mb-5 bg-white relative">
        <div className="absolute w-2 h-1 shadow-sm shadow-white animate-move"></div>
    </div>
    <label htmlFor="email">Your Email Address:</label>
    <input id="email" name="reply_to" className="w-full h-10 bg-transparent px-3" placeholder="" type="text"></input>
    <div className="w-[100%] h-1 mb-5 bg-white relative">
        <div className="absolute w-2 h-1 shadow-sm shadow-white animate-move"></div>
    </div>
    <label htmlFor="projectDetails">Project Details:</label>
    <textarea id="projectDetails" name="message" className="w-full h-32 bg-transparent px-3" placeholder=""></textarea>
    <div className="w-[100%] h-1 mb-5 bg-white relative">
        <div className="absolute w-2 h-1 shadow-sm shadow-white animate-move"></div>
    </div>
    <button className="bg-white px-5 py-1 rounded-full" type="submit"><img src={Arrow} alt="Arrow" /></button>
</form>

      </div>
    </div>
    </div>
   
  );
}

export default Footer
