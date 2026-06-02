import React, { useState } from 'react';
import { LuCopy } from 'react-icons/lu';
import MangaText from './MangaText';

const ShareModal = ({ isOpen, onClose, currentUrl }) => {
  const [shortUrl, setShortUrl] = useState('');
  const [isShortening, setIsShortening] = useState(false);
  const [error, setError] = useState('');
  const [isUrlCopied, setIsUrlCopied] = useState(false);

  if (!isOpen) return null;

  async function createShortUrl(longUrl) {
    try {
      setIsShortening(true);
      setError('');
      const response = await fetch(`${import.meta.env.BASE_URL || 'https://portfolio-backend-beta-six.vercel.app'}/url`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url: longUrl })
      });
      const data = await response.json();
      setShortUrl(data.shortUrl);
      setIsShortening(false);
    } catch (err) {
      setError('Failed to shorten URL');
      setIsShortening(false);
    }
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setIsUrlCopied(true);
    setTimeout(() => {
      setIsUrlCopied(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-md flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-[#1E112C] text-black dark:text-white brutalist-border brutalist-shadow p-8 max-w-md w-full z-50 overflow-hidden">
        <div className="absolute inset-0 halftone-bg opacity-15 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <MangaText text="「共有」" translation="Kyōyū (Share)" className="text-2xl text-red-600 dark:text-yellow-400 font-extrabold" />
              <h2 className="text-xl font-bold uppercase tracking-wider font-sans">Share Post</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-bold hover:bg-black hover:text-white transition-colors"
            >
              &times;
            </button>
          </div>

          <img src="/assets/illustrations/share.svg" className="h-[180px] mx-auto mb-6 dark:invert" alt="share" />

          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wider font-bold mb-1">Current URL</label>
            <input 
              type="text" 
              value={currentUrl} 
              readOnly 
              className="w-full border-2 border-black p-2 bg-neutral-100 dark:bg-neutral-800 text-sm font-mono focus:outline-none" 
            />
          </div>

          <button
            onClick={() => createShortUrl(currentUrl)}
            className="bg-black text-white dark:bg-[#EBD3F8] dark:text-black hover:bg-yellow-400 hover:text-black dark:hover:bg-yellow-400 dark:hover:text-black px-4 py-2 border-2 border-black w-full font-bold uppercase tracking-wider transition-colors duration-150 mb-4"
            disabled={isShortening}
          >
            {isShortening ? 'Shortening...' : 'Shorten URL'}
          </button>

          {shortUrl && (
            <div className="mt-4 border-t-2 border-dashed border-black pt-4">
              <label className="block text-xs uppercase tracking-wider font-bold mb-1">Shortened URL</label>
              <input 
                type="text" 
                value={shortUrl} 
                readOnly 
                className="w-full my-2 border-2 border-black p-2 bg-[#f3f0e8] dark:bg-neutral-800 text-sm font-mono focus:outline-none" 
              />
              <button
                onClick={handleCopyToClipboard}
                className="bg-yellow-400 text-black px-4 py-2 brutalist-border brutalist-shadow-sm text-sm font-bold uppercase tracking-wider flex justify-center items-center gap-2 hover:-translate-y-0.5 active:translate-y-0.5 transition-transform duration-100 w-full mt-2"
              > 
                <LuCopy className="text-lg" />
                <span>{isUrlCopied ? 'Copied!' : 'Copy URL'}</span>
              </button>
            </div>
          )}
          
          {error && <p className="text-red-500 font-bold mt-2 text-sm text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
