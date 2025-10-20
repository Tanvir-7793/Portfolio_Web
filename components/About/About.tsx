"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AboutParticleBackground from './ParticleBackground';


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -60,
      scale: 0.8,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0
    }
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0
    }
  };

  const traitVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0
    }
  };

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-screen py-20 bg-gray-950 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <AboutParticleBackground />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={containerVariants} className="text-center mb-2">
          <motion.h2
            variants={titleVariants}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-1 leading-tight"
            style={{ perspective: "1000px" }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
            variants={subtitleVariants}
          />
          <motion.p
            variants={subtitleVariants}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3
            }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Passionate developer with a love for creating amazing digital experiences
          </motion.p>
        </motion.div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={contentVariants}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
              damping: 12
            }}
            className="max-w-4xl mx-auto text-center"
            style={{ perspective: "1000px" }}
          >
            <motion.div variants={containerVariants} className="space-y-8">
              <motion.h3
                variants={titleVariants}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="text-3xl font-bold text-white mb-4"
                style={{ perspective: "1000px" }}
              >
                Hello, I&apos;m Tanvir! 👋
              </motion.h3>
              <motion.div
                variants={textVariants}
                transition={{
                  duration: 0.8,
                  ease: "easeOut"
                }}
                className="space-y-4 text-gray-300 leading-relaxed"
                style={{ perspective: "1000px" }}
              >
                <p>
                  In 2021, I took my first big step toward a lifelong dream — I joined a Defence Services Academy with the goal of becoming an Army Officer. For two years, I dedicated myself to preparing for the NDA and Navy SSR exams, driven by the dream of earning the stars of a Lieutenant.
                </p>
                <p>
                  Though I couldn’t reach that post, those years gave me something equally valuable — discipline, teamwork, leadership, and an unshakable spirit of patriotism. These lessons shaped how I approach every challenge in life.
                </p>
                <p>
                  When I stepped into the world of engineering, I found a new battlefield — technology. The same determination that once powered my defence journey now fuels my passion for innovation. I’ve participated in three national-level hackathons, where I worked on solving real-world problems through AI, IoT, and web technologies.
                </p>
                <p>
                  Today, I proudly serve as the Student Coordinator of the Artificial Intelligence & Data Science Club, where I lead initiatives, guide peers, and organize events that inspire creative tech learning.
                </p>
                <p>
                  I believe technology, like defence, is about serving with purpose — and my mission is to combine both worlds by becoming a Defence Engineer, using innovation to strengthen the nation’s future.
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="flex flex-wrap justify-center gap-4 pt-8"
              >
                {['Team Leader 👨🏻‍✈️', 'Problem Solver 🧩', 'Team Player 🤝', 'Always Learning 📚'].map((trait, index) => (
                  <motion.span
                    key={index}
                    variants={traitVariants}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 120,
                      damping: 10
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      y: -5,
                      transition: {
                        duration: 0.3,
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                    className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-700/50 hover:border-blue-500/50 transition-colors cursor-pointer"
                    style={{
                      transformOrigin: "center",
                      perspective: "1000px"
                    }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
