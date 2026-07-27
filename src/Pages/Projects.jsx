import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import Card from '../components/ProjectsPage/Card';

const Projects = () => {

  const [index, setIndex] = useState(0);
  const [exitX, setExitX] = useState("100%");

  return (
    <div className='bg-[#8d3ada] min-h-screen flex justify-center '>
      <h1 className='text-white font-bold text-3xl my-11'>Projects</h1>
      <div className='flex justify-center items-center'>
      <motion.div
        style={{
            width: 150,
            height: 150,
            position: "relative"
        }}
      >
          <AnimatePresence initial={false}>
              <Card
                  key={index + 2}
                  initial={{ scale: 0, y: 105, opacity: 0 }}
                  animate={{ scale: 0.5, y: 60, opacity: 0.4 }}
                  transition={{
                      scale: { duration: 0.2 },
                      opacity: { duration: 0.4 }
                  }}
              />
              <Card
                  key={index + 1}
                  initial={{ scale: 0, y: 105, opacity: 0 }}
                  animate={{ scale: 0.75, y: 30, opacity: 0.5 }}
                  transition={{
                      scale: { duration: 0.2 },
                      opacity: { duration: 0.4 }
                  }}
              />
              <Card
                  key={index}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      opacity: { duration: 0.2 }
                  }}
                  exitX={exitX}
                  setExitX={setExitX}
                  index={index}
                  setIndex={setIndex}
                  drag="x"
              />
          </AnimatePresence>
      </motion.div>
      </div>

    </div>

  )
}

export default Projects