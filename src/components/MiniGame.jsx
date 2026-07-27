import React, { useState, useEffect, useRef } from 'react';
import './MiniGame.css';

const MiniGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      // Create canvas for Usagi
      const canvas = document.createElement('canvas');
      canvas.id = 'canvas';
      canvas.className = 'usagi-canvas';
      // Required for Usagi to find the canvas
      canvas.oncontextmenu = (e) => e.preventDefault();
      containerRef.current.appendChild(canvas);

      let started = false;

      window.Module = {
        canvas: canvas,
        noInitialRun: true,
        locateFile: function(path) {
          if (path.endsWith('.wasm')) return '/usagi-web/' + path;
          return path;
        },
        onRuntimeInitialized: async function() {
          if (started) return;
          started = true;
          try {
            const res = await fetch('/usagi-web/game.usagi');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const bytes = new Uint8Array(await res.arrayBuffer());
            window.Module.FS.writeFile('/game.usagi', bytes);
            
            if (window.Module.audioContext && window.Module.audioContext.state === 'suspended') {
              window.Module.audioContext.resume();
            }
            window.Module.callMain([]);
          } catch (e) {
            console.error('Usagi initialization failed:', e);
          }
        }
      };

      // Load Usagi WASM glue script
      const script = document.createElement('script');
      script.src = '/usagi-web/usagi.js';
      script.async = true;
      document.body.appendChild(script);

      // Prevent scrolling when pressing game keys
      const handleKeyDown = (e) => {
        if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
          e.preventDefault();
        }
      };
      window.addEventListener('keydown', handleKeyDown, { passive: false });

      return () => {
        // Cleanup on unmount
        if (containerRef.current && canvas.parentNode === containerRef.current) {
          containerRef.current.removeChild(canvas);
        }
        document.body.removeChild(script);
        window.removeEventListener('keydown', handleKeyDown);
        delete window.Module;
      };
    }
  }, [isPlaying]);

  return (
    <div className="minigame-wrapper">
      {!isPlaying ? (
        <div className="minigame-placeholder">
          <div className="minigame-overlay">
            <h3>Flappy Bunny</h3>
            <p>A lightweight Lua game built with Usagi Engine</p>
            <button className="play-button" onClick={() => setIsPlaying(true)}>
              Play Game
            </button>
          </div>
        </div>
      ) : (
        <div className="minigame-container" ref={containerRef}>
          {/* Canvas will be injected here */}
        </div>
      )}
    </div>
  );
};

export default MiniGame;
