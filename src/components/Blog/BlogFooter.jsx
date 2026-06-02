import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaRss, FaHeart } from 'react-icons/fa';
import MangaText from './MangaText';

const BlogFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f3f0e8] dark:bg-neutral-900 text-black dark:text-[#EBD3F8] border-t-8 border-black dark:border-[#EBD3F8] mt-16 py-12 px-4 md:px-8 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b-4 border-black dark:border-[#EBD3F8]">
        
        {/* Brand Section */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <div className="bg-yellow-400 text-black p-3 brutalist-border brutalist-shadow-sm transform -rotate-2 inline-block mb-4 font-extrabold text-2xl uppercase">
              Huzaifa
            </div>
            <p className="text-base md:text-lg max-w-sm font-medium leading-relaxed mt-2">
              Building high-performance web applications, engineering robust systems, and writing about tech, design, and developer productivity.
            </p>
          </div>
          
          <div className="flex gap-4 mt-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white text-black dark:bg-[#EBD3F8] dark:text-black brutalist-border brutalist-shadow-sm hover:-translate-y-1 hover:translate-x-1 hover:bg-cyan-300 transition-transform active:translate-y-0"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white text-black dark:bg-[#EBD3F8] dark:text-black brutalist-border brutalist-shadow-sm hover:-translate-y-1 hover:translate-x-1 hover:bg-blue-400 transition-transform active:translate-y-0"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white text-black dark:bg-[#EBD3F8] dark:text-black brutalist-border brutalist-shadow-sm hover:-translate-y-1 hover:translate-x-1 hover:bg-sky-400 transition-transform active:translate-y-0"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a 
              href="/rss.xml" 
              className="p-3 bg-white text-black dark:bg-[#EBD3F8] dark:text-black brutalist-border brutalist-shadow-sm hover:-translate-y-1 hover:translate-x-1 hover:bg-orange-400 transition-transform active:translate-y-0"
              aria-label="RSS Feed"
            >
              <FaRss className="text-xl" />
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-lg uppercase tracking-wider font-extrabold mb-4 bg-white dark:bg-black px-2 py-1 brutalist-border border-2 border-black dark:border-white inline-block">
            Navigation
          </h4>
          <ul className="space-y-3 font-medium">
            <li>
              <a href="/" className="hover:text-blue-600 dark:hover:text-yellow-400 transition-colors uppercase tracking-wider text-sm flex items-center gap-1.5">
                <span>→</span> Portfolio
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-blue-600 dark:hover:text-yellow-400 transition-colors uppercase tracking-wider text-sm flex items-center gap-1.5">
                <span>→</span> Projects
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-600 dark:hover:text-yellow-400 transition-colors uppercase tracking-wider text-sm flex items-center gap-1.5">
                <span>→</span> Blogs
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-blue-600 dark:hover:text-yellow-400 transition-colors uppercase tracking-wider text-sm flex items-center gap-1.5">
                <span>→</span> Say Hello
              </a>
            </li>
          </ul>
        </div>

        {/* Info Column */}
        <div className="md:col-span-3">
          <h4 className="text-lg uppercase tracking-wider font-extrabold mb-4 bg-white dark:bg-black px-2 py-1 brutalist-border border-2 border-black dark:border-white inline-block">
            <MangaText text="「技術」" translation="Tech Stack" className="text-red-600 dark:text-yellow-400 font-extrabold" />
          </h4>
          <ul className="text-xs font-mono space-y-2 text-gray-700 dark:text-[#EBD3F8]/80">
            <li className="flex justify-between border-b-2 border-dashed border-black/20 dark:border-white/20 pb-1">
              <span>ENGINE:</span>
              <span className="font-bold text-black dark:text-[#EBD3F8]">ASTRO &amp; REACT</span>
            </li>
            <li className="flex justify-between border-b-2 border-dashed border-black/20 dark:border-white/20 pb-1">
              <span>STYLES:</span>
              <span className="font-bold text-black dark:text-[#EBD3F8]">TAILWIND CSS</span>
            </li>
            <li className="flex justify-between border-b-2 border-dashed border-black/20 dark:border-white/20 pb-1">
              <span>DATABASE:</span>
              <span className="font-bold text-black dark:text-[#EBD3F8]">SANITY CMS</span>
            </li>
            <li className="flex justify-between pb-1">
              <span>DEPLOY:</span>
              <span className="font-bold text-black dark:text-[#EBD3F8]">VERCEL</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright & Sign off */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div>
          &copy; {currentYear} HUZAIFA QURESHI. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-1 bg-white dark:bg-neutral-800 px-3 py-1.5 brutalist-border border-2 border-black dark:border-white">
          <span>MADE WITH</span>
          <FaHeart className="text-red-500 animate-pulse mx-0.5" />
          <span>BY HUZAIFA</span>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
