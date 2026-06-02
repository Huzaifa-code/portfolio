import React, {useState, useEffect} from 'react';
import Hamburger from 'hamburger-react'
import image from './assets/logo.png'
import { Link } from "react-scroll";
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {

  const [isOpen, setOpen] = useState(false)

  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const [screenWidth, setScreenWidth] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth : 1024
  )
  
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

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
      <nav
        style={{ minHeight: '10vh', paddingLeft: '3rem', display: 'flex', alignItems: 'center', zIndex: 199, position: 'relative' }}
        className='dark:text-neutral-200'
      >
        {/* Logo links to home */}
        <a href="/">
          <img src={image.src || image} className="dark:invert" alt="logo" />
        </a>
        
        {(toggleMenu || screenWidth > 700) && (
          <div
            className='topnav z-20'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <a href="/" className='my-6 font-medium md:my-[1.5rem] md:mx-6'>Home</a>
            <Link smooth spy to="about" className='my-6 font-medium md:my-[1.5rem] md:mx-6 cursor-pointer' >About</Link>
            <Link smooth spy to="project" className='my-6 font-medium md:my-[1.5rem] md:mx-6 cursor-pointer' >Projects</Link>
            <a href="/blog" className='my-6 font-medium md:my-[1.5rem] md:mx-6' >Blogs</a>
            <Link smooth spy to="contact" className='my-6 font-medium md:my-[1.5rem] md:mx-6 cursor-pointer' >Contact me</Link>
            <button
              onClick={handleDarkModeToggle}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>  
          </div>
        )}

        {/* Hamburger — shown only on mobile */}
        <div className='block md:hidden absolute top-3 right-4 z-20' onClick={toggleNav}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>
      </nav>
    </>
  )
}

export default Navbar