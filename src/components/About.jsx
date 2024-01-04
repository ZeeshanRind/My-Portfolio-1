import React from 'react'

const About = () => {
  return (
    <div className='bg-white' id='about'>
      <div className='flex flex-col lg:h-screen lg:pt-[10rem] md:pt-[3.5rem] lg:px-[128px] md:px-[30px] sm:px-[30px] xs:px-[20px]'>
        <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-2'>About <span className='text-[#9B30FF]'>Me</span></h1>
        <p className='font-bold text-3xl'>Frontend Developer</p>
        <p className='text-gray-500  md:text-left py-6'>Hello there! I'm Zeeshan Ali, a dedicated and experienced frontend web developer with expertise in a range of technologies. I specialize in building robust and dynamic web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind Css, and React JS.</p>
        <button className='bg-[#9B30FF] w-[150px] rounded-full text-white font-medium my-4 py-2'>Read More</button>
      </div>
    </div>
  )
}

export default About
