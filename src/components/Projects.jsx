import React from 'react';
import myImage from '../assets/profile.jpg';
import myImage1 from '../assets/project-1.jpg';
import myImage2 from '../assets/project-2.jpg';
import myImage3 from '../assets/project-3.jpg';

const Projects = () => {
  return (
    <div className=' lg:h-screen bg-white'>
      <div className='flex flex-col px-[128px]'>

        <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-2 mt-[40px] text-center'>Latest <span className='text-[#9B30FF]'>Projects</span></h1>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
          <div className="group relative"> 
            <div className='h-[200px] rounded shadow-lg mt-4 m-2 box transition duration-300 ease-in-out hover:bg-purple-500'><img src={myImage} alt="My Image"
            className='h-full w-full' /></div>
              <div class="hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-purple-400 opacity-75 cursor-pointer mt-4 m-2 rounded"></div>
          </div>

          <div className="group relative"> 
            <div className='h-[200px] rounded shadow-lg mt-4 m-2 box transition duration-300 ease-in-out hover:bg-purple-500'><img src={myImage1} alt="My Image"
            className='h-full w-full' /></div>
              <div class="hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-purple-400 opacity-75 cursor-pointer mt-4 m-2 rounded"></div>
          </div>

          <div className="group relative"> 
            <div className='h-[200px] rounded shadow-lg mt-4 m-2 box transition duration-300 ease-in-out hover:bg-purple-500'><img src={myImage2} alt="My Image"
            className='h-full w-full' /></div>
              <div class="hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-purple-400 opacity-75 cursor-pointer mt-4 m-2 rounded"></div>
          </div>

          <div className="group relative"> 
            <div className='h-[200px] rounded shadow-lg mt-4 m-2 box transition duration-300 ease-in-out hover:bg-purple-500'><img src={myImage3} alt="My Image"
            className='h-full w-full' /></div>
              <div class="hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-purple-400 opacity-75 cursor-pointer mt-4 m-2 rounded"></div>
          </div>  
        </div>

      </div>
    </div>
  )
}

export default Projects
