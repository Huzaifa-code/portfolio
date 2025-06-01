import React from 'react';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-neutral-700 rounded-lg shadow-xl max-w-4xl lg:max-w-6xl w-full overflow-hidden">
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FaTimes size={21} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 md:mx-auto my-auto md:p-5">
            <img
              src={project.gif || project.img}
              alt={project.description}
              className="md:w-full w-[90vw] rounded-md"
            />
          </div>
          <div className="md:w-1/3 w-[90vw] p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">{project.description}</h2>
              <p className="text-gray-600 mb-4">{project.detailDesc || project.description}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-xs text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                {project.linkText} <FaExternalLinkAlt />
              </a>
              {project.route && (
                <Link
                  to={project.route}
                  className="bg-purple-500 text-xs text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors flex items-center gap-2"
                >
                  {project.routeText} <FaExternalLinkAlt />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;