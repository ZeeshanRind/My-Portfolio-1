import React from 'react'

const Projects = () => {
  return (
    <div className=' lg:h-screen bg-white'>
      <div className='flex flex-col px-[128px]'>

        <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-2 mt-[40px] text-center'>Latest <span className='text-[#00df9a]'>Projects</span></h1>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'> 
            <div className=' h-[200px] bg-[#00df9a] rounded shadow-lg p-6 mt-4 m-2'></div>
            <div className=' h-[200px] bg-[#00df9a] rounded shadow-lg p-6 mt-4 m-2'></div>
            <div className=' h-[200px] bg-[#00df9a] rounded shadow-lg p-6 mt-4 m-2'></div>
            <div className='h-[200px] bg-[#00df9a] rounded shadow-lg p-6 mt-4 m-2'></div>
            <div className='h-[200px] bg-[#00df9a] rounded shadow-lg p-6 mt-4 m-2'></div>
        </div>

      </div>
    </div>
  )
}

export default Projects
