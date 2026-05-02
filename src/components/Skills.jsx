import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Server, Database, Lightbulb, Sparkles } from 'lucide-react';
import TextReveal from './TextReveal';
import TiltCard from './TiltCard';
import StaggerContainer from './StaggerContainer';
import GradientOrb from './GradientOrb';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const sectionRef = useRef(null);

  const categoryIcons = {
    frontend: Layers,
    backend: Server,
    database: Database,
    tools: Sparkles,
    concepts: Lightbulb
  };

  const categoryColors = {
    frontend: 'from-indigo-500/20 to-violet-500/20',
    backend: 'from-violet-500/20 to-purple-500/20',
    database: 'from-purple-500/20 to-pink-500/20',
    tools: 'from-pink-500/20 to-rose-500/20',
    concepts: 'from-rose-500/20 to-orange-500/20'
  };

  const SkillBadge = ({ skill }) => {
    const barRef = useRef(null);
    const isBarInView = useInView(barRef, { once: true, margin: "-50px" });

    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -3 }}
        className="group relative cursor-default"
      >
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl glass-card group-hover:border-indigo-500/40 transition-all duration-300">
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-[var(--text-primary)] truncate">
                {skill.name}
              </span>
              <span className="text-xs text-[var(--text-muted)] ml-2">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full overflow-hidden bg-[var(--glass-bg)]">
              <motion.div
                ref={barRef}
                className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 rounded-full skill-bar-fill"
                initial={{ width: 0 }}
                animate={isBarInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const SkillCategory = ({ title, skills, categoryKey, index }) => {
    const Icon = categoryIcons[categoryKey] || Layers;
    const gradient = categoryColors[categoryKey] || 'from-indigo-500/20 to-violet-500/20';

    return (
      <TiltCard 
        className="glass-premium rounded-2xl p-6 md:p-8 h-full"
        tiltStrength={5}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] font-display">
              {title}
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              {skills.length} technologies
            </p>
          </div>
        </div>
        
        <StaggerContainer 
          className="space-y-3"
          stagger={0.08}
          delay={0.1}
          childSelector=".skill-item"
        >
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <SkillBadge skill={skill} />
            </div>
          ))}
        </StaggerContainer>
      </TiltCard>
    );
  };

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientOrb 
          color="violet" 
          size={500} 
          blur={120} 
          opacity={0.12}
          className="top-1/3 -right-32"
        />
        <GradientOrb 
          color="indigo" 
          size={400} 
          blur={100} 
          opacity={0.1}
          className="bottom-1/4 -left-20"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header with TextReveal */}
        <div className="text-center mb-20">
          <motion.span 
            className="inline-block px-5 py-2.5 rounded-full glass-premium text-violet-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills & Expertise
          </motion.span>
          
          <TextReveal 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 font-display"
            splitBy="words"
          >
            Technologies I Master
          </TextReveal>
          
          <TextReveal 
            className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto"
            splitBy="words"
            delay={0.2}
          >
            A comprehensive toolkit for building modern, scalable web applications that deliver results.
          </TextReveal>
        </div>

        {/* Skills Grid with Staggered Animation */}
        <StaggerContainer 
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          stagger={0.15}
          delay={0.2}
          childSelector=".category-card"
        >
          <div className="category-card">
            <SkillCategory 
              title="Frontend Development" 
              skills={skillsData.frontend} 
              categoryKey="frontend"
            />
          </div>
          <div className="category-card">
            <SkillCategory 
              title="Backend Development" 
              skills={skillsData.backend} 
              categoryKey="backend"
            />
          </div>
          <div className="category-card">
            <SkillCategory 
              title="Database & Storage" 
              skills={skillsData.database} 
              categoryKey="database"
            />
          </div>
        </StaggerContainer>

        {/* Tools & Concepts Row */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TiltCard className="glass-premium rounded-2xl p-6 md:p-8 h-full" tiltStrength={5}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-display">
                  Development Tools
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {skillsData.tools.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TiltCard className="glass-premium rounded-2xl p-6 md:p-8 h-full" tiltStrength={5}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-display">
                  Core Concepts
                </h3>
              </div>
              <div className="space-y-3">
                {skillsData.concepts.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Tech Stack Overview - Premium */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass-premium rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-violet-500/5 to-pink-500/5" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span className="text-sm text-indigo-400 font-medium uppercase tracking-wider">
                  Preferred Stack
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 font-display">
                The MERN Stack
              </h3>
              <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
                My go-to technology stack for building full-stack web applications
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                {[
                  { name: 'MongoDB', color: 'bg-emerald-500', icon: '🍃' },
                  { name: 'Express.js', color: 'bg-gray-400', icon: '⚡' },
                  { name: 'React', color: 'bg-blue-400', icon: '⚛️' },
                  { name: 'Node.js', color: 'bg-green-600', icon: '🟢' }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="group glass-card rounded-2xl px-6 py-4 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {tech.icon}
                      </span>
                      <div>
                        <span className="text-[var(--text-primary)] font-semibold block">
                          {tech.name}
                        </span>
                        <div className={`w-full h-1 rounded-full ${tech.color} mt-1 opacity-50`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
