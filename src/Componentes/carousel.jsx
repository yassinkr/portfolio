import React, { useState } from 'react';

import projects from "../assets/PROJECTS.svg"

import git from "../assets/Git.svg"

import ArchiTool from "../assets/Architecture_Tools.svg"

import unform1 from "../assets/unform_b1c5.svg"
import unform2 from "../assets/unform_b299.svg"
const carousel = ()=> {
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
    <div className='max-w-[1400px] h-[780px] w-full z-1 m-auto py-16 px-4 relative group'>
        <img className="absolute right-0  z-5 w-[32rem] h-24" src={projects}></img> 
        <img className="absolute right-0 rotate-90 z-5 w-[32rem] h-24" src={git}></img>
        <img className="absolute right-0 rotate-90 z-5 w-[32rem] h-24" src={ArchiTool}></img>
        <img className="absolute right-0 rotate-90 z-5 w-[32rem] h-24" src={unform1}></img>
        <img className="absolute right-0 rotate-90 z-5 w-[32rem] h-24" src={unform2}></img>
      <div className='relative w-full h-full overflow-hidden bg-center bg-cover' >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute flex z-3 inset-0 w-full h-full rounded-2xl  duration-500 transition ease-in-out delay-150 ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
          
        >
            <div className="w-2/3 h-full rounded-2xl bg-center bg-cover" style={{ backgroundImage: `url(${slide.url})` }}></div>
            <div className='w-1/3 h-full flex flex-col justify-center items-start m-10'>
                <div>{slide.title}</div>
                <div>{slide.description}</div>
            </div>
        </div>
      ))}
      
    </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <button onClick={prevSlide}  >previous</button>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <button onClick={nextSlide} >next </button>
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

export default carousel;