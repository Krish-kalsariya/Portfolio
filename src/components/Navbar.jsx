import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { useScrollPosition, useActiveSection } from '../hooks/useScrollPosition';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const { isScrolled } = useScrollPosition();
  const activeSection = useActiveSection(['home', 'about', 'skills', 'projects', 'journey', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ 
          backgroundColor: isScrolled ? 'var(--bg-secondary)' : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none'
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl overflow-hidden`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="text-xl md:text-2xl font-bold gradient-text cursor-pointer max-w-[150px] md:max-w-[200px] truncate"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Krish
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{ backgroundColor: 'var(--card-hover)' }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Resume Button & Theme Toggle */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <motion.a
                href={personalInfo.resume}
                download
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold rounded-lg"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                Resume
              </motion.a>
            </div>

            {/* Mobile Theme Toggle & Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[var(--text-primary)]"
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-[280px] border-l p-6 pt-20"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)'
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className={`text-lg font-medium py-3 border-b ${
                      activeSection === link.href.slice(1)
                        ? 'text-indigo-400'
                        : 'text-[var(--text-primary)] hover:text-indigo-400'
                    }`}
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <motion.a
                  href={personalInfo.resume}
                  download
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-2 mt-6 px-5 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold rounded-lg"
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
