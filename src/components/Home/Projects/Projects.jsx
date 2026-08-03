import React, { useState, useRef } from 'react';
import img from './assets/Vector1.svg';
import { projects as data } from '../../../data/projects';
import ProjectModal from './ProjectModal';
import { FaExternalLinkAlt } from 'react-icons/fa';
import MangaText from '../../Blog/MangaText';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="project" className="py-16 max-w-7xl mx-auto px-4 font-sans">
      {/* Title */}
      <div className="text-center mb-10">
        <div className="mb-2">
          <MangaText text="「制作物」" translation="Seisakubutsu (Projects / Works)" className="text-xl md:text-2xl text-red-600 dark:text-yellow-400 font-extrabold tracking-wider" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white tracking-tight">
          Less Talk. More Code.
        </h2>
        <p className="mt-2 text-base md:text-lg font-medium text-neutral-700 dark:text-neutral-300">
          A selection of projects I've built and engineered.
        </p>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {data.map((d, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 cursor-pointer relative group"
            onClick={() => openModal(d)}
          >
            <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen z-10"></div>

            <div className="relative border-b-4 border-black dark:border-[#EBD3F8] overflow-hidden bg-black max-h-[220px]">
              <img className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300" src={d.img} alt={d.title || "project"} />
            </div>

            <div className="p-6 relative z-10 flex flex-col justify-between flex-1">
              <p className="text-sm md:text-base font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed mb-6">
                {d.description}
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-yellow-400 text-black font-bold uppercase text-xs px-3 py-2 brutalist-border border-black brutalist-shadow-sm hover:bg-yellow-300 transition-all flex items-center gap-2"
                >
                  {d.linkText || 'Live Demo'} <FaExternalLinkAlt />
                </a>
                {d.route && (
                  <a
                    href={d.route}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white text-black dark:bg-[#EBD3F8] dark:text-black font-bold uppercase text-xs px-3 py-2 brutalist-border border-black brutalist-shadow-sm hover:bg-gray-100 dark:hover:bg-purple-300 transition-all flex items-center gap-2"
                  >
                    {d.routeText || 'View Case Study'} <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </div>
  );
}

export default Projects;