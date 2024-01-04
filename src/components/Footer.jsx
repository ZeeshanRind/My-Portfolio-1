import React from 'react'

const Footer = () => {
  return (
    <div class="group relative">
  <div class="box bg-gray-300 p-10 transition duration-300 ease-in-out hover:bg-blue-500">
    Hover me
  </div>
  <div class="hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-blue-500 opacity-75"></div>
  <button class="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-500 px-4 py-2 rounded-md">
    Click me
  </button>
</div>
  )
}

export default Footer
