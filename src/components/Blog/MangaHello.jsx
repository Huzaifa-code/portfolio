import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MangaHello = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-4 relative z-20 flex flex-col md:flex-row items-center justify-center gap-6">
      <div 
        className="relative cursor-pointer bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow px-10 py-6 overflow-hidden flex items-center justify-center min-w-[280px] min-h-[120px] transition-all duration-300 hover:bg-yellow-400 dark:hover:bg-[#EBD3F8] hover:scale-105 select-none group w-full max-w-md"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        
        {/* Halftone pattern overlay */}
        <div className="absolute inset-0 halftone-bg opacity-15 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

        {/* Speed lines or action gradient on hover */}
        {hovered && (
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-red-500 to-black"></div>
        )}

        <AnimatePresence mode="wait">
          {!hovered ? (
            <motion.div
              key="japanese"
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-4xl md:text-5xl font-black text-black dark:text-[#EBD3F8] tracking-widest uppercase font-sans">
                こんにちは
              </span>
              <span className="text-2xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                [ Hover Me ]
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="english"
              initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
              animate={{ 
                opacity: 1, 
                scale: [0.3, 1.3, 1], 
                rotate: [-15, 8, -5, 0] 
              }}
              exit={{ opacity: 0, scale: 0.5, rotate: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Manga action text style */}
              <span className="text-6xl md:text-7xl font-black text-red-600 dark:text-red-600 tracking-wider font-sans select-none drop-shadow-[4px_4px_0px_rgba(255,255,0,1)] uppercase transform scale-110 italic">
                HELLO!
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Comic banner badge */}
        <div className="absolute bottom-1 right-2 text-3xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          GREETING
        </div>
      </div>

      {/* Coding Anime Character GIF Panel */}
      <div className="brutalist-border brutalist-shadow bg-white dark:bg-[#1E112C] p-1.5 rotate-2 hover:rotate-0 transition-transform duration-300 max-w-[220px] w-full select-none">
        <img 
          src="/assets/characters/computerAnimeCharacter.gif" 
          alt="Coding Anime Character" 
          className="w-full h-auto object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default MangaHello;
