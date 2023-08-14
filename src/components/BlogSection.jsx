import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from '../client';


const BlogLink = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(
        // In Query [0..2] means first 3 blogs are fetched
      `*[_type == "post"][0..2] {
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
        }`,
    ).then((data) => setPosts(data)).catch(
      console.error(),
    );
  }, []);



  return (
    <div className='flex flex-col justify-center items-center md:my-11'>
        <h1 className='text-center text-5xl font-bold'>Blogs</h1>

        <div className='flex md:flex-row flex-col justify-center md:gap-16 py-8 '>
            {posts.map((post) => (
                <Link to={`/blog/${post.slug.current}`} key={post.slug.current} className='md:w-2/4 my-4 md:my-0'>
                    <article key={post.slug.current} className='flex flex-col justify-center items-center'>
                        <img className="rounded-2xl md:mb-5 md:h-[15rem] h-[11rem] hover:scale-105 overflow-hidden transition-all" src={post.mainImage.asset.url} alt={post.title} />
                        <h4 className="text-lg my-2 mx-3 font-medium text-center text-zinc-800 hover:text-zinc-400">{post.title}</h4>
                    </article>
                </Link>
            ))}
        </div>

        <Link to="/blog" className="py-2 px-6 rounded-lg  text-white bg-[#000] hover:bg-[#fff] hover:text-[#000] border-2 hover:border-black text-lg font-bold">Read More</Link>
        
    </div>
  )
}

export default BlogLink