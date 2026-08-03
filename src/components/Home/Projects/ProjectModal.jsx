import React from 'react';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import MangaText from '../../Blog/MangaText';
import ImageViewer from '../ImageViewer';

const formatLink = (url) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) {
    return url;
  }
  return `https://${url}`;
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-[#1E112C] text-black dark:text-white brutalist-border brutalist-shadow max-w-4xl w-full relative overflow-hidden p-6 md:p-8 my-auto">
        
        {/* Halftone texture */}
        <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

        {/* Top Header Tag & Close Button */}
        <div className="flex justify-between items-center mb-6 relative z-10 pb-4 border-b-4 border-black dark:border-white">
          <div>
            <div className="mb-1">
              <MangaText text="「詳細」" translation="Shousai (Details)" className="text-xs md:text-sm text-red-600 dark:text-yellow-400 font-extrabold" />
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
              {project.description}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 bg-yellow-400 text-black brutalist-border brutalist-shadow-sm hover:bg-red-500 hover:text-white transition-all font-bold"
            aria-label="Close modal"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex flex-col md:flex-row gap-6 relative z-10">
          <div className="md:w-3/5 bg-neutral-100 dark:bg-neutral-900 brutalist-border p-2 flex items-center justify-center relative min-h-[260px]">
            <ImageViewer
              src={project.gif || project.img}
              alt={project.description}
              maxHeightClass="max-h-[50vh]"
            />
          </div>
          
          <div className="md:w-2/5 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-black text-white dark:bg-[#EBD3F8] dark:text-black px-2 py-0.5 font-mono text-xs uppercase font-bold mb-3 border border-black">
                PROJECT DEMO
              </span>
              <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-medium leading-relaxed mb-6">
                {project.detailDesc || project.description}
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              {project.link && (
                <a
                  href={formatLink(project.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black font-extrabold uppercase text-xs md:text-sm px-4 py-3 brutalist-border brutalist-shadow-sm hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  {project.linkText || "Live Preview"} <FaExternalLinkAlt />
                </a>
              )}
              {project.route && (
                <a
                  href={formatLink(project.route)}
                  className="bg-white text-black dark:bg-[#EBD3F8] dark:text-black font-extrabold uppercase text-xs md:text-sm px-4 py-3 brutalist-border brutalist-shadow-sm hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  {project.routeText || "View Route"} <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;