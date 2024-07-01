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
            <h1 className='font-bold text-4xl md:text-5xl pt-5 mb-10 text-center' >Blogs</h1>
          </motion.div>

          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-24'>
            {posts.map((post) => (
                <motion.div
                  style={{ y: 30 }} animate={{ y: 0 }} 
                  transition={{duration: 0.55}}
                  key={post.slug.current}
                >
                  <article className='flex flex-col items-start justify-between h-full' >
                      <img className='rounded-xl md:w-full' src={post.mainImage.asset.url} alt={post.title} />
                      <div className='flex justify-between items-center w-full mt-2'>
                        <p className='text-sm font-medium  text-neutral-500'>{formatDate(post.publishedAt)}</p>
                        <div>
                          {post.categories?.map((category) => (
                            category ? (
                              <span key={category._id} className='mr-2 bg-yellow-200 px-3 py-1 rounded-md border border-yellow-400 text-yellow-400'>
                                {category.title}
                              </span>
                            ) : null
                          ))}
                        </div>
                      </div>
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