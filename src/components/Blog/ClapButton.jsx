import React, { useState } from 'react';
import { PiHandsClapping } from "react-icons/pi";
import { updateClapCountInSanity } from '../../utils/updateClapCountInSanity';


const ClapButton = ({ initialClaps, slug  }) => {

  const [claps, setClaps] = useState(initialClaps || 0);
  const [isClapped, setIsClapped] = useState(false);

  const handleClap = () => {
    const newClapCount = claps + 1;
    setClaps(newClapCount);
    setIsClapped(true);
    setTimeout(() => {
      setIsClapped(false);
    }, 1000); // Reset clap animation state after 1 second

    updateClapCountInSanity(slug, newClapCount);
  };

  return (
    <button
      className={`flex items-center gap-2 px-4 py-2  font-semibold text-lg  transition-transform duration-200 ease-in-out rounded-lg ${
        isClapped ? 'scale-125' : 'scale-100'
      }`}
      onClick={handleClap}
    >
      <PiHandsClapping className="text-3xl" />
      <span>{claps}</span>
    </button>
  );
};

export default ClapButton;
