import React from 'react';
import { FaTerminal, FaSearch, FaEnvelope } from 'react-icons/fa';
import Avatar from 'boring-avatars';

const BentoHero = ({
  searchQuery,
  setSearchQuery,
  subscribed,
  setSubscribed,
  email,
  setEmail,
  postsCount
}) => {
  return (
    <section className='pt-8 pb-12 px-4 md:px-8 max-w-7xl mx-auto'>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Main Title Box */}
        <div className="md:col-span-8 bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute inset-0 halftone-bg opacity-30 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
          
          {/* Pop-up sticker */}
          <div className="absolute top-4 right-4 bg-yellow-400 text-black brutalist-border brutalist-shadow-sm px-4 py-1 transform rotate-12 text-xl z-10 font-bold">
            POP!
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10 h-full">
            <div>
              <h1 className='text-5xl md:text-7xl uppercase tracking-tighter leading-[0.8] mb-6'>
                <span className="bg-black text-white dark:bg-[#EBD3F8] dark:text-[#1E112C] px-4 pt-2 pb-1 inline-block transform -skew-x-6 font-extrabold">Developer</span>
                <br/>
                <span className="inline-block mt-3 bg-white dark:bg-[#1E112C] px-2 font-extrabold">Blog</span>
              </h1>
              
              <p className="text-xl md:text-2xl max-w-2xl bg-white dark:bg-[#1E112C] inline-block px-2">
                Insights &amp; Tutorials
              </p>
            </div>

            {/* Dynamic Console / Tagline */}
            <div className="bg-gray-100 dark:bg-neutral-800 p-4 brutalist-border border-2 border-black dark:border-[#EBD3F8] lg:max-w-xs w-full transform rotate-1 hover:rotate-0 transition-transform duration-200">
              <div className="flex items-center gap-2 mb-2 border-b border-gray-300 dark:border-neutral-700 pb-1">
                <FaTerminal className="text-sm text-green-500" />
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">system.log</span>
              </div>
              <p className="font-mono text-xs text-gray-800 dark:text-[#EBD3F8] leading-relaxed">
                &gt;_ Reading about web architecture, React internals, and Linux systems. New articles published weekly.
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 bg-black text-white dark:bg-[#EBD3F8] dark:text-black px-3 py-1 text-lg brutalist-border border-white dark:border-black transform -rotate-3 z-10">
            開発者ブログ
          </div>
        </div>

        {/* Image Box */}
        <div className="md:col-span-4 brutalist-border brutalist-shadow relative overflow-hidden bg-white dark:bg-[#1E112C] group min-h-[250px]">
          <img 
            src="/assets/code.jpg" 
            alt="Code Aesthetic" 
            className="w-full h-full object-cover grayscale contrast-150 group-hover:grayscale-0 transition-all duration-300"
          />
          {/* Overlay sticker */}
          <div className="absolute bottom-4 left-4 bg-red-500 text-white brutalist-border brutalist-shadow-sm px-3 py-1 text-2xl transform -rotate-6">
            NEW!
          </div>
        </div>

        {/* Search Blog */}
        <div className="md:col-span-4 bg-cyan-100 dark:bg-[#072F3C] brutalist-border brutalist-shadow p-6 relative overflow-hidden flex flex-col justify-between group min-h-[220px]">
          <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl uppercase tracking-wider font-extrabold bg-white dark:bg-black px-2 py-0.5 brutalist-border border-2 border-black dark:border-white inline-block">
                Search posts
              </h3>
              <FaSearch className="text-2xl" />
            </div>
            <div className="relative mt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search..."
                className="w-full px-3 py-2 bg-white dark:bg-neutral-900 text-black dark:text-[#EBD3F8] border-3 border-black dark:border-white brutalist-shadow-sm focus:outline-none placeholder-gray-500 font-mono text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white border-2 border-black px-1.5 py-0.5 text-2xs uppercase tracking-tighter"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
          
          {/* Quick search terms */}
          <div className="mt-4 flex flex-wrap gap-1.5 z-10">
            {['React', 'Linux', 'Design', 'MCP'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="text-2xs font-mono uppercase bg-white dark:bg-neutral-800 text-black dark:text-[#EBD3F8] hover:bg-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-black border-2 border-black dark:border-white px-2 py-0.5 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Author Bio & Stats */}
        <div className="md:col-span-4 bg-yellow-100 dark:bg-[#2E2C06] brutalist-border brutalist-shadow p-6 relative overflow-hidden flex flex-col justify-between group min-h-[220px]">
          <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="brutalist-border border-2 border-black bg-white p-0.5">
                <Avatar
                  size={40}
                  name="Huzaifa Qureshi"
                  variant="beam"
                  colors={['#F94144','#F3722C','#F8961E','#F9844A','#F9C74F','#90BE6D','#43AA8B','#577590']}
                />
              </div>
              <div>
                <h3 className="text-md uppercase tracking-wider font-extrabold">Huzaifa Qureshi</h3>
                <span className="text-2xs font-mono uppercase text-gray-500 dark:text-gray-400">Full Stack Dev</span>
              </div>
            </div>
            
            <ul className="text-xs space-y-1.5 font-mono text-gray-800 dark:text-[#EBD3F8]">
              <li className="flex items-center gap-1.5">
                <span className="text-green-500">✔</span> {postsCount} published articles
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-green-500">✔</span> Web &amp; Mobile engineering
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-green-500">✔</span> Open Source &amp; Linux logs
              </li>
            </ul>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-3">
            <span className="text-2xs font-mono text-gray-500 dark:text-gray-400">STATUS: WRITING</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="md:col-span-4 bg-pink-100 dark:bg-[#3D0A24] brutalist-border brutalist-shadow p-6 relative overflow-hidden flex flex-col justify-between group min-h-[220px]">
          <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl uppercase tracking-wider font-extrabold bg-white dark:bg-black px-2 py-0.5 brutalist-border border-2 border-black dark:border-white inline-block">
                Stay updated
              </h3>
              <FaEnvelope className="text-2xl" />
            </div>
            <p className="text-2xs font-mono text-gray-700 dark:text-gray-300 mb-3">
              Get notified when new engineering writeups drop.
            </p>
          </div>

          {subscribed ? (
            <div className="bg-green-400 text-black border-2 border-black p-3 text-xs font-mono uppercase tracking-wider text-center brutalist-shadow-sm">
              🎉 Subscribed! Thanks!
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="flex gap-2 relative z-10">
              <input
                type="email"
                required
                placeholder="your.email@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-3 py-2 bg-white dark:bg-neutral-900 text-black dark:text-[#EBD3F8] border-3 border-black dark:border-white focus:outline-none font-mono text-2xs"
              />
              <button
                type="submit"
                className="bg-black text-white dark:bg-[#EBD3F8] dark:text-black hover:bg-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-black font-extrabold px-3 py-2 border-3 border-black dark:border-white uppercase text-2xs transition-colors"
              >
                Join
              </button>
            </form>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default BentoHero;
