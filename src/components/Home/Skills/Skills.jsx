import React from 'react'
import cplus from './assets/c++.svg';
import figma from './assets/figma.svg';
import js from './assets/js.svg'
import mongodb from './assets/mongodb.svg'
import nodejs from './assets/nodejs.svg'
import react from './assets/react.svg'
import ts from './assets/ts.svg'

//for carousel
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';


function Skills() {

  const images = [ react, nodejs, ts, mongodb, js, cplus, figma ];
    
  return (
    <div id='skills'>
        <h1 className='text-4xl md:text-5xl md:ml-11 my-4 md:my-16 font-bold text-center'>MY TECH SKILLS</h1>
        <Splide className=' py-6'
          options={ {
            gap   : '5px',
            perPage: 5,
            type: 'loop',
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 3
            },
            arrows: false,
            pagination: false,
            breakpoints: {
                600: {
                    perPage: 2,
                } 
            }
              } } 
            aria-label="My Favorite Images"
            extensions={{ AutoScroll }}
          >

            {
              images.map( (image, key) => {
                return (
                  <SplideSlide key={key} className=''>
                    <div className='py-9' >
                      <img className='md:h-[10rem] h-[7rem]' src={image} alt="" />
                    </div>
                  </SplideSlide>
                )
              } )
            }
              
        </Splide>            


    </div>
  )
}

export default Skills