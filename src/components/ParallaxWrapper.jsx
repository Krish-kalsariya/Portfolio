import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxWrapper = ({ 
  children, 
  className = '',
  speed = 0.5, // -1 to 1, negative moves slower, positive moves faster
  direction = 'vertical', // 'vertical', 'horizontal'
  start = 'top bottom',
  end = 'bottom top'
}) => {
  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const distance = 100 * speed;
      
      gsap.fromTo(wrapperRef.current,
        { 
          [direction === 'vertical' ? 'y' : 'x']: -distance 
        },
        {
          [direction === 'vertical' ? 'y' : 'x']: distance,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: start,
            end: end,
            scrub: true
          }
        }
      );
    }, wrapperRef);

    return () => {
      ctx.revert();
    };
  }, [speed, direction, start, end]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxWrapper;
