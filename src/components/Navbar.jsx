import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
        min-height: 10vh;
        color: #fff;
        padding-left: 3rem;
        display: flex;
        align-items: center;
        z-index: 199;

        @media(max-width: 700px){
          padding-left: 1rem;
    
          background: #000;
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
          margin: 0 1rem;
          text-decoration: none;
          color: #fff;
          font-size: 1.2rem;

          &:hover {
            color: #0be881;
          }
        }

        @media (max-width: 700px){
           flex-direction: column;
           height: 55vh;

          a {
            font-size: 2.5rem;
          }
        }

    `;

const Bars = styled.div`
        display: none;

        img {
          height: 3rem;
        }

        @media(max-width: 700px){
          display: block;
          position: absolute;
          top: 0.6rem;
          right: 1rem;
          cursor: pointer;
        }
`;

function Navbar() {

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
                <a href="#about">About me</a>
                <a href="#skills">Skills</a>
                <a href="#project">Projects</a>
                <a href="#contact">Contact me</a>
            </Links>
          )}


          <Bars onClick={toggleNav}>
                <img src="./assets/menu.png" alt="" />
          </Bars>

      </Nav>
    </>
  )
}

export default Navbar