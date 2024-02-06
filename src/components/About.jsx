import React from 'react';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
  const controls = useAnimation();

  const handleScrollAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        controls.start({
          x: 0,
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

    const target = document.querySelector('.about-me'); // Adjust the selector based on your HTML structure

    if (target) {
      observer.observe(target);
    }

       // Cleanup the observer on component unmount
       return () => observer.disconnect();
      }, [controls]);

  return (
    <div className='bg-white w-full' id='about'>
      <div className='flex flex-col lg:h-screen lg:py-[10rem] md:py-[3.5rem] lg:px-[128px] md:px-[30px] xs:px-[10px]'>
        <motion.h1
          initial={{x: 100,y:-50, opacity: 0}}
          animate={controls}
         className=' about-me lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold md:py-2'>About <span className='text-[#9B30FF] about-me'>Me</span></motion.h1>
        <motion.p
         initial={{x: 100,y:-50, opacity: 0}}
         animate={controls}
         className='font-bold lg:text-4xl md:text-2xl sm:text-2xl text-xl'>Frontend Developer</motion.p>
        <motion.p
         initial={{x: 100,y:50, opacity: 0}}
         animate={controls}
         className='text-gray-500  md:text-left font-customFont py-6'>Hello there! I'm Zeeshan Ali, a dedicated and experienced frontend web developer with expertise in a range of technologies. I specialize in building robust and dynamic web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind Css, and React JS.</motion.p>
        <motion.button
         whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)"
         }}
         initial={{x: 100,y:50, opacity: 0}}
         animate={controls}
         className='bg-[#9B30FF] w-[150px] rounded-full text-white shadow-lg font-medium my-2 py-2'>Read More</motion.button>
      </div>
    </div>
  )
}

export default About
