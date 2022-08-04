import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components'


const Herosec = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  @media(max-width: 700px){
    height: 60vh;
  }


.main {
  display: flex;
  flex-direction: row;
  padding: 5rem 0;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
      h1{
          font-size: 2rem;
      }
    }
  }
}
`;

const GradName = styled.h1`
font-size: 4rem;
background-color: #f3ec78;
background-image: linear-gradient(45deg,#EE8C68 ,#EB6B9D);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent; 
-moz-text-fill-color: transparent;
`;

const HeroImg = styled.img`
  height: 20rem;
  margin-left: 6rem;

  @media (max-width: 700px){
    height: 10rem;
    margin-left: 0;
  }
`;

const Pattern1 = styled.img`
  position: absolute;
  bottom: 65vh;
  left: 77vw;
  height: 296px;
  z-index: -1;
  @media(max-width: 700px){
    height: 150px;
    top: 100px;
  }
`;
const Pattern2 = styled.img`
  position: absolute;
  bottom: 7vh;
  right: 88vw;
  height: 250px;
  z-index: -1;
  @media(max-width: 700px){
    height: 150px;
    top: 400px;
    right: 80vw;  
  }
`;

const LinkedInBtn = styled.a`

    img {
      height: 40px;
      filter: grayscale(100%);

      &: hover {
        filter: grayscale(0%);
      }
    }
`;


function Hero() {

  return (
    <Herosec>
      <div className='main'>
        <div style={{marginRight: "5rem"}} className="text">
          <h1 style={{ fontWeight: "500" }}>Hi 👋, I am</h1>
          <GradName>Huzaifa Qureshi</GradName>
          <h1 > Web Developer  </h1>
          <Typography variant='subtitle1' style={{ color: "#636e72" }} >Frontend Web Developer, Freelancer</Typography>
        </div>

        
        <HeroImg   src="./assets/hero-img.png" alt="" />
      </div>

      <LinkedInBtn target="_blank" href="https://www.linkedin.com/in/huzaifa-qureshi-174173179"><img src="./assets/linkedin.png" alt="" /></LinkedInBtn>

      <Pattern1 src="./assets/pattern.png" alt="" />
      <Pattern2 src="./assets/blur.png"></Pattern2>
    </Herosec>
  )

  
}

export default Hero