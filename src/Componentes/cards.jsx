import Card from './card'
const cards = () => {
  return (
    <div className='w-full  h-screen relative flex justify-center items-center overflow-hidden'>
      <div className='w-full  h-screen absolute overflow-hidden bg-opacity-100'>
       <div className='relativ bg-opacity-100'>
        <div className='rounded-full w-[562px] h-[562px] bg-secondaryblue left-[500px] bottom-[-432px] absolute'></div>
        <div className='rounded-full w-[605px] h-[605px] bg-myred right-[-190px] top-[-346px] absolute opacity-[60%]'></div>

        <div className='rounded-full w-[290px] h-[290px] bg-myred left-[-112px] bottom-[-111px] absolute opacity-[60%]'></div>

        <div className='rounded-full w-[428px] h-[428px] bg-myyellow right-[-161px] bottom-[-282px] absolute opacity-[60%]'></div>

        <div className='rounded-full w-[562px] h-[562px] bg-secondaryblue left-[-151px] top-[-156px] absolute opacity-[60%]'></div></div>
      </div>
      <div className='flex justify-center align-middle items-center backdrop-blur-[150px] w-full h-full'>
              <div className=''>
                <div className='py-[40px]'> 
                 <div className='text-secondaryblue text-3xl text-center'>
                   Skills & professions 
                 </div>
                 <div className='text-myblack text-2xl text-center'>
                   exploit and highlight my skills on creating amazing digital experiences  
                 </div>
                </div>
      

                <div className='flex space-x-3 justify-center items-center align-middle gap-[85px] bg-opacity-100'>
                 <Card color={"secondaryblue"} title={"UI&UX"} desc={"web design services and user experience research"}/>        
                 <Card color={"myyellow"} title={"WEBDEV"} desc={"creating Responsive and efficient web experiences"}/>
                 <Card color={"myred"} title={"Data Science"} desc={"working on this"}/>
                </div>
              </div>
      </div>

    </div>
  )
}

export default cards