import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  glowColor = 'indigo'
}) => {
  const baseClasses = `
    backdrop-blur-xl 
    border 
    rounded-2xl 
    overflow-hidden
    ${className}
  `;

  const themeStyles = {
    backgroundColor: 'var(--glass-bg)',
    borderColor: 'var(--glass-border)'
  };

  const glowClasses = glow ? {
    indigo: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]',
    violet: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
    pink: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]'
  }[glowColor] : '';

  if (hover) {
    return (
      <motion.div
        className={`${baseClasses} ${glowClasses}`}
        style={themeStyles}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses} style={themeStyles}>
      {children}
    </div>
  );
};

export default GlassCard;
