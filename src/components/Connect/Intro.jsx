import React from 'react'

// ------------------- Images -----------------
import poster from './assets/poster.svg'
import logo from './assets/logo.png'
import rnlogo from './assets/reactNative.svg'
import expo from './assets/expo.png'
import firebase from './assets/firebase.png'
import tw from './assets/tw.png'
import node from './assets/nodejs.png'
import hms from './assets/100ms.svg'
// ---------x--------- Images --------x--------


const Intro = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold my-11 flex justify-center items-center'> <img className='w-16 mx-4' src={logo} alt="logo"  /> Connect</h1>
        <img className='md:w-4/5 px-5 md:mx-0' src={poster} alt="poster" />

        <div className='flex flex-col md:flex-row justify-center  md:mx-44 md:my-16 my-8 md:gap-11 gap-5'>
            <div className='md:w-2/3 '>
                <h2 className='text-3xl font-semibold md:text-start text-center'>Meet 'Connect'</h2>
                <p className='font-light text-neutral-500 md:w-2/3 md:text-start text-center mx-5 md:mx-0'>
                    A dynamic social platform for instant group chat and video conferencing. 
                    Create channels, connect with peers of shared interests, and engage in vibrant discussions anytime, anywhere
                </p>
            </div>
            <div>
                <h2 className='md:text-3xl text-xl font-semibold md:text-start text-center'>Technologies used in the app :</h2>
                <div className='grid grid-cols-3 justify-center mt-8 md:ml-0 ml-20 gap-y-11 md:mx-0 mx-5' >
                    <img className='md:w-16 w-8' src={rnlogo} alt="rn" />
                    <img className='md:w-11 w-8' src={expo} alt="rn" />
                    <img className='md:w-11 w-8' src={firebase} alt="rn" />
                    <img className='md:w-16 w-8' src={tw} alt="rn" />
                    <img className='md:w-16 w-8' src={node} alt="rn" />
                    <img className='md:w-18 w-8' src={hms} alt="rn" />
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Intro