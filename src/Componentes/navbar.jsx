import React from 'react';
import share from '../assets/share.svg';
import home from '../assets/home.svg';
import profile from '../assets/profile.svg';
import statistic from '../assets/statistic.svg';
import contact from '../assets/contact.svg';

const Navbar = () => {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16  xl:h-screen'> {/* inner */}
      <div className='flex w-full xl:flex-col items-center justify-between 2xl:justify-center gap-y-5 px-10 lg:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white text-white bg-opacity-[16%] backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        <a href="#hero" onClick={(e) => handleClick(e, 'hero')}><img src={home} alt="home" /></a>
        <a href="#expertise" onClick={(e) => handleClick(e, 'expertise')}><img src={profile} alt="profile" /></a>
        <a href="#fields" onClick={(e) => handleClick(e, 'fields')}><img src={statistic} alt="statistic" /></a>
        <a href="#git" onClick={(e) => handleClick(e, 'git')}><img src={share} alt="share" /></a>
        <a href="#contact" onClick={(e) => handleClick(e, 'contact')}><img src={contact} alt="contact" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
