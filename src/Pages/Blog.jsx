import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from '../client'
import NavBarBlog from '../components/NavBarBlog/NavBarBlog';
import { motion } from 'framer-motion';


const Blog = () => {

  const [posts, setPosts] = useState([]);



  useEffect(() => {

    client.fetch(
        `*[_type == "post"] {
            title,
            slug,
            body,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt
            }
        }`
    ).then((data) => setPosts(data)).catch(
        console.error()
    )
  }, [])

 
  return (
    <div className='bg-white' >
        <NavBarBlog/>
        <section className='px-10'>
          <motion.div 
            style={{ y: 30 }} animate={{ y: 0 }}
            transition={{duration: 0.5}}
          >
            <h1 className='font-bold text-4xl md:text-5xl pt-5 mb-10 text-center' >Blogs</h1>
          </motion.div>

          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-24'>
            {posts.map((post) => (
                <motion.div
                  style={{ y: 30 }} animate={{ y: 0 }} 
                  transition={{duration: 0.55}}
                  key={post.slug.current}
                >
                  <article  >
                      <img className='rounded-xl md:w-full' src={post.mainImage.asset.url} alt={post.title} />
                      <h4 className='text-xl mt-2'>{post.title}</h4>
                      <button className='mt-5 mb-10'>
                          <Link to={`/blog/${post.slug.current}`}  className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold' >Read Full Article</Link>
                      </button>
                  </article>
                </motion.div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default Blog