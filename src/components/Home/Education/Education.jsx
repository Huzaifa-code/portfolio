import React from 'react';
import { motion } from 'framer-motion';
import { FaMapLocationDot } from "react-icons/fa6";
import MangaText from '../../Blog/MangaText';

const Education = () => {
  const coins = Array(3).fill(null);

  return (
    <div className='mt-12 mb-0 font-sans'>
      {/* Coin Animation */}
      <div id='coins' className='flex justify-center items-center gap-2 mb-4'>
        {coins.map((_, index) => (
          <motion.div
            key={index}
            className="w-9 h-9 bg-no-repeat bg-[length:800%_100%] bg-[url('/assets/coin_spin.png')] animate-coinSpin"
            whileHover={{ scale: 1.2, y: -5 }}
            style={{ imageRendering: 'pixelated' }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <div className="mb-2">
          <MangaText text="「学歴」" translation="Gakureki (Education)" className="text-xl md:text-2xl text-red-600 dark:text-yellow-400 font-extrabold tracking-wider" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white tracking-tight">
          My Education
        </h2>
      </div>

      {/* Main Education Card */}
      <div className='max-w-5xl mx-auto px-4'>
        <div className="relative bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow p-6 md:p-10 overflow-hidden my-6">
          <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

          <div className="absolute top-0 left-0 bg-black text-white dark:bg-[#EBD3F8] dark:text-black px-3 py-1 font-mono text-xs uppercase tracking-widest border-r-4 border-b-4 border-black dark:border-black z-20 font-bold">
            SECTION. 03 / DEGREE
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 pt-6 relative z-10'>
            <div className="brutalist-border brutalist-shadow-sm bg-yellow-400 p-2 transform -rotate-1">
              <img src="/assets/ietdavvphoto.png" alt="ietdavv" className='md:h-[280px] h-[180px] object-cover brutalist-border' />
            </div>

            <div className="text-center md:text-left">
              <h3 className='text-2xl md:text-3xl font-black uppercase text-black dark:text-white'>
                IET (Institute Of Engineering &amp; Technology)
              </h3>
              <p className='text-xl md:text-2xl font-mono font-bold text-red-600 dark:text-yellow-400 my-1'>DAVV</p>
              <p className='text-base md:text-lg font-medium text-neutral-700 dark:text-neutral-300 mt-2'>
                Bachelor of Engineering ( B.E. ) in Information Technology
              </p>
              <p className='text-sm md:text-base font-bold font-mono text-gray-500 dark:text-gray-400 my-1'>
                2021 - 2025
              </p>
              
              <a 
                href='https://maps.app.goo.gl/oFXnoF1ZgawDNXEEA' target='_blank' 
                className='inline-flex items-center gap-2 mt-4 px-4 py-2 bg-yellow-400 text-black font-bold uppercase text-sm brutalist-border brutalist-shadow-sm hover:-translate-y-0.5 transition-all' rel="noreferrer"
              >
                <FaMapLocationDot /> Indore, India
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sea Art Section */}
      <div 
        className='h-16 mt-24 bg-gradient-to-t from-[#229df2] to-transparent dark:from-[#000041] dark:to-transparent transition-colors duration-300'
      >
      </div>
      <div className="relative bg-[url('/assets/sky.png')] bg-repeat-x bg-bottom dark:bg-[url('/assets/night_sky.png')] dark:bg-center pt-32 dark:brightness-90" style={{imageRendering: 'pixelated'}} >
        <img src="/assets/seashore.png" alt="seashore" className='relative top-4 dark:brightness-50' style={{imageRendering: 'pixelated'}} />
        
        <div className="absolute bottom-14 md:left-[26rem] left-[20rem] z-30">
          <motion.div
            className="w-[48px] h-[48px] bg-no-repeat animate-castLine dark:brightness-50"
            style={{
              backgroundImage: "url('/assets/fisherman.png')",
            }}
            animate={{ y: [0, -1, 0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
          />
        </div>

        <motion.img 
          src="/assets/boat.png" alt="boat" 
          className='absolute z-40 bottom-12 md:left-[24rem] left-[18rem] dark:brightness-50' 
          animate={{ y: [0, -1, 0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
        />

        <motion.div
          className="crt"
          animate={{ opacity: [1, 0.98, 1] }}
          transition={{ repeat: Infinity, duration: 0.1 }}
        >
          <div
            className="h-[64px] bg-repeat bg-[url('/assets/water-body.png')] animate-waveScroll dark:brightness-50"
            style={{ backgroundSize: 'auto 64px', imageRendering: 'pixelated' }} 
          />
        </motion.div>
      </div>

    </div>
  );
};

export default Education;