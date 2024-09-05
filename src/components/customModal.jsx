// CustomModal.js
import React from 'react';

const CustomModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg p-4 mx-auto">
        <button
          className="absolute top-2 right-2 text-black font-semibold text-3xl  rounded-full px-2 "
          onClick={onClose}
        >
          &times;
        </button>
        <img src={imageUrl} alt="Experience" className="max-w-full h-auto m-5" />
      </div>
    </div>
  );
};

export default CustomModal;
