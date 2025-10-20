'use client';

import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function Preloader() {
  const [init, setInit] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Initialize particles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle configuration - matching hero section
  const particlesOptions: ISourceOptions = useMemo(() => ({
    background: { color: { value: 'transparent' } },
    fullScreen: { enable: false },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#ffffff' },
      links: {
        color: '#ffffff',
        distance: 180,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: { default: OutMode.out },
        speed: 2,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50, // Slightly fewer particles for performance
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  }), []);

  useEffect(() => {
    // Simulate loading with easing for smoother animation
    const duration = 3000; // 3 seconds total
    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const updateProgress = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      const easedProgress = easeOutCubic(progress);
      
      setProgress(Math.floor(easedProgress * 100));
      
      if (now < endTime) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setIsVisible(false);
        setTimeout(() => setShowContent(true), 500);
      }
    };
    
    // Easing function for smooth animation
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };
    
    const animationFrame = requestAnimationFrame(updateProgress);
    
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  if (showContent) return null;

  return (
    <div 
      className={`fixed inset-0 bg-gray-900 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Particle Background */}
      {init && (
        <Particles
          id="preloader-particles"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}
      
      {/* Preloader Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/50 backdrop-blur-sm">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-mono text-white mb-4">
            {progress < 20 && 'Initializing...'}
            {progress >= 20 && progress < 50 && 'Loading components...'}
            {progress >= 50 && progress < 80 && 'Optimizing...'}
            {progress >= 80 && 'Almost there...'}
          </div>
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
            {progress}%
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden mb-6 mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Animated code brackets */}
          <div className="text-gray-400 text-sm font-mono flex justify-center space-x-6 mt-12">
            <div className="animate-pulse" style={{ animationDelay: '0s' }}>&#123; &#125;</div>
            <div className="animate-pulse" style={{ animationDelay: '0.2s' }}>[ ]</div>
            <div className="animate-pulse" style={{ animationDelay: '0.4s' }}>&lt; &gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
