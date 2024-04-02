import { useState } from 'react';
import projects from "../assets/PROJECTS.svg"

import git from "../assets/Git.svg"

import ArchiTool from "../assets/Architecture_Tools.svg"

import unform1 from "../assets/unform_b1c5.svg"
import unform2 from "../assets/unform_b299.svg"

const Carousel = ()=> {
  const slides = [
    {
      url: '/src/assets/alorado.png',
      title:"alorado home page",
      description:"simple responsive home page with dark mode theme",
    },
    {
        url: '/src/assets/form.png',
        title:"Multi-Step register form",
      description:"Multi-Step register form that uses logics in the steps and what the user fill.",
      },
      {
        url: '/src/assets/guess.png',
        title:"Guess the word",
      description:"Game that make you guess the word that displayed mixed .",
      },
      {
        url: '/src/assets/music.png',
        title:"Music Player",
      description:"music player that with full control on the music timer .",
      },
      {
        url: '/src/assets/QR_code.png',
        title:"QR Code generator",
      description:"QR Code generator from  simple input",
      },
      {
        url: '/src/assets/queotes.png',
        title:"Random Queotes generator",
      description:"Generate new qurote with every refresh ",}
   
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  

  return (
    <div className='max-w-full h-screen w-full z-1 relative group flex flex-col justify-center items-center'>
      
        <div className="absolute top-0 right-0 z-10 w-28 h-1/2 bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${projects})` }}></div>
        <div className="absolute bottom-24 left-[5%] z-10 w-40 h-40 bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${git})` }}></div>
        <div className="absolute top-10 right-[36.8%] z-10 w-40 h-40 bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${ArchiTool})` }}></div>
        <div className="absolute bottom-0 right-0 z-10 w-48 h-48 bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${unform2})` }}></div>
        <div className="absolute top-0 left-0 z-1 w-[25%] h-1/2 bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${unform1})`}}></div>

      <div className='relative w-[80%] h-[60%] overflow-hidden bg-transparent' >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute flex z-3 inset-0 w-full h-full rounded-2xl  duration-500 transition ease-in-out delay-150 ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-[120%]'
          }`}
          
        >
            <div className="w-2/3 h-full rounded-2xl bg-center bg-cover" style={{ backgroundImage: `url(${slide.url})` }}></div>
            <div className='w-1/3 h-full flex flex-col justify-center items-start m-10'>
                <div className='text-secondaryblue text-29'>{slide.title}</div>
                <div className=' text-[18px]'>{slide.description}</div>
            </div>
        </div>
      ))}
      
     </div>
     <div className='absolute w-[50%] h-full mr-[29.5%]'>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 rounded-full w-16 h-16 bg-white/20 cursor-pointer justify-center items-center'>
        <button onClick={prevSlide} className="ml-2 mt-3 w-10 h-10 bg-center bg-contain bg-no-repeat rotate-180 " style={{ backgroundImage: "url(src/assets/Polygon1.svg)" }} ></button>
      </div>
    
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 rounded-full w-16 h-16 bg-white/20 cursor-pointer justify-center items-center'>
      <button onClick={nextSlide} className="ml-4 mt-3 w-10 h-10 bg-center bg-contain bg-no-repeat " style={{ backgroundImage: "url(src/assets/Polygon1.svg)" }}> </button>
      </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <div className='w-5 h-5 m-5 rounded-full bg-slate-600'></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;