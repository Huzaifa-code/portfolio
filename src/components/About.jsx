import React from 'react'
import styled from 'styled-components'

const Aboutsec = styled.div`
        height: 100vh;
        @media (max-width: 700px){
          height: 600px;
        }
`;

    const AboutH1 = styled.h1`
        // color: #0be881;
        text-align: center;
        font-size: 4.5rem;

        background-color: #f3ec78;
        background-image: linear-gradient(45deg,#EE8C68 ,#EB6B9D);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
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
        }
    `;


function About() {
    

  return (
    <Aboutsec id='about'>
        <AboutH1>ABOUT ME</AboutH1>

        <Main>
          <Illust src="./assets/illust1.png" alt="" />
          <div>
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