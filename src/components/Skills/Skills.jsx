import React from 'react'
import cplus from './assets/c++.svg';
import figma from './assets/figma.svg';
import java from './assets/java.svg'
import js from './assets/js.svg'
import mongodb from './assets/mongodb.svg'
import nodejs from './assets/nodejs.svg'
import react from './assets/react.svg'
import ts from './assets/ts.svg'


function Skills() {

    
  return (
    <div id='skills'>
        <h1 className='text-4xl md:text-5xl md:ml-11 my-4 md:my-16 font-bold text-center'>MY TECH SKILLS</h1>
        
        <div className='md:mx-24 '>
            <div className='flex items-center justify-center'>
                <img className='h-[5.5rem] md:h-[8rem] mx-4 md:mx-24' src={react} alt="" />
                <img className='h-[5.5rem] md:h-[8rem] mx-4 md:mx-24' src={nodejs} alt="" />
                <img className='h-[5.5rem] md:h-[8rem] mx-4 md:mx-24' src={mongodb} alt="" />
            </div>
            <div className='flex flex-col md:flex-row my-5 md:my-16 items-center justify-center'>
                <div className='flex mx-0 md:mx-3 my-3 md:my-0 items-center justify-center'>
                  <img className='h-[5.5rem] md:h-[8rem] mx-3 md:mx-16' src={js} alt="" />
                  <img className='h-[5.5rem] md:h-[8rem] mx-3 md:mx-16' src={ts} alt="" />
                </div>

                <div className='flex mx-0 md:mx-3 my-3 md:my-0 items-center justify-center'>
                  <img className='h-[5.5rem] md:h-[8rem] mx-3 md:mx-16' src={cplus} alt="" />
                  <img className='h-[5.5rem] md:h-[8rem] mx-3 md:mx-16' src={java} alt="" />
                    
                </div>
            </div>
            <div className='flex my-11 items-center justify-center'>
              <img className='h-[5.5rem] md:h-[8rem]' src={figma} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Skills