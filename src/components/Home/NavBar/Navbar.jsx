import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import image from './assets/logo.png';
import { Link } from "react-scroll";
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const [screenWidth, setScreenWidth] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.theme === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => setDarkMode((prev) => !prev);

  return (
    <>
      <nav className='bg-[#f3f0e8] dark:bg-neutral-900 text-black dark:text-[#EBD3F8] brutalist-border border-b-8 border-x-0 border-t-0 flex items-center justify-between relative z-[199] px-4 md:px-12 py-4 font-sans'>
        {/* Logo links to home */}
        <a href="/" className="brutalist-card-hover inline-block">
          <div className="bg-yellow-400 p-2 brutalist-border brutalist-shadow-sm transform -rotate-3">
            <img src={image.src || image} className="h-8 md:h-10 invert dark:invert-0" alt="logo" style={{ imageRendering: 'pixelated' }} />
          </div>
        </a>
        
        {(toggleMenu || screenWidth > 700) && (
          <div className='topnav z-20 flex flex-col md:flex-row items-center justify-end w-full absolute md:relative top-full left-0 md:top-auto bg-[#f3f0e8] dark:bg-neutral-900 md:bg-transparent md:dark:bg-transparent border-b-4 border-black md:border-none p-4 md:p-0 brutalist-shadow md:shadow-none font-bold uppercase tracking-wider text-sm'>
            <a href="/" className='my-2 md:my-0 md:mx-3 px-4 py-2 bg-yellow-400 text-black brutalist-border brutalist-shadow-sm brutalist-card-hover'>Home</a>
            <Link smooth spy to="about" className='my-2 md:my-0 md:mx-3 px-4 py-2 bg-white text-black dark:bg-neutral-800 dark:text-white brutalist-border brutalist-card-hover hover:bg-yellow-300 dark:hover:bg-purple-900 cursor-pointer'>About</Link>
            <Link smooth spy to="project" className='my-2 md:my-0 md:mx-3 px-4 py-2 bg-white text-black dark:bg-neutral-800 dark:text-white brutalist-border brutalist-card-hover hover:bg-yellow-300 dark:hover:bg-purple-900 cursor-pointer'>Projects</Link>
            <a href="/blog" className='my-2 md:my-0 md:mx-3 px-4 py-2 bg-red-500 text-white dark:bg-red-600 dark:text-white brutalist-border brutalist-card-hover hover:bg-red-400'>Blogs</a>
            <Link smooth spy to="contact" className='my-2 md:my-0 md:mx-3 px-4 py-2 bg-blue-600 text-white dark:bg-yellow-400 dark:text-black brutalist-border brutalist-card-hover cursor-pointer'>Contact</Link>
            <button
              onClick={handleDarkModeToggle}
              className="ml-0 md:ml-3 mt-2 md:mt-0 p-2 brutalist-border bg-white text-black hover:bg-yellow-400 dark:bg-neutral-800 dark:text-yellow-400 dark:hover:bg-purple-600 transition-colors brutalist-card-hover"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>  
          </div>
        )}

        {/* Hamburger — shown only on mobile */}
        <div className='block md:hidden z-20' onClick={toggleNav}>
          <div className='bg-white dark:bg-neutral-800 brutalist-border p-1'>
            <Hamburger toggled={isOpen} toggle={setOpen} size={24} color={darkMode ? '#EBD3F8' : '#000'} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;