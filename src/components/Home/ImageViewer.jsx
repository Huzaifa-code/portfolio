import React, { useState, useRef, useEffect } from 'react';
import { FaSearchPlus, FaSearchMinus, FaExpand, FaCompress, FaUndo } from 'react-icons/fa';

const ImageViewer = ({ src, alt, className = "", maxHeightClass = "max-h-[60vh]" }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const containerRef = useRef(null);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 4));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const nextScale = Math.max(prev - 0.25, 0.75);
      if (nextScale <= 1) setPosition({ x: 0, y: 0 });
      return nextScale;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
    handleReset();
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 0.15 : -0.15;
    setScale((prev) => {
      const nextScale = Math.min(Math.max(prev + zoomFactor, 0.75), 4);
      if (nextScale <= 1) setPosition({ x: 0, y: 0 });
      return nextScale;
    });
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      handleReset();
    } else {
      setScale(2);
    }
  };

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div 
      className={
        isFullscreen
          ? "fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 select-none"
          : "relative w-full h-full flex flex-col items-center justify-center select-none"
      }
    >
      {/* Interactive Control Bar */}
      <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-black/80 text-white p-1.5 brutalist-border border border-white shadow-lg backdrop-blur-md">
        <button
          type="button"
          onClick={handleZoomIn}
          className="p-1.5 hover:bg-yellow-400 hover:text-black transition-colors rounded-none font-bold"
          title="Zoom In (+)"
        >
          <FaSearchPlus size={14} />
        </button>

        <button
          type="button"
          onClick={handleZoomOut}
          className="p-1.5 hover:bg-yellow-400 hover:text-black transition-colors rounded-none font-bold"
          title="Zoom Out (-)"
        >
          <FaSearchMinus size={14} />
        </button>

        <span className="font-mono text-[10px] font-extrabold px-1.5 py-0.5 bg-white text-black min-w-[38px] text-center border border-black">
          {Math.round(scale * 100)}%
        </span>

        <button
          type="button"
          onClick={handleReset}
          className="p-1.5 hover:bg-yellow-400 hover:text-black transition-colors rounded-none font-bold"
          title="Reset Zoom & Pan"
        >
          <FaUndo size={12} />
        </button>

        <div className="w-[1px] h-4 bg-gray-500 mx-0.5"></div>

        <button
          type="button"
          onClick={toggleFullscreen}
          className="p-1.5 hover:bg-yellow-400 hover:text-black transition-colors rounded-none font-bold"
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
        >
          {isFullscreen ? <FaCompress size={14} /> : <FaExpand size={14} />}
        </button>
      </div>

      {/* Image Container viewport */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDoubleClick={handleDoubleClick}
        className={`relative w-full flex items-center justify-center overflow-hidden cursor-${scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'} ${
          isFullscreen ? "h-[85vh] max-w-[95vw]" : maxHeightClass
        }`}
      >
        <img
          src={src}
          alt={alt}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
            imageRendering: 'pixelated'
          }}
          className={`max-w-full object-contain pointer-events-auto brutalist-border bg-white dark:bg-black shadow-md ${
            isFullscreen ? "max-h-[82vh]" : maxHeightClass
          } ${className}`}
          draggable={false}
        />
      </div>

      {/* Helper hint banner when zoomed */}
      {scale > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-12 z-30 bg-yellow-400 text-black px-3 py-1 font-mono text-[11px] font-black uppercase brutalist-border brutalist-shadow-sm pointer-events-none">
          Drag to Pan • Double-click to Reset
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
