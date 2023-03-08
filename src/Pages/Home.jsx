import React from 'react';
import '../App.css';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/NavBar/Navbar';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

import { motion, useScroll } from "framer-motion"



const Home = () => {

    const { scrollYProgress } = useScroll();
   
    return (
      <div className='bg-white'>
        <Navbar/>
        <motion.div className='fixed top-0 left-0 right-0 h-[10px] bg-[#731FFC] origin-top-left' style={{ scaleX: scrollYProgress }} />  
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    );
}

export default Home