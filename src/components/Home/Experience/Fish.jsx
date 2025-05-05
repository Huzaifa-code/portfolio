import React, { useState } from 'react'
import {motion} from 'framer-motion'


const Fish = ({color="orange",number=4}) => {

  const fishes = Array(number).fill(null);
  let path = `../public/assets/fish_orange.png`;

  switch (color) { 
    case "orange":
        path = `/assets/fish_orange.png`;
        break;
    case "grey":
        path = `/assets/fish_grey.png`;
        break;
    case "red":
        path = `/assets/fish_red.png`;
        break;
    default:
        path = `/assets/fish_orange.png`;
        break;
  }

  // State to manage duration per fish
  const [durations, setDurations] = useState(
    Array(number).fill().map(() => 8 + Math.random() * 4) // initial random duration
  );

  const handleFishClick = (index) => {
    // Speed up fish (halve its duration)
    setDurations((prev) =>
      prev.map((duration, i) => (i === index ? Math.max(1, duration * 0.5) : duration))
    );
  };
    

  return (
    <div className="w-full relative overflow-hidden -z-0">
        {
            fishes.map((_, index) => {
                const left = Math.random() * 150; 
                const delay = Math.random() * 3;
                const duration = durations[index];

                return (
                    <motion.div key={index} className="relative w-16 h-9 animate-swim"
                        style={{
                            left: `-${left}px`,
                            animation: `swim ${duration}s linear ${delay}s infinite`,
                        }}
                        onClick={() => handleFishClick(index)}
                    >
                        <motion.div
                            className={`w-full h-full bg-no-repeat bg-[length:800%_400%] animate-fishSwim`}
                            style={{
                                backgroundImage: `url(${path})`,
                                backgroundPositionY: '0%', // Top row, can change for variation
                                imageRendering: 'pixelated'
                            }}
                            whileHover={{ scale: 1.3, rotate: -30 }}
                        />
                    </motion.div>
                )
            })
        }
    </div>
  )
}

export default Fish