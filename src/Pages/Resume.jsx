import React from 'react'
import NavBarBlog from '../components/NavBarBlog/NavBarBlog'
import {FaArrowDown } from 'react-icons/fa'

const Resume = () => {
  return (
    <div className='min-h-screen'>
        <NavBarBlog/>
        {/* <a href="https://docs.google.com/document/d/e/2PACX-1vT3wuprmjPg-3KtBt4cV_RZe9NcRR5zR0U6gXZrEMqeH8O0Jj3XIe43KSoz-nK_QgrFTRo0UhycSDFT/pub">Resume Download</a> */}
        <div className='flex flex-col justify-center items-center'>
            <a 
              className=' bg-indigo-500 px-3 py-2 rounded-lg border border-indigo-500 text-white hover:bg-white hover:text-indigo-500' 
              href="https://docs.google.com/document/d/1yVMhw9hVLRwzPlxh9YA0i9FdWT-slbFSTfXCvXrXcpU/edit?usp=sharing"
              target="_blank" rel="noreferrer"
            >
              Download Resume
            </a>
            <p className='mt-4 text-sm font-semibold text-zinc-500 flex justify-center items-center gap-2'>Scroll Down <FaArrowDown/> </p>
        </div>
        <iframe 
            title='Huzaifa_Qureshi_Resume' 
            // width={900}
            className='min-h-screen w-full  md:pl-64'
            src="https://docs.google.com/document/d/e/2PACX-1vT3wuprmjPg-3KtBt4cV_RZe9NcRR5zR0U6gXZrEMqeH8O0Jj3XIe43KSoz-nK_QgrFTRo0UhycSDFT/pub?embedded=true" 
        />

    </div>
  )
}

export default Resume