import React from 'react'
import styled from 'styled-components';
import img from './assets/Vector1.svg'
import arrow from './assets/Arrow1.svg'

const Projectsec = styled.div`
        min-height: 80vh;
`;


function Projects() {
  return (
    <Projectsec id='project'>
        <img className='md:h-[4rem] h-[3.5rem] z-10 ml-[16%] md:ml-[37%] relative top-[5rem]' src={img} alt="" />
        <h1 className='text-5xl md:text-6xl my-6 font-bold text-center'>LESS TALK.</h1>
        <h1 className='text-3xl md:text-5xl font-bold text-center'>MORE DESIGN</h1>
        <h1 className='text-3xl md:text-5xl font-bold text-center'>AND DEVELOPMENT</h1>
        <p className='my-6 mx-4 md:mx-0 text-xl text-center text-[#464646]'>It's time to see some work. Here are some projects that I have done.</p>

        <div>
            <div className='flex flex-col md:flex-row justify-center items-center mx-11 mt-9 mb-16'  >
                <img className='md:w-[35vw] w-[80vw] rounded-lg' src='./assets/project4.jpg' alt='project4' />
                <div className=''>
                    <p className='md:mx-24 mb-6 my-3 md:my-0 text-xl md:text-3xl text-justify'>Freelance Project - Wolves Media website made using React.js and tailwindcss and UI/UX design using Figma</p> 
                    <a className='group md:ml-24 px-6 w- py-3 text-lg bg-[#731FFC] rounded-md text-white' href="https://www.wolvesmedia.in/" rel="noreferrer" target="_blank" >visit site <img className=' w-[1.7rem] ml-1 hidden group-hover:inline' src={arrow} alt="" />  </a>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mx-11 mt-9 mb-16' >
                <img className='md:w-[35vw] w-[80vw] rounded-lg' src='./assets/project3.jpg' alt='project3' />
                <div className='my-2'>
                    <p className='md:mx-24 mb-6 my-3 md:my-0 text-xl md:text-3xl text-justify'>Freelance Project - Enticing Empire website made using React.js and tailwindcss and UI/UX design using Figma</p> 
                    <a className='group md:ml-24 px-6 w- py-3 text-lg bg-[#731FFC] rounded-md text-white' href="https://www.enticingempire.com/" rel="noreferrer" target="_blank" >visit site <img className=' w-[1.7rem] ml-1 hidden group-hover:inline' src={arrow} alt="" />  </a>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mx-11 mt-9 mb-16'>
                <img className='md:w-[35vw] w-[80vw] rounded-lg' src='./assets/project2.jpg' alt='project1' />
                <div className='my-2'>
                    <p className='md:mx-24 mb-6 my-3 md:my-0 text-xl md:text-3xl text-justify'>This is a Recipe website made using React and spoonacular API</p> 
                    <a className='group md:ml-24 px-6 w- py-3 text-lg bg-[#731FFC] rounded-md text-white' href="https://recipe-app-ashen-seven.vercel.app/cuisine/American" rel="noreferrer" target="_blank" >visit site <img className=' w-[1.7rem] ml-1 hidden group-hover:inline' src={arrow} alt="" />  </a>
                </div>
            </div>
            {/* <div className='flex justify-center items-center mx-11 mt-9 mb-16'  >
                <img className='w-[35vw] rounded-lg' src='./assets/project1.jpg' alt='project1' />
                <div className='my-2'>
                    <p className='mx-3 md:mx-24 mb-6 text-3xl text-justify'>This is a static website made using HTML CSS BOOTSRAP JAVASCRIPT</p> 
                    <a className='group md:ml-24 px-6 w- py-3 text-lg bg-[#731FFC] rounded-md text-white' href="/" rel="noreferrer" target="_blank" >visit site <img className=' w-[1.7rem] ml-1 hidden group-hover:inline' src={arrow} alt="" />  </a>
                </div>
            </div> */}
           
        </div>
    </Projectsec>
  )
}

export default Projects