import React from 'react';
import '../App.css';
import { ExperienceSection, About, Education, Contact, Hero, Navbar, Projects, Skills, Reviews } from '../components/Home';
import { motion, useScroll, useSpring } from "framer-motion"
import BlogLink from '../components/BlogSection';
import Snowfall from 'react-snowfall';
import MiniGame from '../components/MiniGame';
import { UserProvider } from '../context/userContext';

const Home = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <div className='bg-white dark:bg-neutral-900'>
      <Navbar />
      <motion.div className='fixed top-0 left-0 bottom-0 w-[7px] bg-[#731FFC] dark:bg-violet-400 z-20 origin-top' style={{ scaleY: scaleX }} />
      <Snowfall color='#82c3d9' snowflakeCount={100} />
      <Hero />
      {/* <MiniGame/> */}
      <About />
      <Education />
      <ExperienceSection />
      <Skills />
      <Reviews />
      <Projects />
      {/* <Services/> */}
      <BlogLink />
      <Contact />
    </div>
  );
}

const HomeWrapper = () => (
  <UserProvider>
    <Home />
  </UserProvider>
);

export default HomeWrapper;