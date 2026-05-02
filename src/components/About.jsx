import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Globe, Zap, MapPin, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import TextReveal from './TextReveal';
import TiltCard from './TiltCard';
import StaggerContainer from './StaggerContainer';
import GradientOrb from './GradientOrb';
import { aboutData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, well-documented code following industry best practices and design patterns.",
      gradient: "from-indigo-500/20 to-violet-500/20"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient MongoDB schemas, optimizing queries, and ensuring data integrity.",
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      icon: Globe,
      title: "Full Stack",
      description: "Building complete applications from responsive frontend to scalable backend architecture.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for lightning-fast load times and smooth user experiences.",
      gradient: "from-pink-500/20 to-rose-500/20"
    }
  ];

  const quickInfo = [
    { icon: MapPin, label: "Location", value: "Surat, Gujarat" },
    { icon: GraduationCap, label: "Education", value: "BCA (Pursuing)" },
    { icon: Briefcase, label: "Experience", value: "3 Months Internship" },
    { icon: Sparkles, label: "Status", value: "Available", highlight: true }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats counter animation
      const stats = statsRef.current?.querySelectorAll('.stat-value');
      stats?.forEach((stat, index) => {
        const target = stat.getAttribute('data-value');
        gsap.fromTo(stat,
          { textContent: '0' },
          {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: 'top 80%',
              once: true
            },
            delay: index * 0.1
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientOrb 
          color="indigo" 
          size={400} 
          blur={100} 
          opacity={0.15}
          className="top-1/4 -left-20"
        />
        <GradientOrb 
          color="violet" 
          size={300} 
          blur={80} 
          opacity={0.1}
          className="bottom-1/4 -right-10"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header with Text Reveal */}
        <div className="text-center mb-20">
          <motion.span 
            className="inline-block px-5 py-2.5 rounded-full glass-premium text-indigo-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.span>
          
          <TextReveal 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 font-display"
            splitBy="words"
          >
            Crafting Digital Excellence
          </TextReveal>
          
          <TextReveal 
            className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto"
            splitBy="words"
            delay={0.2}
          >
            A passionate developer dedicated to creating exceptional digital experiences that make a difference.
          </TextReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="glass-premium rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] font-display">
                    Professional Summary
                  </h3>
                </div>
                
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-base md:text-lg">
                  {aboutData.bio}
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg">
                  {aboutData.objective}
                </p>
              </TiltCard>
            </motion.div>

            {/* Stats with Counter Animation */}
            <div ref={statsRef}>
              <StaggerContainer 
                className="grid grid-cols-3 gap-4"
                stagger={0.1}
                delay={0.2}
              >
                {aboutData.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="stagger-item text-center p-5 rounded-2xl glass-card group cursor-default"
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 font-display">
                      <span className="stat-value" data-value={stat.value.replace(/\D/g, '')}>
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-xs md:text-sm text-[var(--text-muted)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* Right Column - Features Grid with Stagger Animation */}
          <div className="space-y-8">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] font-display"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What I Do Best
            </motion.h3>
            
            <StaggerContainer 
              className="grid sm:grid-cols-2 gap-5"
              stagger={0.15}
              childSelector=".feature-card"
            >
              {features.map((feature) => (
                <TiltCard
                  key={feature.title}
                  className="feature-card glass-card rounded-2xl p-6 h-full group cursor-default"
                  tiltStrength={8}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2 font-display">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </TiltCard>
              ))}
            </StaggerContainer>

            {/* Key Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TiltCard className="glass-card rounded-2xl p-6 md:p-8">
                <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-6 font-display">
                  Key Strengths
                </h4>
                <StaggerContainer 
                  className="space-y-4"
                  stagger={0.1}
                  delay={0.2}
                  childSelector=".strength-item"
                >
                  {aboutData.strengths.map((strength) => (
                    <div
                      key={strength}
                      className="strength-item flex items-center gap-4 text-[var(--text-secondary)] group"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 group-hover:scale-150 transition-transform" />
                      <span className="group-hover:text-[var(--text-primary)] transition-colors">
                        {strength}
                      </span>
                    </div>
                  ))}
                </StaggerContainer>
              </TiltCard>
            </motion.div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <StaggerContainer 
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          stagger={0.1}
          delay={0.3}
          childSelector=".info-card"
        >
          {quickInfo.map((info) => (
            <motion.div
              key={info.label}
              className={`info-card glass-card rounded-2xl p-5 group cursor-default ${info.highlight ? 'border-emerald-500/30' : ''}`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${info.highlight ? 'bg-emerald-500/20' : 'bg-gradient-to-br from-indigo-500/20 to-violet-500/20'}`}>
                  <info.icon className={`w-5 h-5 ${info.highlight ? 'text-emerald-400' : 'text-indigo-400'}`} />
                </div>
                <span className="text-sm text-[var(--text-muted)]">{info.label}</span>
              </div>
              <div className={`font-semibold ${info.highlight ? 'text-emerald-400' : 'text-[var(--text-primary)]'}`}>
                {info.highlight ? (
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {info.value}
                  </span>
                ) : info.value}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;
