import React, { useState, useRef, useEffect } from 'react';

const useAnchorPoint = () => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 100, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 100, y: 300 });
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const updateAnchorPoint = () => {
      const width = window.innerWidth;
      setIsMd(width >= 768);

      if (width >= 768) {
        setAnchorPoint({ x: width * 0.75, y: 0 });
        setInitialPosition({ x: width * 0.66, y: 250 });
      } else if (width >= 640) {
        setAnchorPoint({ x: width * 0.5, y: 0 });
        setInitialPosition({ x: width * 0.4, y: 120 });
      } else {
        setAnchorPoint({ x: 250, y: 10 });
        setInitialPosition({ x: 145, y: 120 });
      }
    };

    updateAnchorPoint();
    window.addEventListener('resize', updateAnchorPoint);
    return () => window.removeEventListener('resize', updateAnchorPoint);
  }, []);

  return { anchorPoint, initialPosition, isMd };
};

const HangingCard = () => {
  const { anchorPoint, initialPosition, isMd } = useAnchorPoint();
  const photoRef = useRef(null);
  const [position, setPosition] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    setPosition(initialPosition);
  }, [initialPosition]);

  // Simulated bounce-back
  useEffect(() => {
    if (!dragging) {
      const duration = 800;
      const frameRate = 60;
      const totalFrames = Math.round((duration / 1000) * frameRate);
      const dx = (initialPosition.x - position.x) / totalFrames;
      const dy = (initialPosition.y - position.y) / totalFrames;
      let currentFrame = 0;
      const bounceFactor = 0.1;

      const animate = () => {
        currentFrame++;
        const bounce = Math.sin((currentFrame / totalFrames) * Math.PI) * bounceFactor;
        setPosition((prev) => ({
          x: prev.x + dx + bounce,
          y: prev.y + dy + bounce,
        }));
        if (currentFrame < totalFrames) {
          requestAnimationFrame(animate);
        } else {
          setPosition(initialPosition);
        }
      };

      if (
        Math.abs(initialPosition.x - position.x) > 1 ||
        Math.abs(initialPosition.y - position.y) > 1
      ) {
        requestAnimationFrame(animate);
      }
    }
  }, [dragging]);

  const yarnX = isMd ? position.x + 150 : position.x + 100;
  const yarnY = position.y;
  const dx = yarnX - anchorPoint.x;
  const dy = yarnY - anchorPoint.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <div
      className="w-full h-screen absolute z-50 top-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ perspective: '1500px' }}
    >
      {/* Anchor point */}
      <div
        className="absolute w-3 h-3 bg-black rounded-full"
        style={{
          left: `${anchorPoint.x - 1.5}px`,
          top: `${anchorPoint.y - 1.5}px`,
        }}
      />

      {/* Rope */}
      <div
        className="absolute bg-white"
        style={{
          width: `${length}px`,
          height: '3px',
          left: `${anchorPoint.x}px`,
          top: `${anchorPoint.y}px`,
          transform: `rotate(${angle}deg)`,
          transformOrigin: 'left center',
        }}
      />

      {/* Card (replaces GLB) */}
      <div
        ref={photoRef}
        onMouseDown={handleMouseDown}
        className="bg-white rounded-lg shadow-xl border cursor-grab select-none h-[200px] md:h-[300px] w-[200px] md:w-[300px] flex flex-col items-center justify-center"
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          transition: dragging
            ? 'none'
            : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: dragging
            ? 'rotateX(10deg) rotateY(10deg) scale(1.05)'
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transformStyle: 'preserve-3d',
        }}
      >
        <img
          src="/logo.jpg"
          alt="logo"
          className="h-2/3 w-2/3 object-contain"
        />
        <p className="text-center text-sm font-semibold mt-2">Nitish Singha</p>
      </div>
    </div>
  );
};

export default HangingCard;
