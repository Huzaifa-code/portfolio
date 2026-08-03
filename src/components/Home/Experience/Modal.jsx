import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import MangaText from '../../Blog/MangaText';
import ImageViewer from '../ImageViewer';

const Modal = ({ selectedExperience, prevImage, currentImageIndex, nextImage, closeModal }) => {
  if (!selectedExperience || !selectedExperience.images || selectedExperience.images.length === 0) return null;

  const currentImg = selectedExperience.images[currentImageIndex]?.asset?.url;
  const totalImages = selectedExperience.images.length;

  return (
    <div className="relative max-w-4xl w-full mx-auto p-4 md:p-6 bg-white dark:bg-[#1E112C] text-black dark:text-white brutalist-border brutalist-shadow my-auto overflow-hidden">
      {/* Halftone texture */}
      <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b-4 border-black dark:border-white relative z-10">
        <div>
          <div className="mb-0.5">
            <MangaText text="「証拠」" translation="Shouko (Proof / Media)" className="text-xs text-red-600 dark:text-yellow-400 font-extrabold" />
          </div>
          <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">
            {selectedExperience.company} — <span className="text-red-600 dark:text-yellow-400">{selectedExperience.role}</span>
          </h3>
        </div>

        <div className="flex items-center gap-3">
          {totalImages > 1 && (
            <span className="font-mono text-xs font-bold bg-black text-white dark:bg-[#EBD3F8] dark:text-black px-2.5 py-1 brutalist-border">
              {currentImageIndex + 1} / {totalImages}
            </span>
          )}
          <button
            onClick={closeModal}
            className="p-2 bg-yellow-400 text-black brutalist-border brutalist-shadow-sm hover:bg-red-500 hover:text-white transition-all font-bold"
            aria-label="Close modal"
          >
            <FaTimes size={18} />
          </button>
        </div>
      </div>

      {/* Main Image Display Box with ImageViewer */}
      <div className="relative bg-neutral-100 dark:bg-neutral-900 brutalist-border p-2 min-h-[300px] max-h-[65vh] flex items-center justify-center overflow-hidden z-10">
        {currentImg ? (
          <ImageViewer
            src={currentImg}
            alt={`${selectedExperience.company} proof ${currentImageIndex + 1}`}
            maxHeightClass="max-h-[58vh]"
          />
        ) : (
          <p className="font-mono text-sm text-gray-500">No Image Available</p>
        )}

        {/* Prev / Next Navigation Buttons (Only if multiple images) */}
        {totalImages > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-3 brutalist-border brutalist-shadow-sm hover:bg-yellow-300 transition-all font-bold z-20"
              aria-label="Previous image"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-3 brutalist-border brutalist-shadow-sm hover:bg-yellow-300 transition-all font-bold z-20"
              aria-label="Next image"
            >
              <FaChevronRight size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;