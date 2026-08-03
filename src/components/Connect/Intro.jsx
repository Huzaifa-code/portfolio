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
import MangaText from '../Blog/MangaText'
// ---------x--------- Images --------x--------

const Intro = () => {
  const getImg = (img) => img?.src || img;

  return (
    <div className='flex flex-col justify-center items-center max-w-7xl mx-auto px-4 py-8 font-sans'>
      {/* Title */}
      <div className="text-center my-6">
        <div className="mb-2">
          <MangaText text="「接続」" translation="Setsuzoku (Connect App)" className="text-xl md:text-2xl text-red-600 dark:text-yellow-400 font-extrabold tracking-wider" />
        </div>
        <h1 className='text-4xl md:text-6xl font-black uppercase text-black dark:text-white flex items-center justify-center gap-4 flex-wrap'>
          <div className="bg-yellow-400 p-2 brutalist-border brutalist-shadow-sm -rotate-3 inline-block">
            <img className='w-10 h-10 md:w-14 md:h-14 object-contain' src={getImg(logo)} alt="Connect Logo" />
          </div>
          <span>Connect</span>
        </h1>
      </div>

      {/* Poster */}
      <div className="w-full flex justify-center my-6">
        <div className="bg-white dark:bg-[#1E112C] p-3 brutalist-border brutalist-shadow max-w-5xl w-full">
          <img className='w-full h-auto object-cover border-2 border-black dark:border-white' src={getImg(poster)} alt="Connect Poster" />
        </div>
      </div>

      {/* Intro Description & Tech Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 w-full max-w-5xl bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow p-6 md:p-10 relative overflow-hidden'>
        <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

        <div className='lg:col-span-7 relative z-10 flex flex-col justify-center'>
          <span className="inline-block bg-yellow-400 text-black px-3 py-1 font-mono text-xs font-black uppercase tracking-wider brutalist-border w-max mb-4">
            REALTIME GROUP CHAT & VIDEO
          </span>
          <h2 className='text-2xl md:text-4xl font-black uppercase text-black dark:text-white mb-4'>
            Meet 'Connect'
          </h2>
          <p className='text-neutral-700 dark:text-neutral-300 text-base md:text-lg font-medium leading-relaxed'>
            A dynamic social platform for instant group chat and video conferencing. 
            Create channels, connect with peers of shared interests, and engage in vibrant discussions anytime, anywhere.
          </p>
        </div>

        <div className='lg:col-span-5 relative z-10 flex flex-col justify-center bg-neutral-100 dark:bg-neutral-900 p-6 brutalist-border'>
          <h3 className='text-lg md:text-xl font-extrabold uppercase text-black dark:text-white text-center mb-6 border-b-2 border-black dark:border-white pb-2'>
            Technologies Used
          </h3>
          <div className='grid grid-cols-3 gap-4 items-center justify-items-center'>
            <div className="p-2 bg-white dark:bg-black brutalist-border brutalist-shadow-sm w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
              <img className='max-w-full max-h-full object-contain' src={getImg(rnlogo)} alt="React Native" title="React Native" />
            </div>
            <div className="p-2 bg-white dark:bg-black brutalist-border brutalist-shadow-sm w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
              <img className='max-w-full max-h-full object-contain' src={getImg(expo)} alt="Expo" title="Expo" />
            </div>
            <div className="p-2 bg-white dark:bg-black brutalist-border brutalist-shadow-sm w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
              <img className='max-w-full max-h-full object-contain' src={getImg(firebase)} alt="Firebase" title="Firebase" />
            </div>
            <div className="p-2 bg-white dark:bg-black brutalist-border brutalist-shadow-sm w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
              <img className='max-w-full max-h-full object-contain' src={getImg(tw)} alt="Tailwind" title="Tailwind CSS" />
            </div>
            <div className="p-2 bg-white dark:bg-black brutalist-border brutalist-shadow-sm w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
              <img className='max-w-full max-h-full object-contain' src={getImg(node)} alt="Node.js" title="Node.js" />
            </div>
            <div className="p-2 bg-white dark:bg-black brutalist-border brutalist-shadow-sm w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
              <img className='max-w-full max-h-full object-contain' src={getImg(hms)} alt="100ms" title="100ms Video SDK" />
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Intro