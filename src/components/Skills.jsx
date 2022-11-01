import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
        text-align: center;
        font-size: 4.5rem;

        background-color: #f3ec78;
        background-image: linear-gradient(35deg,#00f260, #0575e6);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    `;



const Main = styled.div`
        height: 80vh;
        color: #fff;
        display: grid;
        grid-template-columns: 0.5fr 0.5fr;
        padding-top: 1rem;
        padding-left: 10rem;

        @media(max-width: 700px){
            grid-template-columns: 1fr;
            padding: 0 2rem;
        }

        h2 {
            font-size: 1.3rem;
            @media(max-width: 700px){
                font-weight: 500;
            }
        }
        
`;



function Skills() {

    
  return (
    <div id='skills'>
        <Heading>SKILLS</Heading>
        <Main data-aos="fade-up" data-aos-duration="1000" >
            <div>
                <h2>REACT</h2>
                <progress className="progress progress-accent rounded-xl md:w-[400px] w-full" value="70" max="100"></progress>
            </div>
            <div>
                <h2>HTML</h2>
                <progress className="progress progress-accent rounded-xl md:w-[400px] w-full" value="85" max="100"></progress>
            </div>
            <div>
                <h2>CSS</h2>
                <progress className="progress progress-accent rounded-xl md:w-[400px] w-full" value="85" max="100"></progress>
            </div>
            <div>
                <h2>JavaScript</h2>
                <progress className="progress progress-accent rounded-xl md:w-[400px] w-full" value="70" max="100"></progress>
            </div>
            <div>
                <h2>Node.js</h2>
                <progress className="progress progress-accent rounded-xl md:w-[400px] w-full" value="60" max="100"></progress>
            </div>
            <div>
                <h2>Express</h2>
                <progress className="progress progress-accent rounded-xl md:w-[400px] w-full" value="60" max="100"></progress>
            </div>
            <div>
                <h2>MongoDb</h2>
                <progress className="progress progress-accent rounded-xl md:w-[400px] w-full" value="66" max="100"></progress>
            </div>
            <div>
                <h2>UI/UX</h2>
                <progress className="progress progress-accent rounded-xl md:w-[400px] w-full" value="85" max="100"></progress>
            </div>
            <div>
                <h2>C++</h2>
                <progress className="progress progress-info rounded-xl md:w-[400px] w-full" value="85" max="100"></progress>   
            </div>
        </Main>
    </div>
  )
}

export default Skills