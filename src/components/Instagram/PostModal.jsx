import React, { useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay, FaVolumeMute, FaVolumeUp, FaTimes } from 'react-icons/fa'

export default function PostModal({ post, isOpen, onClose, currentIndex, setCurrentIndex, isPlaying, setIsPlaying, isMuted, setIsMuted }) {
  const modalRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : (post.children?.length || 1) - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < (post.children?.length || 1) - 1 ? prevIndex + 1 : 0))
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const renderMedia = () => {
    if (post.mediaType === 'VIDEO' || post.isReel) {
      return (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={post.mediaUrl}
            className="w-full h-full object-contain"
            loop
            muted={isMuted}
            playsInline
            autoPlay
          />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <button
              onClick={togglePlay}
              className="bg-black bg-opacity-50 text-white rounded-full p-2"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button
              onClick={toggleMute}
              className="bg-black bg-opacity-50 text-white rounded-full p-2"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        </div>
      )
    } else if (post.mediaType === 'CAROUSEL_ALBUM') {
      return (
        <div className="relative">
          <img
            src={post.children?.[currentIndex].mediaUrl || post.mediaUrl}
            alt={post.caption}
            className=""
          />
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
      )
    } else {
      return (
        <img src={post.mediaUrl} alt={post.caption} className="w-full h-full object-contain" />
      )
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-md bg-opacity-50 z-50 flex items-center justify-center" onClick={onClose}>
        <div ref={modalRef} className="bg-white rounded-lg overflow-hidden max-w-2xl max-h-[95vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex-grow">
            {renderMedia()}
            
            </div>
            <div className="p-4 bg-white">
            <p className="text-sm text-gray-600">{post.caption.slice(0,30)}...</p>
            <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm mt-2 inline-block"
            >
                View on Instagram
            </a>
            </div>
        </div>
        <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black hover:bg-white bg-opacity-50 text-white hover:text-black transition-all rounded-full p-2"
            aria-label="Close modal"
        >
            <FaTimes />
        </button>
    </div>
  )
}