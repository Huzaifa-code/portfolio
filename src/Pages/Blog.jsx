import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from '../client'
import NavBarBlog from '../components/NavBarBlog/NavBarBlog';

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
          <h1 className='font-bold text-4xl md:text-5xl pt-5 mb-10 text-center' >Blogs</h1>

          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {posts.map((post) => (
                <article key={post.slug.current} >
                    <img className='rounded-xl md:h-[18rem]' src={post.mainImage.asset.url} alt={post.title} />
                    <h4 className='text-xl mt-2'>{post.title}</h4>
                    <button className='mt-5 mb-10'>
                        <Link to={`/blog/${post.slug.current}`}  className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold' >Read Full Article</Link>
                    </button>
                </article>
            ))}
          </div>
        </section>
    </div>
  )
}

export default Blog