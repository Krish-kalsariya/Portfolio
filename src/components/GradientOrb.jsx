import { motion } from 'framer-motion';

const GradientOrb = ({ 
  color = 'indigo',
  size = 400,
  blur = 120,
  opacity = 0.3,
  className = '',
  animate = true
}) => {
  const colorMap = {
    indigo: 'bg-indigo-500',
    violet: 'bg-violet-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    blue: 'bg-blue-500',
    cyan: 'bg-cyan-500',
    emerald: 'bg-emerald-500',
    orange: 'bg-orange-500'
  };

  const baseClass = colorMap[color] || colorMap.indigo;

  if (!animate) {
    return (
      <div 
        className={`absolute rounded-full pointer-events-none ${baseClass} ${className}`}
        style={{
          width: size,
          height: size,
          filter: `blur(${blur}px)`,
          opacity
        }}
      />
    );
  }

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${baseClass} ${className}`}
      style={{
        width: size,
        height: size,
        filter: `blur(${blur}px)`,
        opacity
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default GradientOrb;
