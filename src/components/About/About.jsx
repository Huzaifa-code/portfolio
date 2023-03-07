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
        <h1 className='text-5xl ml-9 md:ml-11 md:my-16 font-bold'>ABOUT ME <img src={img1} alt="" /></h1>
        

        <Main>

          <img className='hidden md:block md:h-[60vh]' src={image} alt="" />

          <div className='md:w-[65%] md:pl-24 text-lg md:text-2xl' data-aos="fade-up" data-aos-duration="1000" >
            <p className='my-6 text-justify'>I am a freelancer, full-stack web developer and UI/UX web designer.</p>
            <p className='my-6 text-justify'>I enjoy building web applications that are designed to be intuitive, easy to use, and beautiful. I am dedicated to creating products that people love.</p>
            <p className='my-6 text-justify'>I am currently an engineering student at IET (Institute of Engineering and Technology) DAVV, Indore(MP), India, pursuing B.Tech in IT (Information Technology). </p>
          </div>
        </Main>
    </Aboutsec>

    </Element>
  )
}

export default About