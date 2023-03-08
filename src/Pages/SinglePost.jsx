import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"
import NavBarBlog from '../components/NavBarBlog/NavBarBlog'

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
          <h1 className='font-bold text-4xl md:text-5xl pt-5 mb-10 text-center ' >{SinglePost.title}</h1>
          {SinglePost.mainImage && SinglePost.mainImage.asset && (
             <img className='blog_image rounded-lg mx-auto' src={SinglePost.mainImage.asset.url} alt={SinglePost.title} title={SinglePost.title} />
          )} 
          <p className='text-right my-9'>Author: Huzaifa Qureshi</p>

          <div className='block_content'>
            <BlockContent className='text-xl' blocks={SinglePost.body} projectId="os5ae1ct" dataset="production" ></BlockContent>
          </div>

          <button className='mt-10 mb-10'>
            <Link to='/blog' className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold'>Read More Articles</Link>
          </button>
        </section>
      }
    </div>
  )
}

export default SinglePost