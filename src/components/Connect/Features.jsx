import React from 'react'

import login from './assets/login.jpg'
import signup from './assets/register.jpg'
import chat1 from './assets/chat.jpg'
import chat2 from './assets/chatSingle.jpg'
import chnl from './assets/createChat.jpg'
import video from './assets/video.jpg'
import MangaText from '../Blog/MangaText'
import { FaGithub } from 'react-icons/fa'

const data = [
    {
        img1: login,
        heading: "Login and Signup",
        para1: "Experience seamless access with our login options powered by Firebase.",
        para2: "Sign up or log in effortlessly using your email and password, ensuring secure and convenient authentication.",
        para3: "We also offer the convenience of logging in with Google, allowing you to access your account swiftly and securely. With Expo React Native and React-Native-Google-Signin integration, our login process is streamlined for a smooth user experience, ensuring you can effortlessly connect and engage with our platform.",
        img2: signup
    },
    {
        img1: chat1,
        heading: "Real-Time Chat & Channels",
        para1: "Dive into dynamic conversations with our chat feature, powered by Firestore. Engage in real-time discussions, create channels, and connect with peers effortlessly.",
        para2: "With Firestore as our database solution, experience seamless message delivery and reliable data storage.",
        para3: "Whether you're brainstorming ideas, sharing insights, or collaborating on projects, our chat feature ensures smooth communication and fosters meaningful connections.",
        img2: chat2
    },
    {
        img1: chnl,
        heading: "Video Conferencing",
        para1: "Elevate your communication experience with our integrated video conferencing feature, powered by the 100ms SDK.",
        para2: "Seamlessly join video calls within specific channels, bringing face-to-face interaction to your discussions. With the 100ms SDK, enjoy high-quality video and audio communication, ensuring clear and immersive conversations.",
        para3: "Whether you're hosting virtual meetings, collaborating on projects, or connecting with peers, our video conferencing feature enhances collaboration and fosters productive interactions.",
        img2: video
    },
]

const Features = () => {
  const getImg = (img) => img?.src || img;

  return (
    <div className='flex flex-col justify-center items-center max-w-7xl mx-auto px-4 py-8 font-sans mb-16'>
        <div className="text-center mb-10">
          <div className="mb-2">
            <MangaText text="「機能」" translation="Kinou (Features)" className="text-xl md:text-2xl text-red-600 dark:text-yellow-400 font-extrabold tracking-wider" />
          </div>
          <h2 className='text-3xl md:text-5xl font-black uppercase text-black dark:text-white'>
            App Showcase & Features
          </h2>
        </div>

        <div className="flex flex-col gap-12 w-full max-w-5xl">
            {data.map((d, index) => {
                return (
                    <div 
                      key={index} 
                      className='bg-white dark:bg-[#1E112C] text-black dark:text-white brutalist-border brutalist-shadow p-6 md:p-8 flex flex-col xl:flex-row gap-8 items-center relative overflow-hidden'
                    >
                        <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

                        {/* Image 1 */}
                        <div className="w-full xl:w-1/3 flex justify-center relative z-10">
                          <img className='w-full max-w-[260px] h-auto rounded-none brutalist-border brutalist-shadow-sm border-2 border-black dark:border-white' src={getImg(d.img1)} alt={d.heading} />
                        </div>

                        {/* Details */}
                        <div className="w-full xl:w-1/3 relative z-10 flex flex-col justify-center text-center xl:text-left">
                            <span className="inline-block bg-yellow-400 text-black px-3 py-1 font-mono text-xs font-black uppercase tracking-wider brutalist-border w-max mx-auto xl:mx-0 mb-3">
                              FEATURE {index + 1}
                            </span>
                            <h3 className='text-xl md:text-2xl font-black uppercase mb-4 text-black dark:text-white'>{d.heading}</h3>
                            <p className='text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-medium leading-relaxed mb-3'>{d.para1}</p>
                            <p className='text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-medium leading-relaxed mb-3'>{d.para2}</p>
                            <p className='text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-medium leading-relaxed'>{d.para3}</p>
                        </div>
                        
                        {/* Image 2 */}
                        <div className="w-full xl:w-1/3 flex justify-center relative z-10">
                          <img className='w-full max-w-[260px] h-auto rounded-none brutalist-border brutalist-shadow-sm border-2 border-black dark:border-white' src={getImg(d.img2)} alt={d.heading} />
                        </div>
                    </div>
                )
            })}
        </div>

        {/* GitHub Source Code Button */}
        <div className='mt-12 text-center'>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-4 bg-white dark:bg-[#1E112C] p-6 brutalist-border brutalist-shadow max-w-md mx-auto'>
                <p className='text-lg font-black uppercase text-black dark:text-white'>Source Code:</p>
               
                <a 
                  className='bg-yellow-400 text-black font-extrabold uppercase px-6 py-3 brutalist-border brutalist-shadow-sm hover:bg-yellow-300 hover:-translate-y-1 transition-all flex items-center gap-2 text-sm'  
                  href="https://github.com/Huzaifa-code/connect_frontend" 
                  target='_blank' 
                  rel="noreferrer"
                >
                  <FaGithub size={18} /> GitHub Repository
                </a> 
            </div>
        </div>
    </div>
  )
}

export default Features