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
        link: "https://drive.google.com/file/d/11Ahin8kpsLina0rv7iuZa_jkbgB-g_t4/view?usp=sharing",
        linkText: "Download APK",
        route: "/connect",
        routeText: "Read More"
    },
    {
        img: "./assets/project4.jpg",
        description: "Freelance Project - Wolves Media website made using React.js and tailwindcss and UI/UX design using Figma",
        link: "https://www.wolvesmedia.in/",
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
        link: "https://recipe-app-ashen-seven.vercel.app/cuisine/American",
        linkText: "visit"
    },

]


function Projects() {


    // Framer Animation
    const ref = useRef(null);
    // const isInView = useInView(ref); // same isInView for left and right element

  return (
    <Projectsec id='project'>
        <img className='md:h-[4rem] h-[3.5rem] z-10 ml-[16%] md:ml-[37%] relative top-[5rem]' src={img} alt="" />
        <h1 className='text-5xl md:text-6xl my-6 font-bold text-center'>LESS TALK.</h1>
        <h1 className='text-3xl md:text-5xl font-bold text-center'>MORE DESIGN</h1>
        <h1 className='text-3xl md:text-5xl font-bold text-center'>AND DEVELOPMENT</h1>
        <p className='my-6 mx-4 md:mx-0 text-xl text-center text-[#464646]'>It's time to see some work. Here are some projects that I have done.</p>

        <div ref={ref}>
            
            {
                data.map( (d) => {
                    return (
                        <div  className='flex flex-col md:flex-row justify-end items-center mx-11 mt-9 mb-16'  >
                            
                            <img   
                                className='md:w-[35vw] w-[80vw] rounded-lg' src={d.img} alt='project5' 
                                ref={ref}
                            />
                            
                            <div>
                                <div className=''>
                                    <p className='md:mx-24 mb-6 my-3  text-xl md:text-3xl text-justify'>{d.description}</p> 
                                    <a className='group md:ml-24  px-6  py-3 text-lg bg-[#731FFC] hover:bg-[#9e61ff] rounded-md text-white' href={d.link} rel="noreferrer" target="_blank" > {d.linkText} 
                                        {/* <img className=' w-[1.7rem] ml-1 hidden group-hover:inline' src={arrow} alt="" />   */}
                                    </a>
                                    {
                                        d.route &&
                                        <Link to={d?.route} className='px-6  py-3 text-lg bg-[#000000] hover:bg-neutral-800 rounded-md text-white ml-8' >{d.routeText}</Link>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                } )
            }
            
           
           
           
        </div>
    </Projectsec>
  )
}

export default Projects