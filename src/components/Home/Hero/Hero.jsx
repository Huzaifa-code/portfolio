import React from 'react'
import styled from 'styled-components'
import img1 from './assets/select1.png'
import img2 from './assets/magic-wand1.png'
import insta from './assets/Instagram.svg'
import lin from './assets/Linkedin.svg'
import gh from './assets/Github.svg'
import profileimg from './assets/profile.svg' 
import { Link } from "react-scroll";
import './Hero.css'


import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";




import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();


// ----------------------- CSS ---------------------------------
const Herosec = styled.div`
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 700px){
    height: 60vh;
  }


  .main {
    display: flex;
    flex-direction: row;
   
    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const SocialBtn = styled.a`
    text-decoration: none;
`;
// ---------x------------- CSS -----------------x---------------


function ParallaxText({ children, baseVelocity = 70 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });


  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);


    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });


  return (
    <div className="parallax overflow-hidden tracking-[-2px] leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="scroller font-[500] text-[#731FFC] text-5xl whitespace-nowrap flex flex-nowrap" style={{ x }}>
        <span className='block mr-8'>{children} </span>
        <span className='block mr-8'>{children} </span>
        <span className='block mr-8'>{children} </span>
        <span className='block mr-8'>{children} </span>
      </motion.div>
    </div>
  );
}


function Hero() {

  return (
    <div className='flex'>

        <div className='w-full'>
            <h1 className='text-center  font-medium text-2xl md:text-3xl' data-aos="fade-left" data-aos-duration="1000" >
              <img className='ml-[30%]' src={img1} alt="" />
              SOFTWARE DEVELOPER  
              <img className='ml-[70%]' src={img2} alt="" />
            </h1>
          
            <Herosec className=''>
              <div className='main'>
                <div className="text flex flex-col items-center">
                  <h1 className='text-center font-medium text-3xl md:text-4xl' data-aos="fade-up" data-aos-duration="1000" >Hi , I am</h1>
                  <h1 className='text-center font-medium text-4xl md:text-5xl md:mt-2' data-aos="fade-up" data-aos-duration="1000" >Huzaifa Qureshi</h1> 
                  <p className='text-center font-regular text-xl px-5 md:px-[26rem] md:text-lg text-neutral-700 md:mt-2' data-aos="fade-up" data-aos-duration="1000" >
                    I focus on developing scalable, high-performance applications and contributing to open-source projects, with the goal of driving innovation and digital transformation in the tech space.
                  </p> 
                  <Link 
                    smooth spy to="contact" 
                    className='my-5 py-3 w-[10rem]  flex items-center justify-center bg-[#731FFC] font-medium text-xl text-white rounded-md hover:bg-red-300 transition-all'>
                    Hire Me <img className='ml-4 h-5' src={profileimg} alt="" /> 
                  </Link>         
                </div>
              </div> 
            </Herosec>

            <div className='mt-2 mb-8'>
              <ParallaxText baseVelocity={-2}>MERN STACK | FULL STACK DEVELOPER |</ParallaxText>
              <ParallaxText baseVelocity={2}>DOTNET | C# | UI/UX WEB DESIGNER | FIGMA |</ParallaxText>
            </div>
        </div>
      
        <div 
          className='fixed bg-black/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-neutral-600 left-[83vw] md:left-auto md:right-10 mt-[10vh] md:mt-[26vh] px-2 z-10'
        >
          <SocialBtn className='' target="_blank" href="https://www.instagram.com/developer_huzaifa"> 
            <div className='p-3 my-3 rounded-full border border-solid border-black dark:border-neutral-600 hover:scale-110 hover:border-neutral-200 transition-all dark:invert'> <img className=""  src={insta} alt="" /></div> 
          </SocialBtn>
          <SocialBtn className='' target="_blank" href="https://www.linkedin.com/in/huzaifa-qureshi-174173179"> 
            <div className='p-3 rounded-full border border-solid border-black hover:scale-110 dark:border-neutral-600 hover:border-neutral-200 transition-all dark:invert'><img src={lin} alt="" /></div>  
          </SocialBtn>
          <SocialBtn className='' target="_blank" href="https://github.com/Huzaifa-code"> 
            <div className='p-3 my-3 rounded-full border border-solid border-black dark:border-neutral-600 hover:scale-110 hover:border-neutral-200 transition-all dark:invert'><img src={gh} alt="" /></div>  
          </SocialBtn>
        </div>
    </div>
  )

  
}

export default Hero