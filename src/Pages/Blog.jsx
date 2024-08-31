import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from '../client'
import {NavBarBlog} from '../components/Blog';
import { motion } from 'framer-motion';


const Blog = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    client.fetch(
        `*[_type == "post"] | order(publishedAt desc) {
            title,
            slug,
            body,
            publishedAt,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt
            },
            categories[]->{
              _id,
              title
            }
        }`
    ).then((data) => { 
        setPosts(data) 
    }).catch(
        console.error()
    )
  }, [])

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-UK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

 
  return (
    <div className='bg-white' >
        <NavBarBlog/>
        <section className='px-10'>
          <motion.div 
            style={{ y: 30 }} animate={{ y: 0 }}
            transition={{duration: 0.5}}
          >
            <h1 className='font-bold text-4xl md:text-5xl pt-5 ' >Welcome to My Dev Blog</h1>
            <p className="my-11 text-lg md:text-xl lg:text-xl text-neutral-600 max-w-4xl">
              Join me as I delve into the fascinating world of software engineering! Explore a wealth of articles on invaluable Linux tips and tricks,  React.js and cutting-edge web technologies . Whether you're just starting out or you're a seasoned professional, you'll find insightful content and practical guides to elevate your skills and knowledge.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-24 mb-11'>
            {posts.map((post) => (
                <motion.div
                  style={{ y: 30 }} animate={{ y: 0 }} 
                  transition={{duration: 0.55}}
                  key={post.slug.current}
                >
                  <Link to={`/blog/${post.slug.current}`}  className='flex flex-col items-start justify-between h-full border-2 rounded-2xl border-black-400' >
                      <img className='rounded-xl md:w-full' src={post.mainImage.asset.url} alt={post.title} />
                      <div className='w-full mt-2 px-4'>
                        <p className='text-sm font-medium  text-neutral-500'>{formatDate(post.publishedAt)}</p>
                        <div className='space-x-2'>
                          {post.categories?.map((category) => (
                            category ? (
                              <span key={category._id} className=' bg-purple-200 px-3 py-1 rounded-md text-sm text-purple-400'>
                                {category.title}
                              </span>
                            ) : null
                          ))}
                        </div>
                      </div>
                      <h4 className='text-md font-medium mt-2 px-4'>{post.title}</h4>
                      <button className='mt-5 mb-8 mx-4 w-11/12'>
                          <p  className='py-2 px-6 rounded-xl shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold' >Read Full Article</p>
                      </button>
                  </Link>
                </motion.div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default Blog