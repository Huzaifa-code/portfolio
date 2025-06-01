import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react'
import image from './assets/logo.png'
import { NavLink as RouteLink}  from 'react-router-dom';
import { useUser } from '../../../context/userContext';
import Avatar from 'boring-avatars';
import { FaMoon, FaSun } from 'react-icons/fa';


function NavBarBlog() {

  const {user, handleLogout} = useUser();

  // console.log(user, ": user")

  const [isOpen, setOpen] = useState(false)

  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
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
    return localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
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
      <Nav className='bg-white dark:bg-neutral-900 text-black dark:text-white'>
        <RouteLink to="/" ><img src={image} alt="logo" className="dark:invert" /></RouteLink>
          
          
          {(toggleMenu || screenWidth > 700) && (
            <Links className='topnav z-10' id='myTopnav'>
                {/* Link imported from "react-scroll" library for animation */}
                {/* And RouteLink is for Link in react-router-dom */}
                <RouteLink  
                  to="/"
                  className={({ isActive }) => 
                    `my-6 md:my-[1.5rem] md:mx-6 border-b-2 border-b-transparent hover:border-b-[#731FFC] transition-all delay-75 ${isActive ? "text-[#4e54c8]" : "text-black dark:text-white"}`
                  } 
                >Portfolio</RouteLink>
                <RouteLink  
                  to="/blog" 
                  className={({ isActive }) => 
                    `my-6 md:my-[1.5rem] md:mx-6 border-b-2 border-b-transparent hover:border-b-[#731FFC] ${isActive ? "text-[#731FFC]" : "text-black"}`
                  }
                >Blogs</RouteLink>

                {
                  user ? (
                    <div className='relative ml-auto' ref={dropdownRef}>
                      <div className='flex items-center gap-3 cursor-pointer' onClick={toggleDropdown}>
                        <h1 className='font-semibold'>{ JSON.parse(localStorage.getItem('user'))?.user.username}</h1>
                        <Avatar
                          size={40}
                          name={ JSON.parse(localStorage.getItem('user'))?.user.username }
                          // name={user?.username}
                          variant='beam'
                          colors={[
                            '#F94144',
                            '#F3722C',
                            '#F8961E',
                            '#F9844A',
                            '#F9C74F',
                            '#90BE6D',
                            '#43AA8B',
                            '#577590',
                          ]}
                        />
                      </div>

                      {isDropdownOpen && (
                        <div className='absolute mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg'>
                          <button
                            onClick={handleLogout}
                            className='block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-left border-b-2 border-b-transparent hover:border-b-[#731FFC] transition-all delay-75'
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>

                  ) :
                  (
                    <RouteLink to='/login' className='my-6  md:my-[1.5rem] md:mx-6 border-b-2 border-b-transparent hover:border-b-[#731FFC] transition-all delay-75' >
                      Login
                    </RouteLink>
                  )
                }

                <button
                  onClick={handleDarkModeToggle}
                  className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Toggle dark mode"
                  title="Toggle dark mode"
                >
                  {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>            
            </Links>
          )}


        <Bars onClick={toggleNav} className='z-10' >
              <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </Bars>

      </Nav>
    </>
  )
}

export default NavBarBlog


const Nav = styled.nav`
  min-height: 10vh;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  z-index: 199;

  @media(max-width: 700px){
    padding-left: 1rem;

    img {
      position: absolute;
      top: 1rem;
      left: 1rem;
      height: 2rem;
    }
  }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width:  100%;
    margin-right: 3rem;

    a{
      
      text-decoration: none;
      font-size: 1.2rem;

      &:hover {
        color: #731FFC;
      }
    }

    @media (max-width: 700px){
        position: absolute;
        top:0;
        left:0;
        flex-direction: column;
        justify-content: center;
        background: #fff;


        height: 90vh;
        transition: all 4s ease-in-out;

        
      a {
        font-size: 2.5rem;
      }
    }

`;

const Bars = styled.div`
  display: none;


  @media(max-width: 700px){
    display: block;
    position: absolute;
    top: 0.6rem;
    right: 1rem;
    cursor: pointer;
  }
`;
