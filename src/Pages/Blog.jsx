// Blog.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from '../client';
import { Filter, NavBarBlog } from '../components/Blog';
import { motion } from 'framer-motion';
import Loader from '../components/Loader/Loader'; // Import the Loader component
import Footer from '../components/Footer';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true); // Loading state
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData, categoriesData] = await Promise.all([
          client.fetch(`
            *[_type == "post"] | order(publishedAt desc) {
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
            }
          `),
          client.fetch(`
            *[_type == "category"] {
              _id,
              title
            }
          `)
        ])

        setPosts(postsData)
        setCategories([{ _id: 'all', title: 'All' }, ...categoriesData])
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }

    fetchData();
  }, []);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-UK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const filteredPosts = activeFilter === 'All' 
    ? posts 
    : posts.filter(post => post.categories?.some(category => category?.title === activeFilter))


  return (
    <div className='dark:bg-neutral-900 '>
      <NavBarBlog/>

      <Filter categories={categories} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <section className=' z-0 '>
        <motion.div
          style={{ y: 30 }} animate={{ y: 0 }}
          className="px-10 py-2 mb-5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"
          transition={{duration: 0.5}}
        >
          <h1 className=' text-4xl md:text-5xl pt-5 text-white dark:text-white flex items-center gap-4'>
            Coding Blogs
          </h1>
          <p className="my-11 text-lg md:text-2xl lg:text-2xl text-neutral-200 dark:text-white  max-w-4xl">
            Join me as I delve into the fascinating world of software engineering! Explore a wealth of articles on invaluable Linux tips and tricks, React.js and cutting-edge web technologies.
          </p>
        </motion.div>

        {loading ? ( 
          <div className='min-h-[60vh] '>
            <Loader />
          </div>
        ) : (
          <div className='px-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-24 my-11'>
            {filteredPosts.map((post) => (
              <motion.div
                style={{ y: 30 }} animate={{ y: 0 }} 
                transition={{duration: 0.55}}
                key={post.slug.current}
              >
                <Link to={`/blog/${post.slug.current}`} className='flex flex-col items-start justify-between h-full border-2 rounded-2xl border-black-400 dark:border-none dark:bg-neutral-700 hover:-translate-y-2 transition-all duration-500'>
                  <img className='rounded-xl md:w-full' src={post.mainImage.asset.url} alt={post.title} />
                  <div className='w-full mt-2 px-4'>
                    <p className='text-sm font-medium text-neutral-500'>{formatDate(post.publishedAt)}</p>
                    <div className='space-x-2'>
                      {post.categories?.map((category) => (
                        category ? (
                          <span key={category._id} className='bg-purple-200 px-3 py-1 rounded-md text-sm text-purple-400'>
                            {category.title}
                          </span>
                        ) : null
                      ))}
                    </div>
                  </div>
                  <h4 className='text-md font-medium mt-2 px-4 dark:text-white'>{post.title}</h4>
                  <button className='mt-5 mb-3 mx-auto w-11/12'>
                    <p className='py-2 px-6 rounded-xl shadow text-white dark:text-neutral-300 bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black '>Read Full Article</p>
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer/>

    </div>
  );
}

export default Blog;
