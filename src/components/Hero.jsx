import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import { TbBrandInstagram, TbBrandLinkedin } from "react-icons/tb"; //icon from react icon  
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
  padding-top: 5rem;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;

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
    background-image: linear-gradient(35deg,#00f260, #0575e6);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
`;

const HeroImg = styled.img`
  height: 17rem;
  margin-left: 6rem;
  border: 3px solid #fff;
  border-radius: 50%;
  padding: 3px 3px;

  @media (max-width: 700px){
    height: 10rem;
    margin-left: 0;
    margin-top: 2rem;
  }
`;

const Pattern1 = styled.img`
  position: absolute;
  bottom: 73vh;
  left: 86vw;
  height: 200px;
  z-index: -1;
  @media(max-width: 700px){
    height: 150px;
    top: 100px;
  }
`;
const Pattern2 = styled.img`
  position: absolute;
  bottom: 7vh;
  right: 90vw;
  height: 200px;
  z-index: -1;
  
  @media(max-width: 700px){
    display: none;
    // height: 150px;
    // top: 400px;
    // right: 80vw;  
  }
`;

const SocialBtn = styled.a`
    text-decoration: none;
    font-size: 2.3rem;
    color:#0be881;
`;




function Hero() {

  return (
    <Herosec>
      <div className='main'>
        <div style={{marginRight: "5rem"}} className="text">
          <h1 data-aos="fade-up" data-aos-duration="1000" style={{ fontWeight: "500" }}>Hi 👋, I am</h1>
          <GradName data-aos="fade-up" data-aos-duration="1000" >Huzaifa Qureshi</GradName>
          <h1 data-aos="fade-up" data-aos-duration="1000" > Web Developer  </h1>
          <Typography data-aos="fade-up" data-aos-duration="1000" variant='subtitle1' style={{ color: "#636e72" }} >Frontend Web Developer, Freelancer</Typography>
        </div>

        
        <HeroImg   src="./assets/profile-pic.png" alt="" />
      </div>

      <div className='social'>
        <SocialBtn target="_blank" href="https://www.linkedin.com/in/huzaifa-qureshi-174173179"> <TbBrandLinkedin/> </SocialBtn>
        <SocialBtn target="_blank" href="https://www.instagram.com/dev_huzaifa"> <TbBrandInstagram/> </SocialBtn>
      </div>
      <Pattern1 src="./assets/pattern.png" alt="" />
      <Pattern2 src="./assets/blur.png"></Pattern2>
    </Herosec>
  )

  
}

export default Hero