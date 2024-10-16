import React from 'react';
import '../App.css';
import { ExperienceSection, About, Contact, Hero, Navbar, Projects, Skills, Reviews, Services } from '../components/Home';
import { motion, useScroll,useSpring } from "framer-motion"
import BlogLink from '../components/BlogSection';
import { useEffect } from "react";
import { useMotionValue } from "framer-motion";


const Home = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 25,
      restDelta: 0.001
    });

    // Cursor 

      const cursorX = useMotionValue(-100);
      const cursorY = useMotionValue(-100);

      const springConfig = { damping: 25, stiffness: 700 };
      const cursorXSpring = useSpring(cursorX, springConfig);
      const cursorYSpring = useSpring(cursorY, springConfig);

      useEffect(() => {
        const moveCursor = (e) => {
          cursorX.set(e.clientX - 16);
          cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
          window.removeEventListener("mousemove", moveCursor);
        };
      }, [cursorX,cursorY ]);



    
   
    return (
      <div className='bg-white'>
        <motion.div
            className="cursor"
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
            }}
        />
        <Navbar/>
        <motion.div className='fixed top-0 left-0 right-0 h-[10px] bg-[#731FFC] origin-top-left' style={{ scaleX }} />  
        <Hero/>
        <About/>
        <ExperienceSection/>
        <Skills/>
        <Reviews/>
        <Projects/>
        <Services/>
        <BlogLink/>
        <Contact/>
      </div>
    );
}

export default Home