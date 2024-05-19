import React from 'react';

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-7 rounded-md shadow-md ">
        <h2 className="text-2xl font-bold mb-4">Error</h2>
        <p className="text-neutral-400 my-11 ">{message}</p>
        <button onClick={onClose} className="bg-[#000000] text-white py-2 px-4 rounded-lg hover:bg-neutral-700">Close</button>
      </div>
    </div>
  );
};

export default ErrorModal;
