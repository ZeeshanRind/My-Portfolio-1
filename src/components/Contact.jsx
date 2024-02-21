import React from 'react';
import { motion,useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Contact = () => {

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

    const target = document.querySelector('.contact'); // Adjust the selector based on your HTML structure

    if (target) {
      observer.observe(target);
    }

       // Cleanup the observer on component unmount
       return () => observer.disconnect();
      }, [controls]);

  return (
    <div className='w-full lg:h-screen py-6 px-4 bg-slate-100' id='contact'>
      <motion.div
        className='lg:max-w-[1240px] flex flex-col justify-center items-center mx-auto'>

        <motion.h1
         initial={{y:-50, opacity: 0}}
         animate={controls}
         className='md:text-5xl contact sm:text-4xl text-3xl font-bold md:py-2 mt-[30px] text-center'>Contact <span className='text-[#9B30FF] contact'>Me!</span></motion.h1>

         <motion.form
          initial={{y:50, opacity: 0}}
          animate={controls}
          className="w-full max-w-[750px]">
             <div className="flex flex-wrap flex-col -mx-3 mb-6">

              <div className="grid md:grid-cols-2  gap-2 mt-8">
              <input className="bg-white text-gray-900 rounded py-4 xs:pl-[20px] focus:outline-none" id="grid-first-name" type="text" placeholder="Full Name" />
              <input className="bg-white text-gray-900 rounded py-4 xs:pl-[20px] focus:outline-none" id="grid-first-name" type="text"     placeholder="Email Address" />
              <input className="bg-white text-gray-900 rounded py-4 xs:pl-[20px] focus:outline-none" id="grid-first-name" type="text"     placeholder="Mobile Number" />
              <input className="bg-white text-gray-900 rounded py-4 xs:pl-[20px] focus:outline-none" id="grid-first-name" type="text"     placeholder="Country" />
              </div>

              <textarea id="message" rows="9" className="block p-2.5 mt-2 w-full rounded" placeholder="Your Message..."></textarea>
              <button className='bg-[#9B30FF] shadow-lg w-[150px] rounded-full text-white font-medium md:mx-auto ml-4 my-4 py-2 px-5'>Send Message</button>
             </div>
         </motion.form>
      </motion.div>
    </div>
  )
}

export default Contact
