import React from 'react'

import login from './assets/login.jpg'
import signup from './assets/register.jpg'
import chat1 from './assets/chat.jpg'
import chat2 from './assets/chatSingle.jpg'
import chnl from './assets/createChat.jpg'
import video from './assets/video.jpg'


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
        heading: "Chat",
        para1: "Dive into dynamic conversations with our chat feature, powered by Firestore. Engage in real-time discussions, create channels, and connect with peers effortlessly. ",
        para2: "With Firestore as our database solution, experience seamless message delivery and reliable data storage.",
        para3: "Whether you're brainstorming ideas, sharing insights, or collaborating on projects, our chat feature ensures smooth communication and fosters meaningful connections",
        img2: chat2
    },
    {
        img1: chnl,
        heading: "Create Channel and video call on that channel",
        para1: "Elevate your communication experience with our integrated video conferencing feature, powered by the 100ms SDK. ",
        para2: "Seamlessly join video calls within specific channels, bringing face-to-face interaction to your discussions. With the 100ms SDK, enjoy high-quality video and audio communication, ensuring clear and immersive conversations.",
        para3: "Whether you're hosting virtual meetings, collaborating on projects, or connecting with peers, our video conferencing feature enhances collaboration and fosters productive interactions",
        img2: video
    },
]


const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center my-16'>
        <h1 className='text-4xl font-bold' >More about the app</h1>
        {
            data.map( (d, index) => {
                return (
                    <div key={index} className='flex md:flex-row flex-col md:justify-between gap-11 w-4/5 my-24'>
                        <img className='w-[24rem] rounded-3xl' src={d.img1} alt="img1" />
                        <div>
                            <h1 className='text-3xl font-bold'>{d.heading}</h1>
                            <p className='mt-11 text-neutral-500 text-lg '>{d.para1}</p>
                            <p className='mt-11 text-neutral-500 text-lg '>{d.para2}</p>
                            <p className='mt-11 text-neutral-500 text-lg '>{d.para3}</p>
                        </div>
                        
                        <img className='w-[24rem] rounded-3xl'  src={d.img2} alt="img1" />
                    </div>
                )
            })
        }

        <div>
            <div className='flex  justify-center items-center'>
                <p className='text-2xl font-bold text-neutral-700'>Code :</p>
               
                <a className='bg-black text-neutral-100 mx-3 px-5 py-2 rounded-xl hover:bg-neutral-700   '  href="https://github.com/Huzaifa-code/connect_frontend" target='_blank' rel="noreferrer">Github</a> 
            </div>
        </div>

    </div>
  )
}

export default Features