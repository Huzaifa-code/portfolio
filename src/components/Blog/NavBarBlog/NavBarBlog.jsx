import React, {useState, useEffect, useRef} from 'react';
import Hamburger from 'hamburger-react'
import image from './assets/logo.png'
import { useUser } from '../../../context/userContext';
import Avatar from 'boring-avatars';
import { FaMoon, FaSun } from 'react-icons/fa';


function NavBarBlog() {

  const {user, handleLogout} = useUser();

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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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

  const isActive = (path) => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === path;
    }
    return false;
  };

  return (
    <>
      {/* Nav */}
      <nav className='bg-[#f3f0e8] dark:bg-neutral-900 text-black dark:text-[#EBD3F8] brutalist-border border-b-8 border-x-0 border-t-0 flex items-center relative z-[199] px-4 md:px-12 py-4 font-sans'>
        <a href="/" className="brutalist-card-hover inline-block">
          {/* A brutalist container for the logo */}
          <div className="bg-yellow-400 p-2 brutalist-border brutalist-shadow-sm transform -rotate-3">
             <img src={image.src || image} alt="logo" className="h-8 md:h-10 invert dark:invert-0" style={{imageRendering: 'pixelated'}} />
          </div>
        </a>
          
        {(toggleMenu || screenWidth > 700) && (
          <div
            className='topnav z-10 flex flex-col md:flex-row items-center justify-end w-full absolute md:relative top-full left-0 md:top-auto bg-[#f3f0e8] dark:bg-neutral-900 md:bg-transparent md:dark:bg-transparent border-b-4 border-black md:border-none p-4 md:p-0 brutalist-shadow md:shadow-none'
          >
            <a  
              href="/"
              className={`my-2 md:my-0 md:mx-4 px-4 py-2 uppercase tracking-wider transition-all delay-75 brutalist-border brutalist-card-hover ${isActive('/') ? "bg-blue-600 text-white dark:bg-yellow-400 dark:text-black brutalist-shadow-sm" : "bg-white text-black dark:bg-neutral-800 dark:text-white hover:bg-gray-100"}`}
            >Portfolio</a>
            
            <a  
              href="/blog" 
              className={`my-2 md:my-0 md:mx-4 px-4 py-2 uppercase tracking-wider transition-all delay-75 brutalist-border brutalist-card-hover ${isActive('/blog') ? "bg-red-500 text-white dark:bg-yellow-400 dark:text-black brutalist-shadow-sm" : "bg-white text-black dark:bg-neutral-800 dark:text-white hover:bg-gray-100"}`}
            >Blogs</a>

            {user ? (
              <div className='relative md:ml-4 my-2 md:my-0' ref={dropdownRef}>
                <div className='flex items-center gap-3 cursor-pointer bg-white dark:bg-neutral-800 px-3 py-1 brutalist-border brutalist-card-hover' onClick={toggleDropdown}>
                  <h1 className='uppercase tracking-wider'>{user?.username}</h1>
                  <Avatar
                    size={32}
                    name={user?.username}
                    variant='beam'
                    colors={['#F94144','#F3722C','#F8961E','#F9844A','#F9C74F','#90BE6D','#43AA8B','#577590']}
                  />
                </div>

                {isDropdownOpen && (
                  <div className='absolute mt-2 right-0 w-44 bg-white dark:bg-[#2E073F] brutalist-border brutalist-shadow-sm z-50'>
                    <button
                      onClick={handleLogout}
                      className='block px-4 py-3 text-black dark:text-[#EBD3F8] uppercase hover:bg-red-500 hover:text-white w-full text-left transition-colors border-b-2 border-black last:border-0'
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <a href='/login' className='my-2 md:my-0 md:mx-4 px-4 py-2 uppercase tracking-wider bg-black text-white dark:bg-[#EBD3F8] dark:text-black brutalist-border brutalist-card-hover transition-all delay-75' >
                Login
              </a>
            )}

            <button
              onClick={handleDarkModeToggle}
              className="ml-0 md:ml-4 mt-2 md:mt-0 p-2 brutalist-border bg-white text-black hover:bg-yellow-400 dark:bg-neutral-800 dark:text-yellow-400 dark:hover:bg-purple-600 transition-colors brutalist-card-hover"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>            
          </div>
        )}

        {/* Hamburger */}
        <div
          className='z-10 absolute right-4'
          style={{
            display: 'none',
            ...(typeof window !== 'undefined' && window.innerWidth <= 700
              ? { display: 'block', cursor: 'pointer' }
              : {}),
          }}
          onClick={toggleNav}
        >
          <div className='block md:hidden bg-white dark:bg-neutral-800 brutalist-border p-1'>
            <Hamburger toggled={isOpen} toggle={setOpen} size={24} color={darkMode ? '#EBD3F8' : '#000'} />
          </div>
        </div>

      </nav>
    </>
  )
}

export default NavBarBlog
