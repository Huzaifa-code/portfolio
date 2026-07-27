import React from 'react';

const CustomModal = ({ isOpen, onClose, url, type }) => {
  if (!isOpen) return null;

  const renderContent = () => {
    switch (type) {
      case 'image':
        return <img src={url} alt="Modal Content" className="max-w-full h-auto m-5" />;
      case 'iframe':
        return (
          <iframe
            src={url}
            className="w-full h-[80vh] my-5 mx-auto custom-scrollbar"
            title="Modal Iframe"
          ></iframe>
        );
      case 'video':
        return (
          <video controls className="max-w-full h-auto m-5">
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case 'text':
        return <p className="text-lg p-5">{url}</p>;
      default:
        return <p className="text-lg p-5">No content to display</p>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 custom-scrollbar">
      <div className="relative bg-white rounded-lg p-4 mx-auto max-w-4xl w-full custom-scrollbar">
        <button
          className="absolute top-2 right-2 text-black font-semibold text-3xl rounded-full px-2"
          onClick={onClose}
        >
          &times;
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default CustomModal;
