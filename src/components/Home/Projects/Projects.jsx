import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import img from './assets/Vector1.svg';
import { Link } from 'react-router-dom';
import { projects as data } from '../../../data/projects';
import ProjectModal from './ProjectModal';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projectsec = styled.div`
  min-height: 80vh;
`;

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
    <Projectsec id="project" className="flex flex-col justify-center items-center">
      <img className="md:h-[4rem] h-[3.5rem] z-10 relative top-[5rem]" src={img} alt="" />
      <h1 className="text-5xl md:text-6xl my-6 font-bold text-center">LESS TALK.</h1>
      <h1 className="text-3xl md:text-5xl font-bold text-center">MORE DESIGN</h1>
      <h1 className="text-3xl md:text-5xl font-bold text-center">AND DEVELOPMENT</h1>
      <p className="my-6 mx-4 md:mx-0 text-xl text-center text-[#464646]">
        It's time to see some work. Here are some projects that I have done.
      </p>

      <div
        ref={ref}
        className="flex flex-col justify-center gap-6 md:grid md:grid-cols-3 md:gap-20 md:py-3 py-8 md:mx-auto mx-5 max-w-5xl 2xl:max-w-7xl"
      >
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between h-full dark:bg-neutral-700 shadow-lg rounded-2xl cursor-pointer hover:-translate-y-3 transition-all duration-500"
            onClick={() => openModal(d)}
          >
            <img className="md:w-full rounded-2xl" src={d.img} alt="project" />
            <div className="mx-4 my-4">
              <p className="mb-6 my-3 text-lg text-neutral-700 dark:text-neutral-400 md:text-xl text-justify">
                {d.description}
              </p>
              <div className="flex flex-wrap gap-4">
              <a
                href={d.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-xs text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                {d.linkText} <FaExternalLinkAlt />
              </a>
              {d.route && (
                <Link
                  to={d.route}
                  className="bg-purple-500 text-xs text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors flex items-center gap-2"
                >
                  {d.routeText} <FaExternalLinkAlt />
                </Link>
              )}
            </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </Projectsec>
  );
}

export default Projects;