import React from 'react';

const BlogPostCard = ({ post, formatDate }) => {
  return (
    <article className="group relative">
      <a 
        href={`/blog/${post.slug.current}`} 
        className='flex flex-col h-full bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow brutalist-card-hover relative z-10 overflow-hidden'
      >
        <div className="absolute inset-0 halftone-bg opacity-0 group-hover:opacity-30 pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-opacity duration-300"></div>

        {/* Image Container */}
        <div className="relative w-full h-56 border-b-4 border-black dark:border-[#EBD3F8] overflow-hidden bg-white">
          <img 
            className='w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300' 
            src={post.mainImage?.asset?.url} 
            alt={post.title || 'Blog post image'} 
            loading="lazy"
          />
          
          {/* Category badges overlay */}
          {post.categories && post.categories.length > 0 && (
            <div className='absolute top-3 left-3 flex flex-wrap gap-2'>
              {post.categories.slice(0, 2).map((category) => (
                category ? (
                  <span 
                    key={category._id} 
                    className='px-3 py-1 bg-yellow-400 text-black text-xs uppercase tracking-tighter brutalist-border brutalist-shadow-sm'
                  >
                    {category.title}
                  </span>
                ) : null
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className='flex flex-col flex-grow p-6 relative z-10'>
          {/* Date */}
          <div className="flex items-center gap-2 mb-3 bg-white dark:bg-[#1E112C] self-start px-1">
            <span className='text-sm uppercase tracking-wider'>
              {formatDate(post.publishedAt)}
            </span>
          </div>

          {/* Title */}
          <h3 className='text-2xl uppercase leading-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition-colors bg-white dark:bg-[#1E112C] px-1 line-clamp-3'>
            {post.title}
          </h3>

          {/* Read More Button */}
          <div className="mt-auto pt-4 flex justify-end">
            <div className="bg-black text-white dark:bg-[#EBD3F8] dark:text-black px-4 py-2 uppercase brutalist-border border-white dark:border-black group-hover:bg-blue-600 dark:group-hover:bg-yellow-400 dark:group-hover:text-black group-hover:text-white transition-colors">
              READ &gt;
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default BlogPostCard;
