import { useState, useEffect } from 'react';
import './styles/index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import GithubStats from './components/GithubStats';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload fonts
    document.fonts.ready.then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <PageLoader onLoadingComplete={handleLoadingComplete} />}

    <ThemeProvider>
      <div className="relative min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <GithubStats />
        <Resume />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
