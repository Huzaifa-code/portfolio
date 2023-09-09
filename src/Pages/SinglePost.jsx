import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"
import NavBarBlog from '../components/NavBarBlog/NavBarBlog'

import {AiFillInstagram, AiFillLinkedin, AiFillGithub,AiOutlineTwitter} from 'react-icons/ai'
import { BsMedium } from "react-icons/bs";

// For top scroll bar animated
import { motion, useScroll } from "framer-motion"



const SinglePost = () => {

  const [SinglePost, setSinglePost]  = useState([])
  const [isLoading , setIsLoading] = useState(true)
  const { slug } = useParams()


  const { scrollYProgress } = useScroll();
   

  useEffect(() => {
    client.fetch(
      `
        *[slug.current == "${slug}"] {
          title,
          body,
          mainImage {
            asset -> {
              _id,
              url,
            },
            alt
          }
        }
      `
    ).then((data) => setSinglePost(data[0]))
    setIsLoading(false);
  }, [slug])

  return (
    <div className='bg-white'>
      <NavBarBlog/>
      <motion.div className='fixed top-0 left-0 right-0 h-[10px] bg-[#731FFC] origin-top-left' style={{ scaleX: scrollYProgress }} />  
      {isLoading ? (
          
            <h1 className='uppercase font-bold text-4xl tracking-wide nb-5 md:text-6xl flex items-center justify-center h-screen'>Loading...</h1> 
          
        ): 
        <section className='px-5 xl:max-w-6xl xl:mx-auto pb-10'>
          
          <motion.div 
            style={{ y: 30 }} animate={{ y: 0 }}
            transition={{duration: 0.5, delay: 0.1}}
          >
            <h1 
              style={{
                fontFamily: "'Sriracha', cursive"
              }} 
              className="text-4xl md:text-6xl pt-5 mb-10 text-center " 
            >
              {SinglePost.title}
            </h1>
          </motion.div>
          
          
          {SinglePost.mainImage && SinglePost.mainImage.asset && (
             <motion.div 
              style={{ x: -200 }} animate={{ x: 0 }}
              transition={{duration: 0.6}}
             >
              <img className='blog_image rounded-lg mx-auto' src={SinglePost.mainImage.asset.url} alt={SinglePost.title} title={SinglePost.title} />
             </motion.div>
          )} 
          
          <p className='text-right my-9'>Author: Huzaifa Qureshi</p>

          <div className='block_content'>
            <BlockContent className='text-xl md:mx-28' blocks={SinglePost.body} projectId="os5ae1ct" dataset="production" ></BlockContent>
          </div>

          <div className='flex flex-col justify-center items-center md:my-11'>
            <h3 className='my-4 text-lg font-semibold text-zinc-700'>Follow me on</h3>
            <div className='flex justify-center items-center gap-6'>
              <a  target="_blank"  rel="noreferrer" href="https://www.instagram.com/developer_huzaifa" className="text-5xl relative md:hover:bottom-2 md:hover:scale-125"> <AiFillInstagram/> </a>
              <a  target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/huzaifa-qureshi-174173179" className="text-5xl relative md:hover:bottom-2 md:hover:scale-125"> <AiFillLinkedin/> </a>
              <a  target="_blank"  rel="noreferrer" href="https://github.com/Huzaifa-code" className="text-5xl relative md:hover:bottom-2 md:hover:scale-125"> <AiFillGithub/> </a>
              <a  target="_blank"  rel="noreferrer" href="https://twitter.com/Huzaifa92912561" className="text-5xl relative md:hover:bottom-2 md:hover:scale-125"> <AiOutlineTwitter/> </a> 
              <a  target="_blank"  rel="noreferrer" href="https://medium.com/@huzaifaqureshi037" className="text-5xl relative md:hover:bottom-2 md:hover:scale-125"> <BsMedium/> </a> 
            </div>
          </div>

          <button className='mt-10 mb-10 block mx-auto'>
            <Link to='/blog' className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold'>Read More Articles</Link>
          </button>
        </section>
      }
    </div>
  )
}

export default SinglePost