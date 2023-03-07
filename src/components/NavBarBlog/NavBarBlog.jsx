import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react'
import image from './assets/logo.png'
import { Link as RouteLink}  from 'react-router-dom';

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

function NavBarBlog() {

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
      <Nav className='bg-white'>
          <img src={image} alt="" />
          
          {(toggleMenu || screenWidth > 700) && (
            <Links className='topnav' id='myTopnav'>
                {/* Link imported from "react-scroll" library for animation */}
                {/* And RouteLink is for Link in react-router-dom */}
                <RouteLink  to="/" className='my-6 font-medium md:my-[1.5rem] md:mx-6' >My Portfolio</RouteLink>
                <RouteLink  to="/blog" className='my-6 font-medium md:my-[1.5rem] md:mx-6' >Blogs</RouteLink>
            </Links>
          )}


          <Bars onClick={toggleNav}>
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
          </Bars>

      </Nav>
    </>
  )
}

export default NavBarBlog