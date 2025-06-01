import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from '../client';


const BlogLink = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(
          // In Query [0..5] means first 6 blogs are fetched
          `*[_type == "post"] | order(publishedAt desc)[0..5] {
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
              }
          }`
        );
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);



  return (
    <div className='flex flex-col justify-center items-center md:my-11'>
        <h1 className='text-center text-5xl font-medium'>Blogs</h1>

        <div className='flex flex-col justify-center md:grid md:grid-cols-3 md:gap-1 md:py-3 py-8 max-w-5xl 2xl:max-w-7xl '>
            {posts.map((post) => (
                <Link to={`/blog/${post.slug.current}`} key={post.slug.current} className=' my-4 '>
                    <article key={post.slug.current} className='flex flex-col justify-center items-center'>
                        <img className="rounded-2xl md:mb-5 2xl:h-[15rem] h-[11rem] hover:scale-105 overflow-hidden transition-all duration-300" src={post.mainImage.asset.url} alt={post.title} />
                        <h4 className="text-lg md:text-sm my-2 mx-3 font-medium text-center text-zinc-800 dark:text-neutral-300 hover:text-zinc-400">{post.title}</h4>
                    </article>
                </Link>
            ))}
        </div>

        <Link to="/blog" className="py-2 px-6 rounded-lg  text-white bg-[#000] hover:bg-[#fff] hover:text-[#000] border-2 hover:border-black text-lg font-medium">Read More</Link>
        
    </div>
  )
}

export default BlogLink