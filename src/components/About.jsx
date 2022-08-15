import React from 'react'
import styled from 'styled-components'

const Aboutsec = styled.div`
        min-height: 80vh;
        @media (max-width: 700px){
          height: 600px;
          margin-top: 2rem;
        }
`;

const AboutH1 = styled.h1`
        // color: #0be881;
        text-align: center;
        font-size: 4.5rem;

        background-color: #f3ec78;
        background-image: linear-gradient(35deg,#00f260, #0575e6);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;

        @media(max-width: 700px){
          margin-bottom: 2rem;
        }
`;

const Main = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70%;
        color: #fff;

        font-size: 1.3rem;

        @media(max-width: 700px){
          flex-direction: column;
          font-size: 0.9rem;

          div{
            padding: 10px 3rem;
          }
        }
`;

const Illust = styled.img`
        height: 350px;
        padding-right: 4rem;

        @media(max-width: 700px){
          height: 200px;
          padding-right: 0;
          padding-top: 10px;
        }
`;


function About() {
    

  return (
    <Aboutsec id='about'>
        <AboutH1>ABOUT ME</AboutH1>

        <Main>
          <Illust data-aos="fade-right" data-aos-duration="1000" src="./assets/illust1.png" alt="" />
          <div data-aos="fade-up" data-aos-duration="1000" >
             <p>I am Huzaifa Qureshi.</p>
             <p>Engineering student at IET (Institute of Engineering and Technology) DAVV, Indore(MP), India.</p>
             <p>Pursuing B.Tech in IT (Information Technology). </p>
             <p>I am Web Developer and Freelancer.</p>
             <p>I also know basics of backend development and I am learning more in it, </p>
             <p>But I am more Interested in Front-end Web Development</p>
          </div>
        </Main>
    </Aboutsec>
  )
}

export default About