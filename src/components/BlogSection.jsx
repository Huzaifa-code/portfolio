import React, { useState, useEffect } from 'react';
import client from '../client';
import MangaText from './Blog/MangaText';
import { FaBookOpen, FaArrowRight } from 'react-icons/fa';

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
      <div className='py-16 text-center font-sans'>
        <h2 className='text-4xl md:text-5xl font-black uppercase text-black dark:text-white'>Blogs</h2>
        <p className='text-lg font-mono text-gray-500 mt-4'>Loading latest articles...</p>
      </div>
    );
  }

  return (
    <div className='py-16 max-w-7xl mx-auto px-4 font-sans'>
      {/* Section Title */}
      <div className="text-center mb-10">
        <div className="mb-2">
          <MangaText text="「最新記事」" translation="Saishin Kiji (Latest Articles)" className="text-xl md:text-2xl text-red-600 dark:text-yellow-400 font-extrabold tracking-wider" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white tracking-tight">
          Latest Articles
        </h2>
      </div>

      {error && <p className='text-center text-red-500 font-mono my-4'>{error}</p>}

      {posts.length > 0 ? (
        <div className="flex flex-col items-center">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mb-10'>
            {posts.map((post) => (
              <a href={`/blog/${post.slug.current}`} key={post.slug.current} className='group block'>
                <article className='bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow p-5 relative overflow-hidden h-full flex flex-col justify-between group-hover:-translate-y-1 transition-all duration-200'>
                  <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

                  <div className="relative z-10">
                    {post.mainImage?.asset?.url ? (
                      <div className="brutalist-border brutalist-shadow-sm mb-4 overflow-hidden h-[180px] bg-black">
                        <img 
                          className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                          src={post.mainImage.asset.url} 
                          alt={post.title} 
                        />
                      </div>
                    ) : (
                      <div className="brutalist-border brutalist-shadow-sm mb-4 h-[180px] bg-yellow-400 flex items-center justify-center font-mono font-bold uppercase">
                        No Image Available
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-yellow-400 text-black text-xs font-mono font-bold px-2 py-0.5 brutalist-border border-black uppercase">
                        ARTICLE
                      </span>
                      {post.publishedAt && (
                        <span className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg md:text-xl font-extrabold text-black dark:text-white uppercase leading-snug group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition-colors">
                      {post.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t-2 border-dashed border-black dark:border-white/20 flex items-center justify-between font-mono font-bold text-xs uppercase text-red-600 dark:text-yellow-400 relative z-10">
                    <span>Read Article</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </a>
            ))}
          </div>

          <a 
            href="/blog" 
            className="py-4 px-8 brutalist-border brutalist-shadow bg-yellow-400 text-black font-black text-lg uppercase tracking-widest hover:bg-yellow-300 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-3"
          >
            <FaBookOpen />
            <span>Read All Articles</span>
          </a>
        </div>
      ) : (
        <p className='text-center font-mono text-gray-500 my-4'>No blog posts available</p>
      )}
    </div>
  );
};

export default BlogLink;