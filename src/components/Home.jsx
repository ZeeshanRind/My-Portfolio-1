import React from 'react';
import Typed from 'react-typed'

const Home = () => {
  return (
    <div className='bg-slate-50' id='home'>
      <div className="max-w-[1240px] flex flex-col mt-[80px] sm:mt-[90px] xs:mt-[90px] lg:h-screen lg:px-[128px] md:px-[30px] sm:px-[30px] xs:px-[20px] lg:py-[6rem]">
       <p className='md:text-4xl sm:text-2xl text-xl font-bold'>Hello, it's Me</p>
       <h1 className='md:text-6xl sm:text-4xl text-4xl font-bold md:py-3'>Zeeshan Ali</h1>
       <div className='flex items-center'>
        <p className='md:text-4xl sm:text-3xl text-xl font-bold'>And I'm a </p>
        <Typed strings={['Frontend Web Developer', 'Backend Web Developer']}
        typeSpeed={100}
        backSpeed={110}
        loop
        className='md:text-4xl sm:text-3xl text-xl font-bold text-[#9B30FF] pl-2'
        />
       </div>
       <p className='pt-4 text-gray-500'>Hello there! I'm Zeeshan Ali, a dedicated and experienced frontend web developer with expertise in a range of technologies. I specialize in building robust and dynamic web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind Css, and React JS.</p>
       <button className='bg-[#9B30FF] w-[170px] rounded-full font-medium my-6 py-3 text-white'>Download CV</button>
      </div>
    </div>  
  )
}

export default Home 
