import React from 'react';
import '../App.css';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/NavBar/Navbar';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';



const Home = () => {
   
    return (
      <div className='bg-white'>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    );
}

export default Home