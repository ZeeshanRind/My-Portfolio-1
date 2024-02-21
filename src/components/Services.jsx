import React from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useEffect } from 'react';
import { CgWebsite } from "react-icons/cg";
import { LiaApple } from "react-icons/lia";
import { AiOutlineAndroid } from "react-icons/ai";

const Services = () => {

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

    const target = document.querySelector('.aboutMe'); // Adjust the selector based on your HTML structure

    if (target) {
      observer.observe(target);
    }

       // Cleanup the observer on component unmount
       return () => observer.disconnect();
      }, [controls]);

  return (
    <div className='bg-slate-100 lg:h-screen' id='services'> 
        <div className=' flex flex-col lg:h-screen lg:px-[128px] md:px-[20px] md:py-[3.5rem]'>

             <motion.h1
               initial={{y:-50, opacity: 0}}
               animate={controls}
              className='aboutMe lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold md:py-2 mt-[40px] text-center'>Our <span className='aboutMe text-[#9B30FF]'>Services</span></motion.h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  pt-[30px] lg:mx-auto">

             <div
              class="md:w-[350px] sm:w-[300px] ss:w-[445px] xs:w-auto w-[150px] flex flex-col p-6 m-4 mt-6 justify-center items-center rounded shadow-lg bg-slate-200 hover:border-2 hover:border-gray-400
             transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <CgWebsite  size={50}/>
                <h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold md:py-2'>Web Development</h1>
                <p className='text-gray-500'>Hello there! I'm Zeeshan Ali, a dedicated and experienced frontend web developer with expertise in a range of technologies. I specialize in building robust and dynamic web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind Css, and React JS.</p>
                <button className='bg-[#9B30FF] shadow-lg w-[150px] rounded-full text-white font-medium my-4 py-2'>Read More</button>
             </div>

             <div
              class="md:w-[350px] sm:w-[300px] ss:w-[445px] xs:w-auto w-[150px] flex flex-col p-6 mt-2 mx-4 items-center rounded shadow-lg bg-slate-200 hover:border-2 hover:border-gray-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <LiaApple  size={50}/>
                <h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold md:py-2'>IOS Development</h1>
                <p className='text-gray-500'>In addition to Android development, I have a strong background in iOS app development. Utilizing Swift and Objective-C, I develop engaging and polished applications for iPhones, iPads, and other iOS devices. I am proficient in Xcode and other iOS development tools.</p>
                <button className='bg-[#9B30FF] w-[150px] shadow-lg rounded-full text-white font-medium my-4 py-2'>Read More</button>
             </div>

             <div
              class=" lg:w-[350px] md:w-[700px] sm:w-[600px] ss:w-[445px] xs:w-auto w-[150px] flex flex-col p-6 m-4 mt-6 justify-center items-center rounded overflow-hidden shadow-lg bg-slate-200 hover:border-2 hover:border-slate-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">   
                <AiOutlineAndroid  size={50}/>
                <h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold md:py-2'>Android Developer</h1>
                <p className='text-gray-500'>I possess extensive knowledge and experience in Android app development. Leveraging technologies such as Java and Kotlin, I create high-quality, scalable, and efficient Android applications. I am well-versed in Android Studio</p>
                <button className='bg-[#9B30FF] w-[150px] shadow-lg rounded-full text-white font-medium my-4 py-2'>Read More</button>
             </div>

            </div>
        </div>
    </div>
  )
}

export default Services
