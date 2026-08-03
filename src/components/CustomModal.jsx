import React from 'react';
import { FaTimes, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import MangaText from './Blog/MangaText';
import ImageViewer from './Home/ImageViewer';

const CustomModal = ({ isOpen, onClose, url, type }) => {
  if (!isOpen) return null;

  const renderContent = () => {
    switch (type) {
      case 'image':
        return (
          <div className="bg-neutral-100 dark:bg-neutral-900 brutalist-border p-2">
            <ImageViewer src={url} alt="Modal Image" maxHeightClass="max-h-[70vh]" />
          </div>
        );
      case 'iframe':
        return (
          <div className="bg-neutral-100 dark:bg-neutral-900 brutalist-border p-2">
            <iframe
              src={url}
              className="w-full h-[72vh] brutalist-border bg-white"
              title="Modal Iframe"
            ></iframe>
          </div>
        );
      case 'video':
        return (
          <div className="bg-neutral-100 dark:bg-neutral-900 brutalist-border p-2 flex justify-center">
            <video controls className="max-h-[70vh] w-auto brutalist-border">
              <source src={url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      case 'text':
        return (
          <div className="p-6 bg-neutral-100 dark:bg-neutral-900 brutalist-border font-mono text-sm leading-relaxed">
            <p>{url}</p>
          </div>
        );
      default:
        return <p className="text-lg p-5 font-mono">No content to display</p>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-[#1E112C] text-black dark:text-white brutalist-border brutalist-shadow max-w-5xl w-full relative overflow-hidden p-4 md:p-6 my-auto">
        
        {/* Halftone texture */}
        <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

        {/* Top Header Tag & Action Bar */}
        <div className="flex justify-between items-center mb-4 pb-3 border-b-4 border-black dark:border-white relative z-10">
          <div>
            <div className="mb-0.5">
              <MangaText text="「履歴書」" translation="Rirekisho (Resume / Document)" className="text-xs text-red-600 dark:text-yellow-400 font-extrabold" />
            </div>
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">
              Document Preview
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://docs.google.com/document/d/1yVMhw9hVLRwzPlxh9YA0i9FdWT-slbFSTfXCvXrXcpU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white text-black dark:bg-[#EBD3F8] font-bold text-xs uppercase tracking-wider brutalist-border brutalist-shadow-sm hover:bg-cyan-300 transition-all hidden sm:flex items-center gap-1.5"
            >
              Open Full <FaExternalLinkAlt size={12} />
            </a>

            <a
              href="https://docs.google.com/document/d/1yVMhw9hVLRwzPlxh9YA0i9FdWT-slbFSTfXCvXrXcpU/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-yellow-400 text-black font-bold text-xs uppercase tracking-wider brutalist-border brutalist-shadow-sm hover:bg-yellow-300 transition-all flex items-center gap-1.5"
            >
              Download PDF <FaDownload size={12} />
            </a>

            <button
              onClick={onClose}
              className="p-2 bg-yellow-400 text-black brutalist-border brutalist-shadow-sm hover:bg-red-500 hover:text-white transition-all font-bold ml-1"
              aria-label="Close modal"
            >
              <FaTimes size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="relative z-10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
