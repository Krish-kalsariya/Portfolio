import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolioData';
import GradientOrb from './GradientOrb';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo('.hero-badge', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
      .fromTo('.hero-title', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        '-=0.6'
      )
      .fromTo('.hero-role', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.7 }, 
        '-=0.5'
      )
      .fromTo('.hero-desc', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.7 }, 
        '-=0.5'
      )
      .fromTo('.hero-cta', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.7 }, 
        '-=0.5'
      )
      .fromTo('.hero-social', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6 }, 
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Premium Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientOrb 
          color="indigo" 
          size={600} 
          blur={150} 
          opacity={0.25}
          className="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
        />
        <GradientOrb 
          color="violet" 
          size={500} 
          blur={130} 
          opacity={0.2}
          className="bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3"
        />
        <GradientOrb 
          color="pink" 
          size={400} 
          blur={100} 
          opacity={0.15}
          className="top-1/2 right-1/3"
        />
        {/* Additional subtle orbs */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-[60px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern with Parallax */}
      <motion.div 
        className="absolute inset-0 grid-pattern opacity-20"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
      />

      {/* Content with Scroll Parallax */}
      <motion.div 
        ref={contentRef}
        className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-20"
        style={{ opacity, scale, y }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting Badge */}
          <div className="hero-badge mb-6">
            <motion.span 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium text-[var(--text-secondary)] text-sm font-medium animate-border-glow"
              whileHover={{ scale: 1.02 }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for opportunities
            </motion.span>
          </div>

          {/* Name with Premium Typography */}
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--text-primary)] mb-6 tracking-tight font-display overflow-hidden">
            <span className="block sm:inline">Hi, I'm</span>{' '}
            <span className="gradient-text-animated glow-text block sm:inline truncate max-w-full">Krish Kalsariya</span>
          </h1>

          {/* Role with Typewriter */}
          <div className="hero-role text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--text-secondary)] mb-8 h-14 font-display">
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2500,
                'Full Stack Developer',
                2500,
                'React Specialist',
                2500,
                'Node.js Expert',
                2500,
                'UI/UX Enthusiast',
                2500,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="font-semibold"
            />
          </div>

          {/* Premium Description */}
          <p className="hero-desc text-[var(--text-secondary)] text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
            Crafting exceptional digital experiences with modern web technologies.
            Specializing in building scalable, performant applications that delight users.
          </p>

          {/* Premium CTA Buttons with Magnetic Effect */}
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <MagneticButton strength={0.2}>
              <motion.button
                onClick={scrollToProjects}
                className="group flex items-center gap-3 px-10 py-4 btn-premium rounded-xl text-lg"
                whileTap={{ scale: 0.98 }}
              >
                <span>View Projects</span>
                <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
            </MagneticButton>
            
            <div className="flex gap-4">
              <MagneticButton strength={0.15}>
                <motion.a
                  href={personalInfo.resume}
                  download
                  className="flex items-center gap-2 px-7 py-4 glass-premium rounded-xl text-[var(--text-primary)] font-semibold hover:bg-[var(--glass-hover)] transition-all duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  <span>Resume</span>
                </motion.a>
              </MagneticButton>
              
              <MagneticButton strength={0.15}>
                <motion.button
                  onClick={scrollToContact}
                  className="flex items-center gap-2 px-7 py-4 glass-premium rounded-xl text-[var(--text-primary)] font-semibold hover:bg-[var(--glass-hover)] transition-all duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={18} />
                  <span>Contact</span>
                </motion.button>
              </MagneticButton>
            </div>
          </div>

          {/* Premium Social Links */}
          <div className="hero-social flex items-center justify-center gap-8">
            <MagneticButton strength={0.1}>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 glass-card rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <Github size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </motion.a>
            </MagneticButton>
            
            <MagneticButton strength={0.1}>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 glass-card rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <Linkedin size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </motion.a>
            </MagneticButton>
            
            <MagneticButton strength={0.1}>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-2 px-5 py-3 glass-card rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <Mail size={20} />
                <span className="text-sm font-medium">Email</span>
              </motion.a>
            </MagneticButton>
          </div>
        </div>
      </motion.div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-[var(--text-muted)] cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs uppercase tracking-[0.2em] group-hover:text-[var(--text-secondary)] transition-colors">Explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-current rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
