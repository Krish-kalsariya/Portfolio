import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Sparkles, FolderGit2, ArrowUpRight } from 'lucide-react';
import TextReveal from './TextReveal';
import TiltCard from './TiltCard';
import StaggerContainer from './StaggerContainer';
import GradientOrb from './GradientOrb';
import MagneticButton from './MagneticButton';
import { projectsData, personalInfo } from '../data/portfolioData';

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <TiltCard 
          className="group glass-premium rounded-3xl overflow-hidden h-full cursor-default"
          tiltStrength={8}
        >
          {/* Project Image/Visual - Premium Design */}
          <div className="relative h-56 sm:h-64 overflow-hidden">
            {/* Dynamic Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-pink-500/30" />
            <div className="absolute inset-0 grid-pattern opacity-40" />
            
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 0.9 }}
            />
            
            {/* Category Badge */}
            <div className="absolute top-5 right-5 z-10">
              <span className="px-4 py-1.5 text-xs font-semibold rounded-full glass-premium text-[var(--text-primary)] border-indigo-500/30">
                {project.category}
              </span>
            </div>
            
            {/* Project Icon Visual - Centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-24 h-24 rounded-3xl glass-premium border border-white/20 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-12 h-12 text-indigo-400" />
              </motion.div>
            </div>

            {/* Premium Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/90 to-[var(--bg-primary)]/50 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="flex gap-4">
                <MagneticButton strength={0.15}>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 btn-premium rounded-xl font-medium"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                </MagneticButton>
                
                <MagneticButton strength={0.15}>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 glass-premium text-white rounded-xl font-medium hover:bg-[var(--glass-hover)] transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                </MagneticButton>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 font-display group-hover:text-indigo-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-indigo-400 text-sm font-medium">
                  {project.tagline}
                </p>
              </div>
              
              {/* Arrow indicator on hover */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="text-[var(--text-muted)] group-hover:text-indigo-400 transition-colors"
              >
                <ArrowUpRight size={24} />
              </motion.div>
            </div>

            <p className="text-[var(--text-secondary)] text-sm md:text-base mb-5 leading-relaxed">
              {project.description}
            </p>

            {/* Features - Styled better */}
            <div className="mb-5">
              <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <ChevronRight size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack - Premium Pills */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="badge-premium hover:border-indigo-500/30 hover:text-[var(--text-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex gap-3 mt-6 sm:hidden">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 btn-premium rounded-xl font-medium"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 glass-premium rounded-xl"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </TiltCard>
      </motion.div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientOrb 
          color="pink" 
          size={500} 
          blur={120} 
          opacity={0.1}
          className="top-1/4 -left-32"
        />
        <GradientOrb 
          color="violet" 
          size={400} 
          blur={100} 
          opacity={0.08}
          className="bottom-1/4 -right-20"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header with TextReveal */}
        <div className="text-center mb-20">
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium text-pink-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FolderGit2 className="w-4 h-4" />
            Featured Work
          </motion.span>
          
          <TextReveal 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 font-display"
            splitBy="words"
          >
            Projects I've Built
          </TextReveal>
          
          <TextReveal 
            className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto"
            splitBy="words"
            delay={0.2}
          >
            Real-world applications demonstrating my expertise in full-stack development.
          </TextReveal>
        </div>

        {/* Projects Grid with Stagger Animation */}
        <StaggerContainer 
          className="grid md:grid-cols-2 gap-8"
          stagger={0.2}
          delay={0.3}
          childSelector=".project-wrapper"
        >
          {projectsData.map((project, index) => (
            <div key={project.id} className="project-wrapper">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </StaggerContainer>

        {/* View More CTA - Premium */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MagneticButton strength={0.2}>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 glass-premium rounded-xl font-semibold text-lg hover:bg-[var(--glass-hover)] transition-colors group"
            >
              <Github size={20} />
              <span>View More on GitHub</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
