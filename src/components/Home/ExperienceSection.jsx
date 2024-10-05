import React, { useEffect, useState } from 'react';
import client from '../../client';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type == "experience"] | order(startDate desc) {
        company,
        role,
        startDate,
        endDate,
        description,
        images[]{ asset-> { _id, url } }
      }
    `
      )
      .then((data) => {
        setExperiences(data);
      })
      .catch(console.error);
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
    <div className="py-10 md:py-24">
      <div className="max-w-5xl 2xl:max-w-7xl mx-5 md:mx-auto">
        <h2 className="text-3xl md:text-5xl text-center md:my-16 font-bold">MY EXPERIENCE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              {experience.images && experience.images.length > 0 && (
                <div className="mb-4 relative">
                  <div className="grid grid-cols-2 gap-2">
                    {experience.images.slice(0, 2).map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image.asset.url}
                        alt={`${experience.company} - ${imgIndex}`}
                        className="w-full h-32 object-cover rounded-lg cursor-pointer"
                        onClick={() => openModal(experience, imgIndex)}
                      />
                    ))}
                  </div>
                  {experience.images.length > 2 && (
                    <div
                      className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                      onClick={() => openModal(experience, 2)}
                    >
                      +{experience.images.length - 2}
                    </div>
                  )}
                </div>
              )}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{experience.role}</h3>
              <p className="mt-2 text-purple-700 font-semibold ">{experience.company}</p>
              <p className="mt-2 text-gray-600">
                {new Date(experience.startDate).toLocaleDateString()} -{' '}
                {experience.endDate ? new Date(experience.endDate).toLocaleDateString() : 'Present'}
              </p>
              <p className="mt-4 text-gray-700">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>

      {modalIsOpen && selectedExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full h-full flex flex-col items-center justify-center px-4">
            <div className="bg-white rounded-lg overflow-hidden max-h-[80vh] max-w-full">
              <img
                src={selectedExperience.images[currentImageIndex].asset.url}
                alt={`${selectedExperience.company} - ${currentImageIndex}`}
                className="md:w-full md:h-auto h-[90vh]"
              />
            </div>
            <div className="absolute top-4 right-4 md:top-8 md:right-8">
              <button
                className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transition-colors duration-200"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 md:left-8">
              <button
                className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transition-colors duration-200"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <FaChevronLeft className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 md:right-8">
              <button
                className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transition-colors duration-200"
                onClick={nextImage}
                aria-label="Next image"
              >
                <FaChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;