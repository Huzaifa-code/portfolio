import React from 'react'

const Card = ({experience,openModal}) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 p-6 rounded-2xl shadow-lg z-10">
        {experience.images && experience.images.length > 0 && (
        <div className="mb-4 relative">
            <div className="grid grid-cols-2 gap-2">
            {experience.images.slice(0, 2).map((image, imgIndex) => (
                <div className='h-20 overflow-hidden' key={imgIndex}>
                    <img
                        src={image.asset.url}
                        alt={`${experience.company} - ${imgIndex}`}
                        className="w-full object-cover rounded-lg cursor-pointer"
                        onClick={() => openModal(experience, imgIndex)}
                    />
                </div>
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
        <h3 className="mt-4 text-2xl font-medium text-gray-900 dark:text-black">{experience.role}</h3>
        <p className="mt-2 text-xl text-purple-700 font-medium dark:text-neutral-700 ">{experience.company}</p>
        <p className="mt-2 text-gray-600 dark:text-neutral-700">
            {new Date(experience.startDate).toLocaleDateString()} -{' '}
            {experience.endDate ? new Date(experience.endDate).toLocaleDateString() : 'Present'}
        </p>
        <p className="mt-4 text-gray-700 md:text-md 2xl:text-lg dark:text-neutral-700">{experience.description}</p>
    </div>
  )
}

export default Card