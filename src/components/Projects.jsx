import React from 'react'
import styled from 'styled-components';

const Projectsec = styled.div`
        min-height: 80vh;
`;

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

const ProjectContainer = styled.div`
    display: flex;
    margin-right: 6rem;
    margin-left: 6rem;

    @media(max-width: 700px){
        flex-direction: column;
        margin-right: 1.4rem;
        margin-left: 1.4rem;
    }

`;

const Project = styled.div`
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-top: 1rem;
        margin-bottom: 2rem;
        margin-right: 2rem;
        margin-left: 2rem;
        padding: 15px 15px;

        border: 1px solid #202020;
        border-radius: 1rem;

        overflow: hidden;

        &:hover{
            img{
                scale: 1.2;
            }
        }

        @media(max-width: 700px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-right: 0;
            margin-left: 0;
            padding-right: 0;
            padding-left: 0;
        }

        img {
            
            width: 300px;
            border-radius: 1.1rem;
            margin-bottom: 25px;
            
            transition: all 0.5s ease-in;

            @media(max-width: 700px){
                // height: 200px;
                margin:  0;
                width: 250px;
            }
        }
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-size: 1.2rem;
            font-weight: 400;

            @media(max-width: 700px){
                font-size: 1rem;
                margin-top: 10px;
            }

            a {
                text-decoration: none;
                color: #000;
                font-size: 1.4rem;
                background: #0be881;
                padding: 0 13px;
                margin-top: 10px;
                border-radius: 22px;

                &: hover {
                    color:  #0be881;
                    background: #000;
                    border: 1px solid  #0be881;
                }
            }
        }
`;

const Pattern3 = styled.img`
        height: 150px;
        position: absolute;
        left: 87vw;
        
        z-index: -1;

        @media(max-width: 700px){
            height: 150px;
            bottom: 1rem;
            left: 70vw;
        }
`;

function Projects() {
  return (
    <Projectsec id='project'>
        <Heading>PROJECTS</Heading>

        <Pattern3 src="./assets/pattern3.png" alt="" />

        <ProjectContainer>
            <Project data-aos="zoom-in" data-aos-duration="1000" >
                <img src='./assets/project1.jpg' alt='project1' />
                <div>
                    <p>This is a static website made using</p> 
                    <p>HTML CSS BOOTSRAP JAVASCRIPT</p>
                    <a href="https://legalseva.herokuapp.com/" rel="noreferrer" target="_blank" >visit site</a>
                </div>
            </Project>
            <Project data-aos="zoom-in" data-aos-duration="1000" >
                <img src='./assets/project2.jpg' alt='project1' />
                <div>
                    <p>This is a Recipe website made using</p> 
                    <p>React and spoonacular API</p>
                    <a href="https://recipe4you.herokuapp.com/" rel="noreferrer" target="_blank" >visit site</a>
                </div>
            </Project>
        </ProjectContainer>
    </Projectsec>
  )
}

export default Projects