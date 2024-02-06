import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import myImage from '../assets/profile.jpg';
import myImage1 from '../assets/project-1.jpg';
import myImage2 from '../assets/project-2.jpg';
import myImage3 from '../assets/project-3.jpg';
import { HiExternalLink } from "react-icons/hi";

const Projects = () => {

  const controls = useAnimation();

  const handleScrollAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        controls.start({
          y: 0,
          opacity: 1,
          transition: { ease: 'easeOut', duration: 1 },
        });
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScrollAnimation, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold based on your needs
    });

    const target = document.querySelector('.project'); // Adjust the selector based on your HTML structure

    if (target) {
      observer.observe(target);
    }

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, [controls]);

  return (
    <div className='bg-white'>
      <div className='flex flex-col lg:px-[128px] md:px-[30px] md:py-[3.5rem]'>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={controls}
          className='lg:text-5xl  project md:text-4xl sm:text-3xl text-2xl font-bold md:py-2 mt-[40px] text-center'>Latest <span className='project text-[#9B30FF]'>Projects</span></motion.h1>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            className="">
            
            <div className="relative h-[230px] rounded-3xl shadow-lg mt-4 m-2 box cursor-pointer group overflow-hidden">
              <img src={myImage} alt="My Image" className="h-full w-full transform transition-transform duration-500 ease-in-out group-hover:scale-105" />
              <div className="absolute transition-all duration-500 ease-in-out group-hover:bg-opacity-40"></div>
              <div className="absolute inset-x-0 bottom-0 h-0 bg-purple-300 bg-opacity-40 transition-all duration-500 ease-in-out group-hover:h-full"><div className='flex flex-col items-center mt-[4rem]'><p className='text-3xl font-bold'>Portfolio</p>
                <a href="" className='bg-black text-white rounded-full p-2'><HiExternalLink size={30}/></a>
              </div></div>
            </div>

          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            className="">

            <div className="relative h-[230px] rounded-3xl shadow-lg mt-4 m-2 box cursor-pointer group overflow-hidden">
              <img src={myImage1} alt="My Image" className="h-full w-full transform transition-transform duration-500 ease-in-out group-hover:scale-105" />
              <div className="absolute transition-all duration-500 ease-in-out group-hover:bg-opacity-40"></div>
              <div className="absolute inset-x-0 bottom-0 h-0 bg-purple-300 bg-opacity-40 transition-all duration-500 ease-in-out group-hover:h-full"><div className='flex flex-col items-center mt-[4rem]'><p className='text-3xl font-bold'>3D Portfolio</p>
                <a href="" className='bg-black text-white rounded-full p-2'><HiExternalLink size={30}/></a>
              </div></div>
            </div>

          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            className="">
            
            <div className="relative h-[230px] rounded-3xl shadow-lg mt-4 m-2 box cursor-pointer group overflow-hidden">
              <img src={myImage2} alt="My Image" className="h-full w-full transform transition-transform duration-500 ease-in-out group-hover:scale-105" />
              <div className="absolute transition-all duration-500 ease-in-out group-hover:bg-opacity-40"></div>
              <div className="absolute inset-x-0 bottom-0 h-0 bg-purple-300 bg-opacity-40 transition-all duration-500 ease-in-out group-hover:h-full"><div className='flex flex-col items-center mt-[4rem]'><p className='text-3xl font-bold'>Modern Bank App</p>
                <a href="" className='bg-black text-white rounded-full p-2'><HiExternalLink size={30}/></a>
              </div></div>
            </div>

          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            className="">
            
            <div className="relative h-[230px] rounded-3xl shadow-lg mt-4 m-2 box cursor-pointer group overflow-hidden">
              <img src={myImage3} alt="My Image" className="h-full w-full transform transition-transform duration-500 ease-in-out group-hover:scale-105" />
              <div className="absolute transition-all duration-500 ease-in-out group-hover:bg-opacity-40"></div>
              <div className="absolute inset-x-0 bottom-0 h-0 bg-purple-300 bg-opacity-40 transition-all duration-500 ease-in-out group-hover:h-full"><div className='flex flex-col items-center mt-[4rem]'><p className='text-3xl font-bold'>GPT-3 Site</p>
                <a href="" className='bg-black text-white rounded-full p-2'><HiExternalLink size={30}/></a>
              </div></div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Projects
