import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';
import { personalInfo } from '../data/portfolioData';

const Resume = () => {
  const highlights = [
    "BCA Student with 7.36 CGPA",
    "MERN Stack Developer Intern at Platinum Tech",
    "Built 2 Full-Stack Production Projects",
    "Proficient in React, Node.js, MongoDB",
  ];

  return (
    <section id="resume" className="relative py-20 md:py-32">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
            Resume
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Download My Resume
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Get a detailed overview of my skills, projects, and experience
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <GlassCard className="p-8 md:p-12" glow="indigo">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left - Resume Preview Visual */}
                <div className="relative">
                  <div className="aspect-[3/4] max-w-[280px] mx-auto relative">
                    {/* Resume Stack Effect */}
                    <div className="absolute inset-0 bg-[var(--bg-tertiary)] rounded-lg transform rotate-3 translate-x-2 translate-y-2" />
                    <div className="absolute inset-0 bg-[var(--bg-secondary)] rounded-lg transform rotate-1 translate-x-1 translate-y-1" />
                    
                    {/* Main Resume Card */}
                    <div className="relative rounded-lg p-6 h-full border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--glass-border)' }}>
                      {/* Header */}
                      <div className="border-b pb-4 mb-4" style={{ borderColor: 'var(--glass-border)' }}>
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 mx-auto mb-3" />
                        <div className="h-4 bg-[var(--text-muted)] rounded w-3/4 mx-auto mb-2" />
                        <div className="h-3 bg-[var(--text-secondary)] rounded w-1/2 mx-auto" />
                      </div>
                      
                      {/* Content Lines */}
                      <div className="space-y-3">
                        <div className="h-3 bg-[var(--text-secondary)] rounded w-full" />
                        <div className="h-3 bg-[var(--text-secondary)] rounded w-5/6" />
                        <div className="h-3 bg-[var(--text-secondary)] rounded w-4/5" />
                        <div className="h-3 bg-[var(--text-secondary)] rounded w-full" />
                        <div className="h-3 bg-[var(--text-secondary)] rounded w-3/4" />
                      </div>
                      
                      {/* Skills Section */}
                      <div className="mt-6 pt-4 border-t" style={{ borderColor: 'var(--glass-border)' }}>
                        <div className="h-3 bg-[var(--text-muted)] rounded w-1/3 mb-3" />
                        <div className="flex flex-wrap gap-2">
                          <div className="h-6 bg-indigo-500/30 rounded-full w-16" />
                          <div className="h-6 bg-violet-500/30 rounded-full w-20" />
                          <div className="h-6 bg-pink-500/30 rounded-full w-14" />
                          <div className="h-6 bg-indigo-500/30 rounded-full w-18" />
                        </div>
                      </div>

                      {/* Corner Badge */}
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                        <FileText size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Download CTA */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                      {personalInfo.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      A dedicated MERN Stack Developer with hands-on experience in building 
                      scalable web applications. Download my resume to learn more about my 
                      technical skills, projects, and professional journey.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-[var(--text-secondary)] text-sm"
                      >
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                        <span className="text-zinc-300 text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Download Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.a
                      href={personalInfo.resume}
                      download
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold rounded-xl"
                    >
                      <Download size={20} />
                      Download Resume
                    </motion.a>
                    
                    <motion.a
                      href={personalInfo.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <ExternalLink size={20} />
                      View Online
                    </motion.a>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] text-center sm:text-left">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Resume;
