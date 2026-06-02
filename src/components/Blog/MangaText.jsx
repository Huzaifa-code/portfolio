import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MangaText = ({ text, translation, className = "", style = {}, tooltipPosition = "top" }) => {
  const [hovered, setHovered] = useState(false);
  
  const positionClasses = {
    top: "left-1/2 bottom-full mb-2",
    right: "left-full top-1/2 ml-2",
    left: "right-full top-1/2 mr-2",
    bottom: "left-1/2 top-full mt-2",
  };

  const initialAnims = {
    top: { opacity: 0, y: 10, scale: 0.8, x: "-50%" },
    right: { opacity: 0, x: -10, scale: 0.8, y: "-50%" },
    left: { opacity: 0, x: 10, scale: 0.8, y: "-50%" },
    bottom: { opacity: 0, y: -10, scale: 0.8, x: "-50%" },
  };

  const animateAnims = {
    top: { opacity: 1, y: 0, scale: 1, x: "-50%" },
    right: { opacity: 1, x: 0, scale: 1, y: "-50%" },
    left: { opacity: 1, x: 0, scale: 1, y: "-50%" },
    bottom: { opacity: 1, y: 0, scale: 1, x: "-50%" },
  };

  return (
    <span 
      className={`relative inline-block cursor-help font-bold select-none transition-transform duration-200 hover:scale-105 ${className}`}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={initialAnims[tooltipPosition]}
            animate={animateAnims[tooltipPosition]}
            exit={initialAnims[tooltipPosition]}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{ writingMode: 'horizontal-tb' }}
            className={`absolute ${positionClasses[tooltipPosition]} z-50 bg-yellow-400 text-black text-xs font-sans font-bold py-1 px-3 uppercase brutalist-border border-black whitespace-nowrap brutalist-shadow-sm pointer-events-none`}
          >
            {translation}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export default MangaText;
