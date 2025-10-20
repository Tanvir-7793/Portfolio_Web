"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { PT_Serif } from 'next/font/google';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm py-3' : 'bg-transparent py-5'
      } ${isOpen ? 'bg-black/95 backdrop-blur-xl' : ''}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex-shrink-0">
          <Link href="/" className={`text-2xl font-bold text-white ${ptSerif.className}`}>Tanvir</Link>
        </div>
        
        {/* Navigation Links - Center */}
        <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <Link href="#home" className="text-white hover:text-blue-400 transition-colors">Home</Link>
          <Link href="#about" className="text-white hover:text-blue-400 transition-colors">About</Link>
          <Link href="#projects" className="text-white hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="#education" className="text-white hover:text-blue-400 transition-colors">Education</Link>
          <Link href="#skills" className="text-white hover:text-blue-400 transition-colors">Skills</Link>
          <Link href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link>
        </nav>

        {/* Download CV Button - Right */}
        <div className="flex-shrink-0">
          <a 
            href="https://drive.google.com/file/d/1tW-NdhR9j83pNLH0p32KU3HfrNoG7o2H/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden relative z-50" ref={menuRef}>
          <button 
            onClick={toggleMenu}
            className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-transparent hover:bg-white/5'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 -translate-y-2`}></span>
            <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300`}></span>
            <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 translate-y-2`}></span>
          </button>
          
          {/* Full-screen mobile menu */}
          <div 
            className={`fixed inset-0 h-screen w-full bg-gradient-to-br from-gray-900 to-black z-40 transition-all duration-500 ease-in-out transform ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
            }`}
            style={{
              clipPath: isOpen ? 'circle(150% at 90% 40px)' : 'circle(0% at 90% 40px)'
            }}
          >
            {/* Close button */}
            <button 
              onClick={toggleMenu}
              className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center justify-center h-full px-6 space-y-8 pt-16">
              <nav className="flex flex-col items-center space-y-8 text-center">
                {['Home', 'About', 'Projects', 'Education', 'Skills', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-2xl font-medium text-white/90 hover:text-white transition-colors duration-300 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative group-hover:scale-110 transition-transform duration-300 block py-2">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                ))}
                
                {/* Download CV button for mobile */}
                <a 
                  href="https://drive.google.com/file/d/1tW-NdhR9j83pNLH0p32KU3HfrNoG7o2H/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium flex items-center space-x-2 hover:shadow-lg hover:scale-105 transform transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Download CV</span>
                  <FaExternalLinkAlt className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                </a>
              </nav>
              
              {/* Social links */}
              <div className="flex space-x-6 mb-8">
                {[
                  { name: 'GitHub', url: 'https://github.com/Tanvir-7793', icon: <FaGithub className="w-5 h-5" /> },
                                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tanvir-mujawar-7573012aa/', icon: <FaLinkedin className="w-5 h-5" /> },
                                    { name: 'Twitter', url: 'https://x.com/TMujawar7793', icon: <FaTwitter className="w-5 h-5" /> },
                                    { name: 'Instagram', url: 'https://www.instagram.com/mr.tanveer_7793/', icon: <FaInstagram className="w-5 h-5" /> },
                                    { name: 'LeetCode', url: 'https://leetcode.com/u/qVbYWaKxUg/', icon: <SiLeetcode className="w-5 h-5" /> }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.name}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:scale-110">
                      <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                        {social.icon}
                      </span>
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/60 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
