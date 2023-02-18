import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react'
import image from './assets/logo.png'
import { Link } from "react-scroll";

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


  return (
    <>
      <Nav>
          <img src={image} alt="" />
          
          {(toggleMenu || screenWidth > 700) && (
            <Links className='topnav' id='myTopnav'>
                {/* Link imported from "react-scroll" library */}
                <Link smooth spy to="/" className='my-6 font-medium md:my-[1.5rem] md:mx-6' >Home</Link>
                <Link smooth spy to="about" className='my-6 font-medium md:my-[1.5rem] md:mx-6' >About</Link>
                <Link smooth spy to="project" className='my-6 font-medium md:my-[1.5rem] md:mx-6' >Projects</Link>
                <Link smooth spy to="contact" className='my-6 font-medium md:my-[1.5rem] md:mx-6' >Contact me</Link>
            </Links>
          )}


          <Bars onClick={toggleNav}>
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
          </Bars>

      </Nav>
    </>
  )
}

export default Navbar