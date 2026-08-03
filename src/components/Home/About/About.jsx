import React, { useState } from 'react';
import image from './assets/Rectangle2.svg';
import img1 from './assets/vector1.svg';
import { Element } from 'react-scroll';
import CustomModal from '../../CustomModal';
import { FaEye, FaDownload } from 'react-icons/fa';
import MangaText from '../../Blog/MangaText';

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('image');
  const [url, setUrl] = useState(null);

  const openDocsModal = () => {
    setModalType('iframe');
    setUrl('https://docs.google.com/document/d/e/2PACX-1vT3wuprmjPg-3KtBt4cV_RZe9NcRR5zR0U6gXZrEMqeH8O0Jj3XIe43KSoz-nK_QgrFTRo0UhycSDFT/pub?embedded=true');
    setIsModalOpen(true);
  };

  return (
    <Element name="about" className="element max-w-7xl mx-auto px-4 py-8 font-sans">
      <div id='about' className='my-8'>
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="mb-2">
            <MangaText text="「自己紹介」" translation="Jikoshoukai (About Me)" className="text-xl md:text-2xl text-red-600 dark:text-yellow-400 font-extrabold tracking-wider" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Content Bento/Manga Card */}
        <div className="relative bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow p-6 md:p-10 overflow-hidden">
          {/* Halftone Pattern Overlay */}
          <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

          {/* Comic Badge */}
          <div className="absolute top-0 left-0 bg-black text-white dark:bg-[#EBD3F8] dark:text-black px-3 py-1 font-mono text-xs uppercase tracking-widest border-r-4 border-b-4 border-black dark:border-black z-20 font-bold">
            SECTION. 02 / PROFILE
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 pt-6 relative z-10">
            {/* Left Image Column */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="brutalist-border brutalist-shadow-sm bg-yellow-400 p-2 rotate-2 hover:rotate-0 transition-transform duration-300">
                <img className='w-full max-h-[350px] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300' src={image.src || image} alt="About Huzaifa" />
              </div>
            </div>

            {/* Right Text Column */}
            <div className='w-full md:w-2/3 text-neutral-800 dark:text-neutral-200' data-aos="fade-up" data-aos-duration="1000">
              <p className='my-4 text-base md:text-xl font-medium leading-relaxed'>
                I&apos;m a Fullstack web and app developer passionate about building scalable, high-performance digital solutions. With expertise in MERN, React.js, React Native, Next.js, .NET, C#, MySQL, Firebase, TailwindCSS, and MongoDB, I craft stunning and efficient websites and apps tailored to your needs.
              </p>
              
              <div className="p-4 my-4 bg-yellow-400/20 dark:bg-yellow-400/10 brutalist-border border-2 border-black dark:border-yellow-400">
                <p className='text-sm md:text-base font-bold font-mono uppercase tracking-wider text-black dark:text-yellow-400'>
                  ⚡ TECH STACK: .NET | C# | MYSQL | MERN | REACT.JS | REACT-NATIVE | NEXT.JS | NODE.JS | FIREBASE | TAILWIND | MONGODB
                </p>
              </div>

              <div className="flex items-center gap-4 mt-6 flex-wrap">
                <button 
                  onClick={openDocsModal} 
                  className='py-3 px-6 bg-yellow-400 text-black font-bold uppercase tracking-wider brutalist-border brutalist-shadow-sm hover:bg-yellow-300 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-2 text-sm md:text-base' 
                >
                  <FaEye />
                  View Resume
                </button>
                
                <a
                  className='py-3 px-6 bg-white text-black dark:bg-[#EBD3F8] dark:text-black font-bold uppercase tracking-wider brutalist-border brutalist-shadow-sm hover:bg-gray-100 dark:hover:bg-purple-300 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-2 text-sm md:text-base' 
                  href="https://docs.google.com/document/d/1yVMhw9hVLRwzPlxh9YA0i9FdWT-slbFSTfXCvXrXcpU/export?format=pdf"
                >
                  <FaDownload />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} url={url} type={modalType} />
      </div>
    </Element>
  );
}

export default About;