import { Box, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';


const Heading = styled.h1`
        text-align: center;
        font-size: 4.5rem;

        @media(max-width: 700px){
          font-size: 3.5rem;
        }

        background-color: #f3ec78;
        background-image: linear-gradient(45deg,#EE8C68 ,#EB6B9D);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
`;

const Imgc = styled.img`
        width: 300px;
        height:  400px;
        margin-left: 4rem;
        border-radius: 1rem;

        @media(max-width: 700px){
          display: none;
        }
`;

const ContactSec = styled.div`
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    margin-left: 15rem;

    @media (max-width: 700px){
      margin-left: 5px;
      height: 300px;
    }
    
    h6{
      @media (max-width: 700px){
        font-size: 1.2rem;
      }
    }

    img.email {
      @media(max-width: 700px){
        width: 20rem !important;
      }
    }
`;

const LinkedInBtn = styled.a`
    text-align: center;
    img {
      height: 40px;
      filter: grayscale(100%);
      margin-top: 15px;

      &: hover {
        filter: grayscale(0%);
      }
    }
`;


function Contact() {
  return (
    <div id='contact'>
        <Heading>CONTACT ME</Heading>
        <Box sx={{ display: 'flex', height: '70vh', justifyContent:'center', alignItems:'center', '@media (max-width:700px)': { height: '200px'} }}>
            <Imgc src="./assets/imgc.jpg" alt="" />
            <ContactSec>
                <Typography variant='h5' component='h6' >If you are looking for Front-end web developer</Typography>
                <Typography variant='h5' component='h6' >OR have some freelancing project </Typography>
                <Typography variant='h5' component='h6' >Just email me at</Typography>
                <img className='email' style={{ width: "40em" }} src="./assets/email.png" alt="" />
                <Typography variant='h5' component='h6' >OR message me at LinkedIn</Typography>
                <LinkedInBtn target="_blank" href="https://www.linkedin.com/in/huzaifa-qureshi-174173179"><img src="./assets/linkedin.png" alt="" /></LinkedInBtn>
            </ContactSec>
        </Box>
{/* 
        <footer style={{ color: '#fff', textAlign: 'center' }}>
          <p>Made with  ❤️  by Huzaifa Qureshi</p>
        </footer> */}
    </div>
  )
}

export default Contact