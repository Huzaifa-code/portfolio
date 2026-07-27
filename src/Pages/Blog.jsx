// Blog.js - adapted for Astro (receives posts/categories as props, no client-side fetch)
import React, { useState } from 'react';
import { Filter, NavBarBlog, BlogFooter, BentoHero, BlogPostCard, MangaHello } from '../components/Blog';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';
import { UserProvider } from '../context/userContext';

const Blog = ({ posts = [], categories = [] }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-UK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const allCategories = [{ _id: 'all', title: 'All' }, ...categories];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeFilter === 'All' 
      ? true 
      : post.categories?.some(category => category?.title === activeFilter);
    const matchesSearch = searchQuery.trim() === ''
      ? true
      : post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.categories?.some(category => category?.title?.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='bg-[#f3f0e8] dark:bg-neutral-900 min-h-screen text-black dark:text-[#EBD3F8] pb-12 font-sans'>
      <NavBarBlog/>
      
      {/* Hello Greeting Banner */}
      <MangaHello />
      
      {/* Bento Grid Hero Component */}
      <BentoHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        subscribed={subscribed}
        setSubscribed={setSubscribed}
        email={email}
        setEmail={setEmail}
        postsCount={posts.length}
      />

      {/* Filter Section */}
      <Filter categories={allCategories} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {filteredPosts.length === 0 ? (
        <div className='min-h-[40vh] flex items-center justify-center px-4'>
            <div className="text-center bg-white dark:bg-[#1E112C] p-12 brutalist-border brutalist-shadow relative overflow-hidden">
                <div className="absolute inset-0 halftone-bg opacity-30 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
                <h3 className="text-3xl md:text-4xl mb-4 relative z-10 bg-white dark:bg-[#1E112C] inline-block px-2">
                  No Posts Found!
                </h3>
                <p className="text-xl relative z-10 bg-white dark:bg-[#1E112C] inline-block px-2">
                  {searchQuery 
                    ? `Nothing matches "${searchQuery}"`
                    : activeFilter === 'All' 
                      ? "Check back soon!"
                      : `Nothing in "${activeFilter}".`
                  }
                </p>
                {(activeFilter !== 'All' || searchQuery) && (
                  <button
                    onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                    className="mt-6 block mx-auto px-6 py-3 bg-yellow-400 text-black uppercase tracking-wider brutalist-border brutalist-shadow-sm hover:-translate-y-1 active:translate-y-1 transition-transform relative z-10"
                  >
                    Clear Search &amp; Filter
                  </button>
                )}
            </div>
        </div>
      ) : (
        <div className='px-4 md:px-8 py-8 md:py-12 max-w-7xl mx-auto'>
          {/* Results count */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center justify-between"
          >
            <div className="flex items-center gap-3 bg-white dark:bg-[#1E112C] px-4 py-2 brutalist-border brutalist-shadow-sm">
              <FaBookOpen className="text-xl" />
              <span className="text-lg uppercase">
                <span className="text-blue-600 dark:text-yellow-400">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'Article' : 'Articles'}
                {activeFilter !== 'All' && (
                  <span className="ml-2">— <span className="text-red-500">{activeFilter}</span></span>
                )}
                {searchQuery && (
                  <span className="ml-2">— matching <span className="text-green-600 dark:text-cyan-400">"{searchQuery}"</span></span>
                )}
              </span>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + '-' + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            >
              {filteredPosts.map((post) => (
                <BlogPostCard 
                  key={post.slug.current} 
                  post={post} 
                  formatDate={formatDate} 
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      <BlogFooter/>
    </div>
  );
}

const BlogWrapper = (props) => (
  <UserProvider>
    <Blog {...props} />
  </UserProvider>
);

export default BlogWrapper;
