import React, { useState, useEffect } from 'react';

const MouseGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${mousePosition.x - 20}px`,
        top: `${mousePosition.y - 20}px`,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #F94800 0%, #FF8A00 40%, transparent 80%)',
        opacity: 0.09,
        transition: 'left 0.2s, top 0.2s',
      }}
    />
  );
};

export default MouseGlow;
