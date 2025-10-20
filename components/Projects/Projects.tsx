"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const projects = [
  {
    title: 'AI Chatbot',
    description: 'An interactive AI chatbot for entertainment, featuring quizzes, jokes, and engaging conversations. Designed to make leisure time enjoyable with AI-powered responses.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Gemini API'],
    image: '/images/Ai Chatbot_project.png',
    github: 'https://github.com/Tanvir-7793/Ai-Chatbot',
    demo: 'https://ai-chatbot-7793.vercel.app/',
  },
  {
    title: 'AI Finance & Expense Tracker',
    description: 'SmartSpendSnap: AI-powered expense analyzer that tracks spending, analyzes bills via email, and provides real-time budgeting suggestions using Gemini API and OCR technology.',
    technologies: ['React', 'Tailwind CSS', 'Gemini API', 'OCR', 'Node.js', 'TypeScript'],
    image: '/images/Project2.png',
    github: 'https://github.com/Tanvir-7793/SmartSpendSnap',
    demo: 'https://github.com/Tanvir-7793/SmartSpendSnap',
  },
  {
    title: 'Durgamata Mandir Trust',
    description: 'A comprehensive website for Panchapali Haud Durgamata Mandir Charitable Trust, Satara, dedicated to preserving cultural heritage and supporting religious/charitable activities. The platform serves as a spiritual and community center hub.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Hostinger'],
    image: '/images/Project3.png',
    github: '#',
    demo: 'https://panchapalidurgamata.org/',
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Show only 3 projects initially, or all if showAll is true
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <motion.section 
      ref={ref}
      id="projects" 
      className="min-h-screen py-20 bg-gray-950 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-1 leading-tight">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Here are some of my recent projects. Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {displayedProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800/50 group"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-gray-900 flex items-center justify-center overflow-hidden relative">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  onError={(e) => {
                    // Fallback to first letter if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
                      `<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" preserveAspectRatio="none">
                        <rect width="100%" height="100%" fill="#1e40af" />
                        <text x="50%" y="50%" font-size="48" fill="white" text-anchor="middle" dy=".3em">${project.title.charAt(0)}</text>
                      </svg>`
                    );
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-xs text-gray-300 border border-blue-500/30 hover:border-blue-400/50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-4 border-t border-gray-700/50">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
                    aria-label="GitHub Repository"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaGithub className="mr-2" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium"
                    aria-label="Live Demo"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button */}
        {projects.length > 3 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{showAll ? 'Show Less' : 'See More Projects'}</span>
              <motion.span
                className="relative z-10"
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {showAll ? <FaChevronUp /> : <FaChevronDown />}
              </motion.span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
