import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({ 
  children, 
  className = '',
  tiltStrength = 10,
  glareOpacity = 0.15
}) => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    
    setRotateX((0.5 - y) * tiltStrength);
    setRotateY((x - 0.5) * tiltStrength);
    setGlarePosition({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ 
        rotateX, 
        rotateY,
        transformPerspective: 1000 
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`relative ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      
      {/* Glare Effect */}
      <div 
        className={`absolute inset-0 rounded-inherit pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 50%)`,
          borderRadius: 'inherit'
        }}
      />
    </motion.div>
  );
};

export default TiltCard;
