import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import GradientOrb from './GradientOrb';
import { personalInfo, navLinks } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-indigo-400' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 md:py-24 overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientOrb 
          color="indigo" 
          size={300} 
          blur={80} 
          opacity={0.05}
          className="bottom-0 left-1/4"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <a 
                  href="#home" 
                  onClick={(e) => { e.preventDefault(); scrollToTop(); }} 
                  className="text-3xl font-bold gradient-text-animated font-display inline-flex items-center gap-2"
                >
                  {personalInfo.name}
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </a>
                <p className="text-[var(--text-secondary)] text-sm mt-4 leading-relaxed">
                  MERN Stack Developer passionate about building scalable web applications 
                  and creating exceptional digital experiences that make a difference.
                </p>
                <p className="text-[var(--text-muted)] text-xs mt-4">
                  Based in Surat, Gujarat, India
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[var(--text-primary)] font-semibold mb-6 font-display text-lg">Quick Links</h4>
                <ul className="space-y-3">
                  {navLinks.slice(0, 6).map((link, index) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                        className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-all duration-300 link-underline inline-block hover:translate-x-1"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Social & Contact */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[var(--text-primary)] font-semibold mb-6 font-display text-lg">Connect With Me</h4>
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((social) => (
                    <MagneticButton key={social.label} strength={0.15}>
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center text-[var(--text-secondary)] ${social.color} transition-colors`}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    </MagneticButton>
                  ))}
                </div>
                <div className="glass-premium rounded-xl p-4">
                  <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-1">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-[var(--text-primary)] font-medium hover:text-indigo-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-[var(--text-muted)] text-sm flex items-center gap-2">
              Crafted with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by 
              <span className="text-[var(--text-secondary)] font-medium">{personalInfo.name}</span>
            </p>

            <p className="text-[var(--text-muted)] text-sm">
              &copy; {currentYear} All rights reserved.
            </p>

            {/* Scroll to Top */}
            <MagneticButton strength={0.2}>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl glass-premium flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-indigo-500/50 transition-colors group"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
