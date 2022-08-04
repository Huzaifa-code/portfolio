import React from 'react'
import styled from 'styled-components';

const Projectsec = styled.div`
        min-height: 80vh;
`;

const Heading = styled.h1`
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

const Project = styled.div`
        color: #fff;
        display: flex;
        margin-top: 1rem;
        margin-bottom: 2rem;

        @media(max-width: 700px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        img {
            height: 275px;
            margin-left: 4rem;
            border-radius: 2rem;

            @media(max-width: 700px){
                height: 200px;
                margin:  0;
                width: 300px;
            }
        }
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-size: 1.7rem;
            font-weight: 400;

            @media(max-width: 700px){
                font-size: 1.3rem;
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
        height: 200px;
        position: relative;
        left: 80vw;
        bottom: 10rem;
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

        <Project>
            <img src='./assets/project1.jpg' alt='project1' />
            <div>
                <p>This is a static website made using</p> 
                <p>HTML CSS BOOTSRAP JAVASCRIPT</p>
                <a href="https://legalseva.herokuapp.com/" rel="noreferrer" target="_blank" >visit site</a>
            </div>
        </Project>
        <Project>
            <img src='./assets/project2.jpg' alt='project1' />
            <div>
                <p>This is a Recipe website made using</p> 
                <p>React and spoon API</p>
                <a href="https://recipe4you.herokuapp.com/" rel="noreferrer" target="_blank" >visit site</a>
            </div>
        </Project>
    </Projectsec>
  )
}

export default Projects