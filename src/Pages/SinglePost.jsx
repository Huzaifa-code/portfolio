import React from 'react'
import { useState } from 'react'
import BlockContent from "@sanity/block-content-to-react"
import {AiFillInstagram, AiFillLinkedin, AiFillGithub, AiOutlineTwitter} from 'react-icons/ai'
import { BsMedium } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import { motion, useScroll } from "framer-motion"
import { NavBarBlog, Comments, ClapButton, YouTubeEmbed, MangaText, CodeBlock, ShareModal, BlogFooter } from '../components/Blog'
import Loader from '../components/Loader/Loader'
import { UserProvider } from '../context/userContext'

// post & slug are passed as props from the Astro page (SSR-fetched)
const SinglePost = ({ post, slug }) => {

  const { scrollYProgress } = useScroll();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // For code Block
  const serializers = {
    types: {
      code: CodeBlock,
      youtube: ({ node }) => <YouTubeEmbed url={node.url} />,
    },
  };

  if (!post) {
    return (
      <div className='bg-[#f3f0e8] dark:bg-neutral-900 min-h-screen flex items-center justify-center'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='bg-[#f3f0e8] dark:bg-neutral-900 min-h-screen text-black dark:text-[#EBD3F8] pb-12 font-sans relative overflow-x-hidden'>
      <NavBarBlog/>
      <motion.div 
        className='fixed top-0 left-0 right-0 h-[8px] bg-yellow-400 dark:bg-yellow-400 z-30 origin-top-left border-b-2 border-black dark:border-black' 
        style={{ scaleX: scrollYProgress }} 
      />  

      {/* Decorative floating side Japanese texts for desktop */}
      <div className="hidden lg:block fixed left-6 top-1/4 select-none opacity-30 dark:opacity-40 hover:opacity-100 transition-opacity duration-200 z-10">
        <MangaText 
          text="カタカタ…" 
          translation="Katakata... (Typing...)" 
          className="text-7xl font-extrabold text-black dark:text-white" 
          style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
          tooltipPosition="right"
        />
      </div>
      <div className="hidden lg:block fixed right-6 top-1/3 select-none opacity-30 dark:opacity-40 hover:opacity-100 transition-opacity duration-200 z-10">
        <MangaText 
          text="なるほど！" 
          translation="Naruhodo! (Aha! / I see!)" 
          className="text-7xl font-extrabold text-red-600 dark:text-yellow-400" 
          style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
          tooltipPosition="left"
        />
      </div>

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="relative bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow p-6 md:p-12 overflow-hidden">
          {/* Halftone pattern overlay */}
          <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

          {/* Decorative Comic Badges */}
          <div className="absolute top-0 left-0 bg-black text-white dark:bg-[#EBD3F8] dark:text-black px-3 py-1 font-mono text-xs uppercase tracking-widest border-r-4 border-b-4 border-black dark:border-black z-20">
            PAGE. 01 / STORY
          </div>

          <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 font-mono text-xs uppercase tracking-widest border-l-4 border-b-4 border-black z-20 font-bold">
            VOL. 01
          </div>

          <motion.div 
            style={{ y: 30 }} animate={{ y: 0 }}
            transition={{duration: 0.5, delay: 0.1}}
          >
            <div className="text-center pt-8 pb-4 mb-8 border-b-4 border-dashed border-black dark:border-[#EBD3F8] relative">
              <div className="mb-2">
                <MangaText text="「特集記事」" translation="Special Feature Article" className="text-lg md:text-xl text-red-600 dark:text-yellow-400 tracking-wider font-extrabold" />
              </div>
              <h1 
                style={{
                  fontFamily: "'Sriracha', cursive"
                }} 
                className="text-3xl md:text-5xl font-black text-black dark:text-white uppercase leading-tight tracking-tight max-w-2xl mx-auto" 
              >
                {post.title}
              </h1>
            </div>
          </motion.div>
          
          {post && post.mainImage && post.mainImage.asset && (
            <div className="my-8">
              <motion.div 
                style={{ x: -200 }} animate={{ x: 0 }}
                transition={{duration: 0.6}}
                className="brutalist-border brutalist-shadow relative overflow-hidden bg-white dark:bg-black group"
              >
                <div className="absolute inset-0 halftone-bg opacity-0 group-hover:opacity-20 pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-opacity duration-300"></div>
                <img className='w-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500 max-h-[500px]' src={post.mainImage.asset.url} alt={post.title} title={post.title} />
              </motion.div>

              <div className='flex justify-between items-center mt-6 bg-yellow-400 text-black brutalist-border brutalist-shadow-sm px-4 py-2 flex-wrap gap-4'>
                <div className="flex items-center gap-2">
                  <ClapButton initialClaps={post.claps} slug={slug}  />
                  <MangaText text="「拍手！」" translation="Hakushu! (Applause/Claps)" className="text-sm font-bold text-red-600" />
                </div>
                <p className='font-mono font-bold uppercase tracking-wider text-sm'>Author: Huzaifa Qureshi</p>
              </div>
            </div>
          )} 

          <div className='block_content my-10 text-neutral-800 dark:text-neutral-300'>
            <BlockContent className='text-2xl' blocks={post.body} projectId="os5ae1ct" dataset="production" serializers={serializers} />
          </div>

          <div className="flex justify-center my-8">
            <button 
              onClick={() => setIsModalOpen(true)} 
              className='py-3 px-8 brutalist-border brutalist-shadow-sm text-black bg-yellow-400 hover:bg-yellow-300 active:translate-y-1 active:translate-x-1 hover:shadow-none transition-all duration-100 flex justify-center items-center gap-3 font-bold uppercase tracking-wider'
            >
              <LiaTelegram className='text-2xl'/>
              <span>Share</span>
              <MangaText text="「共有」" translation="Kyōyū (Share)" className="ml-2 text-red-600 font-extrabold text-sm" />
            </button>
          </div>

          {/* Follow Me Section */}
          <div className='my-12 p-6 brutalist-border brutalist-shadow-sm bg-[#f3f0e8] dark:bg-[#2E073F] text-black dark:text-[#EBD3F8] relative overflow-hidden'>
            <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Anime Character Panel */}
              <div className="md:col-span-4 flex justify-center">
                <div className="brutalist-border brutalist-shadow-sm bg-white dark:bg-black p-1.5 rotate-1 hover:rotate-0 transition-transform duration-300 max-w-[180px] w-full">
                  <img 
                    src="/assets/characters/computerAnimeCharacter.gif" 
                    alt="Coding Anime Character" 
                    className="w-full h-auto object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Right Column: Social Links */}
              <div className="md:col-span-8 flex flex-col items-center md:items-start w-full">
                <div className="mb-2">
                  <MangaText text="「仲間」" translation="Nakama (Comrades / Friends)" className="text-2xl text-red-600 dark:text-yellow-400 font-extrabold" />
                </div>
                <h3 className='mb-6 text-xl font-bold uppercase tracking-wider font-sans'>Follow me on</h3>
                <div className='flex justify-center md:justify-start items-center gap-6 flex-wrap w-full'>
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/developer_huzaifa" className="text-5xl text-black dark:text-[#EBD3F8] hover:text-red-500 dark:hover:text-yellow-400 transition-colors p-2 brutalist-border brutalist-shadow-sm bg-white dark:bg-[#1E112C] hover:-translate-y-1 active:translate-y-0 duration-150"> <AiFillInstagram/> </a>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/huzaifa-qureshi-174173179" className="text-5xl text-black dark:text-[#EBD3F8] hover:text-blue-600 dark:hover:text-yellow-400 transition-colors p-2 brutalist-border brutalist-shadow-sm bg-white dark:bg-[#1E112C] hover:-translate-y-1 active:translate-y-0 duration-150"> <AiFillLinkedin/> </a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Huzaifa-code" className="text-5xl text-black dark:text-[#EBD3F8] hover:text-gray-700 dark:hover:text-yellow-400 transition-colors p-2 brutalist-border brutalist-shadow-sm bg-white dark:bg-[#1E112C] hover:-translate-y-1 active:translate-y-0 duration-150"> <AiFillGithub/> </a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/Huzaifa92912561" className="text-5xl text-black dark:text-[#EBD3F8] hover:text-sky-500 dark:hover:text-yellow-400 transition-colors p-2 brutalist-border brutalist-shadow-sm bg-white dark:bg-[#1E112C] hover:-translate-y-1 active:translate-y-0 duration-150"> <AiOutlineTwitter/> </a> 
                  <a target="_blank" rel="noreferrer" href="https://medium.com/@huzaifaqureshi037" className="text-5xl text-black dark:text-[#EBD3F8] hover:text-black dark:hover:text-yellow-400 transition-colors p-2 brutalist-border brutalist-shadow-sm bg-white dark:bg-[#1E112C] hover:-translate-y-1 active:translate-y-0 duration-150"> <BsMedium/> </a> 
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <MangaText text="「討論」" translation="Tōron (Discussion / Comments)" className="text-3xl text-red-600 dark:text-yellow-400 font-extrabold" />
              <h2 className="text-2xl font-bold uppercase tracking-wider font-sans m-0 border-none before:hidden after:hidden">Comments</h2>
            </div>
            <div className="brutalist-border brutalist-shadow p-6 bg-white dark:bg-[#1E112C] relative overflow-hidden">
              <div className="absolute inset-0 halftone-bg opacity-5 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
              <div className="relative z-10">
                <Comments postSlug={slug}/>
              </div>
            </div>
          </div>

          {/* Read More Section with "To Be Continued..." */}
          <div className="flex flex-col items-center gap-4 mt-12 mb-8 border-t-4 border-dashed border-black dark:border-[#EBD3F8] pt-8">
            <div className="w-full max-w-lg brutalist-border brutalist-shadow-sm mb-4 overflow-hidden h-[160px] bg-white dark:bg-black p-1 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="/assets/streeFighter/bg-8.gif" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500" 
                alt="Arcade Ocean" 
              />
            </div>
            <div className="flex items-center gap-2">
              <MangaText text="「つづく」" translation="Tsuduku (To Be Continued...)" className="text-4xl text-black dark:text-white font-extrabold tracking-widest hover:text-yellow-400" />
            </div>
            <a 
              href='/blog' 
              className='py-3 px-8 brutalist-border brutalist-shadow text-black dark:text-black bg-white dark:bg-yellow-400 hover:bg-yellow-400 dark:hover:bg-white hover:-translate-y-1 active:translate-y-1 transition-all duration-150 uppercase tracking-widest font-black text-lg block text-center'
            >
              Read More Articles
            </a>
          </div>

          <div className='opacity-0 pointer-events-none h-0 w-0 overflow-hidden'>
            <p>#webdevelopment #coding #programming #react #node #mern #development #javascript </p>
          </div>

        </div>
      </main>

      {/* Share Modal */}
      <ShareModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        currentUrl={currentUrl} 
      />

      <BlogFooter />
    </div>
  )
}

const SinglePostWrapper = (props) => (
  <UserProvider>
    <SinglePost {...props} />
  </UserProvider>
)

export default SinglePostWrapper