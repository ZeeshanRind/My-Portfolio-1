import React from 'react'

const Footer = () => {
  return (
    <div class="w-full bg-blue-700 group h-[200px]">
      <div className='relative transition-all w-full overflow-hidden'>
          <div className='flex justify-center items-center transform transition duration-500 ease-in-out bg-red-500 w-full h-[200px] group-hover:translate-y-0 translate-y-32 group-hover:opacity-100 opacity-0'>
              <button className='p-2 bg-green-600'>Hit Me</button>
          </div>
      </div>
</div>
  )
}

export default Footer
