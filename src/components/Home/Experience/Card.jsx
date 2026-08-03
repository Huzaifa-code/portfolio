import React from 'react';

const Card = ({ experience, openModal }) => {
  return (
    <div className="bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow p-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-200 z-10 font-sans">
      <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

      {experience.images && experience.images.length > 0 && (
        <div className="mb-4 relative z-10">
          <div className="grid grid-cols-2 gap-2">
            {experience.images.slice(0, 2).map((image, imgIndex) => (
              <div className='h-24 overflow-hidden brutalist-border brutalist-shadow-sm bg-black' key={imgIndex}>
                <img
                  src={image.asset.url}
                  alt={`${experience.company} - ${imgIndex}`}
                  className="w-full h-full object-cover cursor-pointer grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                  onClick={() => openModal(experience, imgIndex)}
                />
              </div>
            ))}
          </div>
          {experience.images.length > 2 && (
            <div
              className="absolute bottom-2 right-2 bg-yellow-400 text-black brutalist-border border-black font-black text-xs px-2 py-1 cursor-pointer brutalist-shadow-sm"
              onClick={() => openModal(experience, 2)}
            >
              +{experience.images.length - 2} MORE
            </div>
          )}
        </div>
      )}

      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-black uppercase text-black dark:text-white leading-tight">
          {experience.role}
        </h3>
        <p className="mt-1 text-base font-bold font-mono text-red-600 dark:text-yellow-400 uppercase">
          {experience.company}
        </p>
        <div className="inline-block mt-2 bg-yellow-400 text-black px-2 py-0.5 font-mono font-bold text-xs uppercase brutalist-border border-black">
          {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {' '}
          {experience.endDate ? new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'PRESENT'}
        </div>
        <p className="mt-4 text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default Card;