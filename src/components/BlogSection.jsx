import React, { useState, useEffect } from 'react';
import client from '../client';


const BlogLink = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(
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
        
        if (data && Array.isArray(data)) {
          setPosts(data);
        } else {
          setError('No blog posts found');
          setPosts([]);
        }
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch blog posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className='flex flex-col justify-center items-center md:my-11'>
        <h1 className='text-center text-5xl font-medium'>Blogs</h1>
        <p className='text-center text-lg text-gray-500'>Loading posts...</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center md:my-11'>
        <h1 className='text-center text-5xl font-medium'>Blogs</h1>

        {error && <p className='text-center text-red-500 my-4'>{error}</p>}

        {posts.length > 0 ? (
          <>
            <div className='flex flex-col justify-center md:grid md:grid-cols-3 md:gap-1 md:py-3 py-8 max-w-5xl 2xl:max-w-7xl '>
                {posts.map((post) => (
                    <a href={`/blog/${post.slug.current}`} key={post.slug.current} className=' my-4 '>
                        <article className='flex flex-col justify-center items-center'>
                            {post.mainImage?.asset?.url ? (
                              <img 
                                className="rounded-2xl md:mb-5 2xl:h-[15rem] h-[11rem] hover:scale-105 overflow-hidden transition-all duration-300" 
                                src={post.mainImage.asset.url} 
                                alt={post.title} 
                              />
                            ) : (
                              <div className="rounded-2xl md:mb-5 2xl:h-[15rem] h-[11rem] bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                                <span className="text-gray-500">No image</span>
                              </div>
                            )}
                            <h4 className="text-lg md:text-sm my-2 mx-3 font-medium text-center text-zinc-800 dark:text-neutral-300 hover:text-zinc-400">{post.title}</h4>
                        </article>
                    </a>
                ))}
            </div>

            <a href="/blog" className="py-2 px-6 rounded-lg  text-white bg-[#000] hover:bg-[#fff] hover:text-[#000] border-2 hover:border-black text-lg font-medium">Read More</a>
          </>
        ) : (
          <p className='text-center text-gray-500 my-4'>No blog posts available</p>
        )}
    </div>
  )
}

export default BlogLink;