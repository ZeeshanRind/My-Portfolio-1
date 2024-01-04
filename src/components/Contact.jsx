import React from 'react'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen py-6 px-4 bg-slate-50' id='contact'>
      <div  className='lg:max-w-[1240px] flex flex-col justify-center items-center sm:px-[30px] mx-auto'>

        <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-2 mt-[30px] text-center'>Contact <span className='text-[#9B30FF]'>Me!</span></h1>

         <form className="w-full max-w-[750px]">
             <div className="flex flex-wrap flex-col -mx-3 mb-6">

              <div className="grid md:grid-cols-2  gap-2 mt-8">
              <input className="bg-white text-gray-900 rounded py-4 pr-[100px] pl-[20px] focus:outline-none" id="grid-first-name" type="text" placeholder="Full Name" />
              <input className="bg-white text-gray-900 rounded py-4 pr-[100px] pl-[20px] focus:outline-none" id="grid-first-name" type="text"     placeholder="Email Address" />
              <input className="bg-white text-gray-900 rounded py-4 pr-[100px] pl-[20px] focus:outline-none" id="grid-first-name" type="text"     placeholder="Mobile Number" />
              <input className="bg-white text-gray-900 rounded py-4 pr-[100px] pl-[20px] focus:outline-none" id="grid-first-name" type="text"     placeholder="Country" />
              </div>

              <textarea id="message" rows="9" className="block p-2.5 mt-2 w-full rounded" placeholder="Your Message..."></textarea>
              <button className='bg-[#9B30FF] w-[150px] rounded-full text-white font-medium mx-auto my-4 py-2'>Send Message</button>
             </div>
         </form>
      </div>
    </div>
  )
}

export default Contact
