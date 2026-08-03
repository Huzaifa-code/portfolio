import React, { useEffect, useState } from 'react';
import client from '../../../client';
import Fish from './Fish';
import { motion } from 'framer-motion';
import Card from './Card';
import Modal from './Modal';
import MangaText from '../../Blog/MangaText';

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "experience"] | order(startDate desc) {
            company,
            role,
            startDate,
            endDate,
            description,
            images[]{ asset-> { _id, url } }
          }
        `);
        setExperiences(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExperiences();
  }, []);

  const openModal = (experience, index) => {
    setSelectedExperience(experience);
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedExperience(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedExperience) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedExperience.images.length);
    }
  };

  const prevImage = () => {
    if (selectedExperience) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + selectedExperience.images.length) % selectedExperience.images.length
      );
    }
  };

  return (
    <motion.div 
      className="py-12 md:pb-32 bg-[#11ADC1] dark:bg-[#1A0B2E] relative crt overflow-hidden font-sans"
    > 
      <div className="max-w-5xl 2xl:max-w-7xl mx-5 md:mx-auto relative z-20">
        <div className="text-center mb-10">
          <div className="mb-2">
            <MangaText text="「経歴」" translation="Keireki (Experience)" className="text-xl md:text-2xl text-yellow-300 dark:text-yellow-400 font-extrabold tracking-wider" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            My Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.length === 0 ? (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-white font-bold font-mono text-xl py-12">
              LOADING EXPERIENCE...
            </div>
          ) : (
            experiences.map((experience, index) => (
              <Card key={index} experience={experience} openModal={openModal} />
            ))
          )}
        </div>
      </div>

      {modalIsOpen && selectedExperience && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Modal 
            selectedExperience={selectedExperience} 
            prevImage={prevImage} 
            currentImageIndex={currentImageIndex} 
            nextImage={nextImage} 
            closeModal={closeModal} 
          />
        </div>
      )}

      <div className='absolute w-full top-16 pointer-events-none'>
        <Fish color="orange"/>
      </div>
      <div className='absolute w-full top-[400px] pointer-events-none'>
        <Fish color="grey" number={3}/>
      </div>
      <div className='absolute w-full top-[800px] pointer-events-none'>
        <Fish color="red" number={4}/>
      </div>

      <img 
        className='w-full absolute bottom-0 crt-effect pointer-events-none' 
        src="/assets/underwater_platform.png" alt="platform" 
      />
    </motion.div>
  );
};

export default ExperienceSection;