import React from 'react';
import Typed from 'react-typed';
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div className='bg-slate-100 w-full lg:h-screen' id='home'>
      <motion.div className="flex flex-col pt-[5rem] lg:pt-[12rem] md:pt-[5.5rem] lg:px-[128px] md:px-[30px] xs:px-[10px]"
        // initial= "hidden"
        // animate={{ y: 100 }}
        // transition={{ ease: "easeOut", duration: 2 }}
        //  whileInView = "visible"
        //  viewport={{ once: true}}
        //  variants={{visible : {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 0}}}
      >
       <motion.p
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{ ease: "easeOut", duration: 1 }}
        // variants={{visible : {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 0}}}
        className='lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold'>Hello, it's Me</motion.p>
       <motion.h1
        initial={{x: -100,y:-100, opacity: 0}}
        animate={{x: 0,y: 0, opacity: 1}}
        transition={{ ease: "easeOut", duration: 1 }}
        // variants={{visible : {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 0}}}
        className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold md:py-2'>Zeeshan Ali</motion.h1>
       <motion.div
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{ ease: "easeOut", duration: 1 }}
        // variants={{visible : {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 0}}}
        className='flex items-center'>
        <p className='lg:text-4xl md:text-2xl sm:text-3xl text-xl font-bold'>And I'm a </p>
        <Typed strings={['Frontend Web Developer', 'Backend Web Developer']}
        typeSpeed={100}
        backSpeed={110}
        loop
        className='lg:text-4xl md:text-2xl sm:text-3xl text-xl font-bold text-[#9B30FF] pl-2'
        />
       </motion.div>
       <motion.p
        initial={{x: 100,y:-100, opacity: 0}}
        animate={{x: 0,y:0,opacity: 1}}
        transition={{ ease: "easeOut", duration: 1 }}
        className='pt-4 text-gray-500 font-customFont'>Hello there! I'm Zeeshan Ali, a dedicated and experienced frontend web developer with expertise in a range of technologies. I specialize in building robust and dynamic web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind Css, and React JS.</motion.p>
        <motion.div
         initial={{y:-100, opacity: 0}}
         animate={{y:0,opacity: 1}}
         transition={{ ease: "easeOut", duration: 1 }}
         className='flex '>
          <a href="https://www.facebook.com/zeeshan.murad.7140/" className='p-[0.6rem] border-2 border-[#9B30FF] my-3 mr-3 rounded-full text-[#9B30FF] hover:text-white hover:bg-[#9B30FF] ' target="_blank"><FaFacebookF /></a>
          <a href="https://www.instagram.com/znrind786/" className='p-[0.6rem] border-2 border-[#9B30FF] my-3 mr-3 rounded-full text-[#9B30FF] hover:text-white hover:bg-[#9B30FF] ' target="_blank"><FaInstagram /></a>
          <a href="https://github.com/ZeeshanRind" className='p-[0.6rem] border-2 border-[#9B30FF] my-3 mr-3 rounded-full text-[#9B30FF] hover:text-white hover:bg-[#9B30FF] ' target="_blank"><LuGithub /></a>
          <a href="https://www.linkedin.com/in/zeeshan-ali-1676b522a/" className='p-[0.6rem] border-2 border-[#9B30FF] my-3 mr-3 rounded-full text-[#9B30FF] hover:text-white hover:bg-[#9B30FF]'           target="_blank"><FaLinkedinIn /></a>
        </motion.div>
       <motion.button
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{ ease: "easeOut", duration: 1 }}
        // variants={{visible : {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 0}}}
        className='bg-[#9B30FF] w-[170px] rounded-full font-medium my-4 py-2 text-white shadow-lg'>Download CV</motion.button>
      </motion.div>
    </div>  
  )
}

export default Home 
