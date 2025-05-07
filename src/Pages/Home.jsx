import React from 'react';
import '../App.css';
import { ExperienceSection, About, Education, Contact, Hero, Navbar, Projects, Skills, Reviews } from '../components/Home';
import { motion, useScroll,useSpring } from "framer-motion"
import BlogLink from '../components/BlogSection';


const Home = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 25,
      restDelta: 0.001
    });
   
    return (
      <div className='bg-white'>
        <Navbar/>
        <motion.div className='fixed top-0 left-0 right-0 h-[10px] bg-[#731FFC] origin-top-left' style={{ scaleX }} />  
        <Hero/>
        <About/>
        <Education/>
        <ExperienceSection/>
        <Skills/>
        <Reviews/>
        <Projects/>
        {/* <Services/> */}  
        <BlogLink/>
        <Contact/>
      </div>
    );
}

export default Home