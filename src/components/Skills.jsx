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


const SkillBar = styled.div`
    width: 400px;
    background-color: #ecf0f1;
    height: 0.8rem;
    border-radius: 1rem;

    @media(max-width: 700px){
        width: 150px;
        height: 0.7rem;
    }

    div {
        width: 77%;
        height: 0.8rem;
        background-image: linear-gradient(35deg, #11998e,#38ef7d);
        border-radius: 1rem;

        @media(max-width: 700px){
            height: 0.7rem;
        }
    }
    
    
`;

const Main = styled.div`
        height: 80vh;
        color: #fff;
        display: grid;
        grid-template-columns: 0.5fr 0.5fr;
        padding-top: 1rem;
        padding-left: 10rem;

        @media(max-width: 700px){
            // grid-template-columns: 1fr;
            padding: 0 1rem;
        }

        h2 {
            font-size: 1.3rem;
            @media(max-width: 700px){
                font-weight: 500;
            }
        }

        div {
            &:nth-child(2) ${SkillBar} {
                div {
                    width: 85%;         //HTML
                }
            }
            &:nth-child(3) ${SkillBar} {
                div {
                    width: 85%;         //css
                }
            }
            &:nth-child(4) ${SkillBar} {
                div {
                    width: 70%;         //JS
                }
            }
            &:nth-child(5) ${SkillBar} {
                div {
                    width: 53%;     //node.js
                }
            }
            &:nth-child(6) ${SkillBar} {
                div {
                    width: 53%;     //express
                }
            }
            &:nth-child(7) ${SkillBar} {
                div {
                    width: 66%;     //mongodb
                }
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
                <SkillBar> <div></div> </SkillBar>
            </div>
            <div>
                <h2>HTML</h2>
                <SkillBar> <div></div> </SkillBar>
            </div>
            <div>
                <h2>CSS</h2>
                <SkillBar> <div></div> </SkillBar>
            </div>
            <div>
                <h2>JavaScript</h2>
                <SkillBar> <div></div> </SkillBar>
            </div>
            <div>
                <h2>Node.js</h2>
                <SkillBar> <div></div> </SkillBar>
            </div>
            <div>
                <h2>Express</h2>
                <SkillBar> <div></div> </SkillBar>
            </div>
            <div>
                <h2>MongoDb</h2>
                <SkillBar> <div></div> </SkillBar>
            </div>
            <div>
                <h2>UI/UX</h2>
                <SkillBar> <div></div> </SkillBar>
            </div>
            <div>
                <h2>C++</h2>
                <SkillBar> <div></div> </SkillBar>
            </div>
        </Main>
    </div>
  )
}

export default Skills