import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { LiaApple } from "react-icons/lia";
import { AiOutlineAndroid } from "react-icons/ai";

const Services = () => {
  return (
    <div className='bg-slate-50 lg:h-screen' id='services'> 
        <div className=' flex flex-col lg:px-[128px] md:px-[20px] '>

             <h1 className='lg:text-5xl md:text-4xl sm:text-3xl ss:text-3xl font-bold md:py-2 mt-[40px] text-center'>Our <span className='text-[#9B30FF]'>Services</span></h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 pt-[30px] lg:mx-auto">

             <div class="lg:w-[350px] md:w-[300px] flex flex-col p-6 m-4 mt-6 justify-center items-center rounded shadow-lg hover:bg-slate-200 hover:border-2 hover:border-gray-400
             transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <CgWebsite  size={50}/>
                <h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold md:py-2'>Web Development</h1>
                <p className='text-gray-500'>Hello there! I'm Zeeshan Ali, a dedicated and experienced frontend web developer with expertise in a range of technologies. I specialize in building robust and dynamic web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind Css, and React JS.</p>
                <button className='bg-[#9B30FF] w-[150px] rounded-full text-white font-medium my-4 py-2'>Read More</button>
             </div>

             <div class=" lg:w-[350px] md:w-[300px] flex flex-col p-6 mt-2 mx-4 items-center rounded shadow-lg hover:bg-slate-200 hover:border-2 hover:border-gray-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <LiaApple  size={50}/>
                <h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold md:py-2'>IOS Development</h1>
                <p className='text-gray-500'>In addition to Android development, I have a strong background in iOS app development. Utilizing Swift and Objective-C, I develop engaging and polished applications for iPhones, iPads, and other iOS devices. I am proficient in Xcode and other iOS development tools.</p>
                <button className='bg-[#9B30FF] w-[150px] rounded-full text-white font-medium my-4 py-2'>Read More</button>
             </div>

             <div class=" lg:w-[350px] md:w-[300px] flex flex-col p-6 m-4 mt-6 justify-center items-center rounded overflow-hidden shadow-lg hover:bg-slate-200 hover:border-2 hover:border-slate-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">   
                <AiOutlineAndroid  size={50}/>
                <h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold md:py-2'>Android Developer</h1>
                <p className='text-gray-500'>I possess extensive knowledge and experience in Android app development. Leveraging technologies such as Java and Kotlin, I create high-quality, scalable, and efficient Android applications. I am well-versed in Android Studio</p>
                <button className='bg-[#9B30FF] w-[150px] rounded-full text-white font-medium my-4 py-2'>Read More</button>
             </div>

            </div>
        </div>
    </div>
  )
}

export default Services
