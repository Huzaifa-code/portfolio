import React, { useEffect, useState } from 'react';
import client from '../../client';
import CustomModal from '../customModal';

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    client.fetch(`
      *[_type == "experience"] | order(startDate desc) {
        company,
        role,
        startDate,
        endDate,
        description,
        images[]{ asset-> { _id, url } }
      }
    `).then((data) => { 
        setExperiences(data)
    })
      .catch(console.error);
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="py-10 md:py-24">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
        <h2 className="text-5xl text-center md:my-16 font-bold">MY EXPERIENCE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              {experience.images && experience.images.length > 0 && (
                <div className="mb-4">
                  {experience.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image.asset.url}
                      alt={`${experience.company} - ${imgIndex}`}
                      className="w-full h-32 object-cover rounded-t-lg mb-2"
                      onClick={() => openModal(image.asset.url)}
                    />
                  ))}
                </div>
              )}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{experience.role}</h3>
              <p className="mt-2 text-purple-700 font-semibold ">{experience.company}</p>
              <p className="mt-2 text-gray-600">
                {new Date(experience.startDate).toLocaleDateString()} - {experience.endDate ? new Date(experience.endDate).toLocaleDateString() : 'Present'}
              </p>
              <p className="mt-4 text-gray-700">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>

      <CustomModal isOpen={modalIsOpen} onClose={closeModal} imageUrl={selectedImage} />
    </div>
  );
};

export default ExperienceSection;
