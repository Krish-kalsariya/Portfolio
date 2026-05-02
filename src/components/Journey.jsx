import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket, Calendar, MapPin, Award, History, TrendingUp } from 'lucide-react';
import TextReveal from './TextReveal';
import TiltCard from './TiltCard';
import StaggerContainer from './StaggerContainer';
import GradientOrb from './GradientOrb';
import { journeyData } from '../data/portfolioData';

const Journey = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'experience':
        return Briefcase;
      case 'project':
        return Rocket;
      default:
        return Calendar;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education':
        return 'bg-indigo-500';
      case 'experience':
        return 'bg-violet-500';
      case 'project':
        return 'bg-pink-500';
      default:
        return 'bg-emerald-500';
    }
  };

  return (
    <section id="journey" className="relative py-24 md:py-40 overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientOrb 
          color="indigo" 
          size={450} 
          blur={120} 
          opacity={0.1}
          className="top-1/3 -left-32"
        />
        <GradientOrb 
          color="violet" 
          size={350} 
          blur={100} 
          opacity={0.08}
          className="bottom-1/3 -right-20"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header with TextReveal */}
        <div className="text-center mb-20">
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium text-indigo-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <History className="w-4 h-4" />
            Experience & Education
          </motion.span>
          
          <TextReveal 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 font-display"
            splitBy="words"
          >
            My Professional Journey
          </TextReveal>
          
          <TextReveal 
            className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto"
            splitBy="words"
            delay={0.2}
          >
            From academic foundations to real-world application development.
          </TextReveal>
        </div>

        {/* Education & Experience Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="glass-premium rounded-3xl p-8 h-full" tiltStrength={5}>
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 font-display">Education</h3>
                  <p className="text-[var(--text-secondary)]">Building the foundation</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-indigo-500/30">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 -translate-x-[9px] shadow-lg shadow-indigo-500/30" />
                  
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <Calendar className="w-3 h-3" />
                      {journeyData.education.period}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                    {journeyData.education.degree}
                  </h4>
                  
                  <p className="text-[var(--text-secondary)] mb-3 flex items-center gap-2">
                    <MapPin size={14} className="text-indigo-400" />
                    {journeyData.education.institution}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm glass-card rounded-xl px-4 py-2 inline-flex">
                    <Award size={16} className="text-yellow-500" />
                    <span className="text-[var(--text-secondary)]">CGPA: </span>
                    <span className="text-[var(--text-primary)] font-semibold">{journeyData.education.cgpa}</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="glass-premium rounded-3xl p-8 h-full" tiltStrength={5}>
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 font-display">Experience</h3>
                  <p className="text-[var(--text-secondary)]">Applying skills in real-world</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-violet-500/30">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 -translate-x-[9px] shadow-lg shadow-violet-500/30" />
                  
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      <Calendar className="w-3 h-3" />
                      {journeyData.experience.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <TrendingUp className="w-3 h-3" />
                      {journeyData.experience.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
                    {journeyData.experience.role}
                  </h4>
                  
                  <p className="text-[var(--text-secondary)] mb-3 font-medium">
                    @{journeyData.experience.company}
                  </p>
                  
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {journeyData.experience.description}
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Premium Timeline */}
        <div className="mt-20">
          <TextReveal 
            className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] text-center mb-12 font-display"
            splitBy="words"
          >
            Journey Timeline
          </TextReveal>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Premium Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-violet-500 to-pink-500 md:-translate-x-1/2 rounded-full shadow-lg shadow-indigo-500/20" />

            <StaggerContainer 
              className="space-y-12"
              stagger={0.2}
              delay={0.3}
              childSelector=".timeline-item"
            >
              {journeyData.timeline.map((item, index) => {
                const Icon = getIcon(item.type);
                const typeColor = getTypeColor(item.type);
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={item.title}
                    className={`timeline-item relative flex items-start gap-6 md:gap-0 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    <div className={`absolute left-4 md:left-1/2 w-10 h-10 rounded-full ${typeColor} flex items-center justify-center z-10 md:-translate-x-1/2 shadow-lg shadow-current/30 ring-4 ring-[var(--bg-primary)]`}>
                      <Icon size={18} className="text-white" />
                    </div>

                    {/* Content Card */}
                    <div className={`ml-20 md:ml-0 md:w-5/12 ${
                      isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                    }`}>
                      <motion.div 
                        className="glass-card rounded-2xl p-5 group cursor-default"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] mb-3">
                          {item.year}
                        </span>
                        <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2 font-display group-hover:text-indigo-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-5/12" />
                  </motion.div>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
