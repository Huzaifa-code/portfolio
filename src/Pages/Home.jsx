import React from 'react';
import '../App.css';
import { ExperienceSection, About, Education, Contact, Hero, Navbar, Projects, Skills, Reviews } from '../components/Home';
import { motion, useScroll, useSpring } from "framer-motion";
import BlogLink from '../components/BlogSection';
import Snowfall from 'react-snowfall';
import MangaText from '../components/Blog/MangaText';
import { UserProvider } from '../context/userContext';

const Home = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <div className='bg-[#f3f0e8] dark:bg-neutral-900 min-h-screen text-black dark:text-[#EBD3F8] font-sans relative overflow-x-hidden'>
      <Navbar />
      
      {/* Top Yellow Progress Bar */}
      <motion.div 
        className='fixed top-0 left-0 right-0 h-[8px] bg-yellow-400 dark:bg-yellow-400 z-30 origin-top-left border-b-2 border-black dark:border-black' 
        style={{ scaleX: scaleX }} 
      />

      {/* Side Decorative Floating Japanese Manga Texts */}
      <div className="hidden lg:block fixed left-6 top-1/4 select-none opacity-30 dark:opacity-40 hover:opacity-100 transition-opacity duration-200 z-10">
        <MangaText 
          text="カタカタ…" 
          translation="Katakata... (Typing...)" 
          className="text-7xl font-extrabold text-black dark:text-white" 
          style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
          tooltipPosition="right"
        />
      </div>
      <div className="hidden lg:block fixed right-6 top-1/3 select-none opacity-30 dark:opacity-40 hover:opacity-100 transition-opacity duration-200 z-10">
        <MangaText 
          text="なるほど！" 
          translation="Naruhodo! (Aha! / I see!)" 
          className="text-7xl font-extrabold text-red-600 dark:text-yellow-400" 
          style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
          tooltipPosition="left"
        />
      </div>

      <Snowfall color='#82c3d9' snowflakeCount={60} style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 1 }} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <ExperienceSection />
        <Skills />
        <Reviews />
        <Projects />
        <BlogLink />
        <Contact />
      </main>
    </div>
  );
}

const HomeWrapper = () => (
  <UserProvider>
    <Home />
  </UserProvider>
);

export default HomeWrapper;