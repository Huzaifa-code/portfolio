import React, { useState, useRef } from 'react'
import { FaChevronLeft, FaChevronRight, FaExpand, FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import PostModal from './PostModal'

const InstagramPost = ({ post }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoRef = useRef(null)
  const containerRef = useRef(null)

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

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const renderMedia = () => {
    if (post.mediaType === 'VIDEO' || post.isReel) {
      return (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={post.mediaUrl}
            className="w-full h-full object-cover"
            loop
            muted={isMuted}
            playsInline
          />
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
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
    } else {
      return (
        <img src={post.mediaUrl} alt={post.caption} className="w-full h-full object-cover" />
      )
    }
  }

  return (
    <>
      <div ref={containerRef} className="bg-white rounded-xl shadow-md shadow-neutral-100 overflow-hidden">
        <div className="relative transition-all">
          {post.mediaType === 'CAROUSEL_ALBUM' ? (
            <>
              <img
                src={post.children?.[currentIndex].mediaUrl || post.mediaUrl}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </>
          ) : (
            renderMedia()
          )}
          <button
            onClick={openModal}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2"
            aria-label="Open in modal"
          >
            <FaExpand />
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600 line-clamp-2">{post.caption.slice(0, 100)}...</p>
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
      <PostModal
        post={post}
        isOpen={isModalOpen}
        onClose={closeModal}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />
    </>
  )
}

export default InstagramPost