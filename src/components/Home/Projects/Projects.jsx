import React, { useRef } from 'react'
import styled from 'styled-components';
import img from './assets/Vector1.svg'
// import arrow from './assets/Arrow1.svg'
import { Link } from 'react-router-dom';

// import { motion, useInView } from "framer-motion"


const Projectsec = styled.div`
        min-height: 80vh;
`;

const data = [
    {
        img: "./assets/chatApp.jpg",
        description: "Cross Platform real time chat application made using React Native Expo and firebase",
        // Download button add
        link: "https://github.com/Huzaifa-code/connect_frontend/releases",
        linkText: "Download APK",
        route: "/connect",
        routeText: "Read More"
    },
    {
        img: "./assets/project4.jpg",
        description: "Freelance Project - Wolves Media website made using React.js and tailwindcss and UI/UX design using Figma",
        link: "https://thejungletechnology.com/",
        linkText: "visit"
    },
    {
        img: "./assets/project3.jpg",
        description: "Freelance Project - Enticing Empire website made using React.js and tailwindcss and UI/UX design using Figma",
        link: "https://www.enticingempire.com/",
        linkText: "visit"

    },
    {
        img: "./assets/project2.jpg",
        description: "This is a Recipe website made using React and spoonacular API",
        link: "https://recipe-app-ashen-seven.vercel.app",
        linkText: "visit"
    },

]


function Projects() {


    // Framer Animation
    const ref = useRef(null);
    // const isInView = useInView(ref); // same isInView for left and right element

  return (
    <Projectsec id='project' className="flex flex-col justify-center items-center">
        <img className='md:h-[4rem] h-[3.5rem] z-10 relative top-[5rem]' src={img} alt="" />
        <h1 className='text-5xl md:text-6xl my-6 font-bold text-center'>LESS TALK.</h1>
        <h1 className='text-3xl md:text-5xl font-bold text-center'>MORE DESIGN</h1>
        <h1 className='text-3xl md:text-5xl font-bold text-center'>AND DEVELOPMENT</h1>
        <p className='my-6 mx-4 md:mx-0 text-xl text-center text-[#464646]'>It's time to see some work. Here are some projects that I have done.</p>

        <div ref={ref}
            className='flex flex-col justify-center gap-6 md:grid md:grid-cols-3 md:gap-20 md:py-3 py-8 md:mx-auto mx-5 max-w-5xl 2xl:max-w-7xl'

        >  
            {data.map( (d) => {
                    return (
                        <div  
                            className='flex flex-col items-center justify-between h-full shadow-lg rounded-2xl'  
                        >
                            <img   
                                className='md:w-full  rounded-2xl' src={d.img} alt='project5' 
                                ref={ref}
                            />
                         
                            <div className='mx-4  my-4'>
                                <p className='mb-6 my-3 text-lg text-neutral-700 md:text-xl text-justify'>{d.description}</p> 
                                <div className='flex md:flex-row flex-col w-fit gap-5'>
                                    <a href={d?.link} rel="noreferrer" target="_blank" className="rounded-md relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
                                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                        <span className="relative text-sm font-medium">{d.linkText}</span>
                                    </a>
                                    {d.route &&
                                        // <Link to={d?.route} className='px-6  py-3 text-lg bg-[#000000] hover:bg-neutral-800 rounded-xl text-white text-center ' >{d.routeText}</Link>
                                        <Link to={d?.route} className="rounded-md relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-700 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-700 to-purple-600 border-purple-800 text-white">
                                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                            <span className="relative text-sm font-medium">{d.routeText}</span>
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    )
            })}           
        </div>
    </Projectsec>
  )
}

export default Projects