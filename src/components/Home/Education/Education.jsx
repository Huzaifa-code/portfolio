import React from 'react'
import { motion } from 'framer-motion'
import { FaMapLocationDot } from "react-icons/fa6";

const Education = () => {

  const coins = Array(3).fill(null);

  return (
    <div>
        <div id='coins' className='flex justify-center items-center'>
          {
            coins.map((_, index) => (
              <motion.div
                key={index}
                className="w-9 h-9 bg-no-repeat bg-[length:800%_100%] bg-[url('../public/assets/coin_spin.png')] animate-coinSpin"
                whileHover={{ scale: 1.2, y: -5 }}
                style={{
                  imageRendering: 'pixelated'
                }}
              />
            ))  
          }
        </div>
        <h1 className='text-center text-5xl font-medium'>My Education</h1>

        <div className='flex justify-center items-center gap-24 mt-11'>
          <img src="/assets/ietdavvphoto.png" alt="ietdavv" className='h-[350px]' />
          <div>
            <h1 className='text-center text-3xl font-medium'>IET (Institute Of Engineering & Technology)</h1>
            <p className='text-center text-3xl'>DAVV</p>
            <p className='text-center text-xl'>Bachelor of Engineering ( B.E. ) in Information Technology</p>
            <p className='text-center text-xl'>2021 - 2025</p>
            <a 
              href='https://maps.app.goo.gl/oFXnoF1ZgawDNXEEA' target='_blank' 
              className='text-center flex justify-center items-center gap-3 text-xl hover:text-red-300'  rel="noreferrer"
            >
              <FaMapLocationDot /> Indore, India
            </a>
          </div>
        </div>

        <div 
          className='h-16 mt-24'
          style={{ background: 'linear-gradient(to top, #229df2, rgba(255, 255, 255, 0))' }}
        >
        </div>
        <div className="relative bg-[url('../public/assets/sky.png')] pt-32 " style={{imageRendering: 'pixelated'}} >
          <img src="/assets/seashore.png" alt="seashore" className='relative top-4' style={{imageRendering: 'pixelated'}} />
          
          <div className="absolute bottom-14 left-[26rem] z-30">
            <motion.div
              className="w-[48px] h-[48px] bg-no-repeat animate-castLine"
              style={{
                backgroundImage: "url('/assets/fisherman.png')",
              }}
              animate={{ y: [0, -1, 0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
            />
          </div>

          <motion.img 
            src="/assets/boat.png" alt="boat" 
            className='absolute z-40 bottom-12 left-[24rem]' 
            animate={{ y: [0, -1, 0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
          />

          <motion.div
            className="crt"
            animate={{ opacity: [1, 0.98, 1] }}
            transition={{ repeat: Infinity, duration: 0.1 }}
          >
            <div
              className="h-[64px] bg-repeat bg-[url('../public/assets/water-body.png')] animate-waveScroll"
              style={{ backgroundSize: 'auto 64px', imageRendering: 'pixelated' }} 
            />
          </motion.div>
        </div>

    </div>
  )
}

export default Education