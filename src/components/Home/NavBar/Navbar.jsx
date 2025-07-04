import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react'
import image from './assets/logo.png'
import { Link } from "react-scroll";
import { Link as RouteLink}  from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';


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
  justify-content: center;
  width:  100%;
  

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

function Navbar() {

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
      <Nav className='sticky top-0 bg-black/10 backdrop-blur-sm dark:text-neutral-200'>

          <RouteLink>
            <img src={image} className="dark:invert" alt="logo" />
          </RouteLink>
          
          {(toggleMenu || screenWidth > 700) && (
            <Links className='topnav z-20' id='myTopnav'>
                {/* Link imported from "react-scroll" library for animation */}
                {/* And RouteLink is for Link in react-router-dom */}
                <RouteLink  to="/" className='my-6 font-medium md:my-[1.5rem] md:mx-6' >Home</RouteLink>
                <Link smooth spy to="about" className='my-6 font-medium md:my-[1.5rem] md:mx-6' >About</Link>
                <Link smooth spy to="project" className='my-6 font-medium md:my-[1.5rem] md:mx-6' >Projects</Link>
                <RouteLink to="/blog" className='my-6 font-medium md:my-[1.5rem] md:mx-6' >Blogs</RouteLink>
                <Link smooth spy to="contact" className='my-6 font-medium md:my-[1.5rem] md:mx-6' >Contact me</Link>
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


          <Bars onClick={toggleNav} className='z-20'>
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
          </Bars>

      </Nav>
    </>
  )
}

export default Navbar