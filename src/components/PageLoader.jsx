import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const PageLoader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let progressInterval;
    let completeTimeout;

    const startLoading = () => {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          const increment = Math.random() * 15 + 5;
          return Math.min(prev + increment, 100);
        });
      }, 150);
    };

    startLoading();

    completeTimeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsVisible(false);
          if (onLoadingComplete) onLoadingComplete();
        }, 800);
      }, 400);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-800 ease-out ${
        isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-30"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main loader container */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Spinning rings */}
        <div className="relative w-32 h-32">
          {/* Outer ring */}
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              animation: 'spin 3s linear infinite',
            }}
          />
          
          {/* Middle ring */}
          <div
            className="absolute inset-2 rounded-full border-3 border-transparent"
            style={{
              background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              animation: 'spin-reverse 2s linear infinite',
            }}
          />
          
          {/* Inner ring */}
          <div
            className="absolute inset-4 rounded-full border-2 border-transparent"
            style={{
              background: 'linear-gradient(225deg, #4facfe 0%, #00f2fe 100%) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              animation: 'spin 1.5s linear infinite',
            }}
          />

          {/* Center pulse */}
          <div
            className="absolute inset-8 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          />
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2
            className="text-2xl font-bold mb-2 tracking-wider"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            LOADING
          </h2>
          <p className="text-gray-400 text-sm tracking-widest">{personalInfo.name.toUpperCase()}</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden relative">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out relative"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            }}
          >
            <div
              className="absolute right-0 top-0 h-full w-4 rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8))',
                animation: 'shimmer 1s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Progress percentage */}
        <div
          className="text-4xl font-bold"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {Math.round(progress)}%
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(0); }
          100% { transform: translateX(20px); }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
