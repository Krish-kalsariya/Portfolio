import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StaggerContainer = ({ 
  children, 
  className = '',
  childClassName = '',
  stagger = 0.1,
  delay = 0,
  duration = 0.6,
  yOffset = 40,
  once = true,
  start = 'top 85%',
  childSelector = '.stagger-item'
}) => {
  const containerRef = useRef(null);
  const triggersRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll(childSelector);
      
      gsap.set(items, { 
        opacity: 0, 
        y: yOffset,
        scale: 0.95
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: start,
          once: once,
          onEnter: () => {
            tl.to(items, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: duration,
              stagger: stagger,
              ease: 'power3.out',
              delay: delay
            });
          }
        }
      });

      triggersRef.current.push(tl.scrollTrigger);
    }, containerRef);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, [stagger, delay, duration, yOffset, once, start, childSelector]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default StaggerContainer;
