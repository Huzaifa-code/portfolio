import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const Modal = ({selectedExperience, prevImage, currentImageIndex, nextImage, closeModal}) => {
  return (
    <div 
        // className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50"
    >
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
  )
}

export default Modal