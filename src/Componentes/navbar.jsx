import React from 'react'
import share from '../assets/share.svg'
import home from '../assets/home.svg'
import profile from '../assets/profile.svg'
import statistic from '../assets/statistic.svg'
import contact from '../assets/contact.svg'
const navbar = () => {
  return (
    

<nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16  xl:h-screen'> {/* inner */}
<div className='flex w-full xl:flex-col items-center justify-between
2xl:justify-center gap-y-5 px-10 lg:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white text-white bg-opacity-[16%]
backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
    <img src={home} alt="home" />
    <img src={profile} alt="profile" />
    <img src={statistic} alt="statistic" />
    <img src={share} alt="share" />
    <img src={contact} alt="contact" />

</div>
</nav>
  )
}

export default navbar