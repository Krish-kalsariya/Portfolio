import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TextReveal = ({ 
  children, 
  className = '',
  delay = 0,
  duration = 0.8,
  splitBy = 'words',
  stagger = 0.05,
  yOffset = 30,
  once = true
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once, margin: "-100px" });
  
  // Split text into words for animation
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: yOffset 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: duration,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  if (splitBy === 'words' && text) {
    return (
      <motion.div
        ref={containerRef}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden mr-[0.3em]">
            <motion.span
              className="inline-block"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.div>
    );
  }

  // Fallback for non-split or char splitting
  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;
