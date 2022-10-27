import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react'
const Nav = styled.nav`
        min-height: 10vh;
        color: #fff;
        padding-left: 3rem;
        display: flex;
        align-items: center;
        z-index: 199;

        @media(max-width: 700px){
          padding-left: 1rem;
    
          h2 {
            position: absolute;
            top: 1rem;
            left: 1rem;
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
          color: #fff;
          font-size: 1.2rem;

          &:hover {
            color: #0be881;
          }
        }

        @media (max-width: 700px){
           position: absolute;
           top:0;
           left:0;
           flex-direction: column;
           background: #1e1e1e;


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
          <h2 style={{color: "#0be881"}}>HUZAIFA</h2>

          {(toggleMenu || screenWidth > 700) && (
            <Links className='topnav' id='myTopnav'>
                <a className='my-6 font-extralight md:my-[1rem] md:mx-4' href="#about">About me</a>
                <a className='my-6 font-extralight md:my-[1rem] md:mx-4' href="#skills">Skills</a>
                <a className='my-6 font-extralight md:my-[1rem] md:mx-4' href="#project">Projects</a>
                <a className='my-6 font-extralight md:my-[1rem] md:mx-4' href="#contact">Contact me</a>
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