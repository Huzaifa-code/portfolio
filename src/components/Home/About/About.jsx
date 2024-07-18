import React from 'react'
import styled from 'styled-components'
import image from './assets/Rectangle2.svg'
import img1 from './assets/vector1.svg'
import { Element } from 'react-scroll'

const Aboutsec = styled.div`
        min-height: 80vh;
        @media (max-width: 700px){
          margin-top: 2rem;
        }
`;


const Main = styled.div`
        display: flex;
        height: 70%;

        font-size: 1.3rem;

        @media(max-width: 700px){
          flex-direction: column;
          
          div{
            padding: 10px 3rem;
          }
        }
`;


function About() {
    

  return (
    <Element name="about" className="element">
      
      <Aboutsec id='about'>
          <h1 className='text-5xl text-center flex flex-col justify-center items-center md:my-16 font-bold'>ABOUT ME <img className='w-11' src={img1} alt="" /></h1>
          

          <Main>

            <img className='hidden md:block md:min-h-[60vh]' src={image} alt="" />

            <div className='md:w-[65%] md:pl-24 text-lg md:text-2xl' data-aos="fade-up" data-aos-duration="1000" >
              <p className='my-6 text-justify'>
                I'm a passionate freelance web & app developer with a knack for turning ideas into captivating online experiences. 
                With a blend of creativity and technical prowess, I craft websites & apps that not only look stunning but also function flawlessly. 
                Whether you're a small business looking to establish an online presence or a visionary entrepreneur seeking a unique digital solution, 
                I'm here to bring your dreams to life. Let's collaborate and create something remarkable together!
              </p>
              <p className='my-6 text-justify'>My Tech Stack is MERN React.js React-Native Next.js Node.js Firebase Tailwindcss MongoDB </p> 
              <a 
                className='text-sm font-medium px-3 py-3 rounded-lg bg-[#000] border-2 border-[#000] text-white hover:bg-white hover:text-black' 
                href="https://docs.google.com/document/d/1yVMhw9hVLRwzPlxh9YA0i9FdWT-slbFSTfXCvXrXcpU/edit?usp=sharing"
                target="_blank" rel="noreferrer"
              >
                Download Resume
              </a>
            </div>

          </Main>

      </Aboutsec>

    </Element>
  )
}

export default About