"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaJava, FaDocker, FaGithub, FaCode, FaServer, FaMobile, FaBrain, FaMicrochip, FaTools, FaUsers, FaQrcode } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiMysql, SiOpensourceinitiative, SiGooglecloud, SiUbuntu, SiArduino, SiGoogleassistant, SiOpenai } from "react-icons/si";
import { DiCode, DiResponsive } from "react-icons/di";
import AboutParticleBackground from "../About/ParticleBackground";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaCode className="w-6 h-6" />,
    skills: [
      { name: "HTML5", level: 95, icon: <FaHtml5 /> },
      { name: "CSS3", level: 90, icon: <FaCss3Alt /> },
      { name: "JavaScript", level: 80, icon: <FaJs /> },
      { name: "React / Next.js", level: 65, icon: <FaReact /> },
      { name: "Tailwind CSS", level: 60, icon: <SiTailwindcss /> },
      { name: "UI/UX & Responsive", level:70, icon: <DiResponsive /> },
    ],
  },
  {
    title: "Languages",
    icon: <FaCode className="w-6 h-6" />,
    skills: [
      { name: "Java (OOP)", level: 85, icon: <FaJava /> },
      { name: "JavaScript/TypeScript", level: 70, icon: <FaJs /> },
      { name: "Python", level: 35, icon: <FaPython /> },
      { name: "C++", level: 55, icon: <FaPython /> },
      { name: "C", level: 80, icon: <FaPython /> },
      
    ],
  },
  {
    title: "Backend & Databases",
    icon: <FaServer className="w-6 h-6" />,
    skills: [
      { name: "Node.js", level: 65, icon: <FaNodeJs /> },
      { name: "Express/Next.js API", level: 60, icon: <SiNextdotjs /> },
      { name: "MySQL ", level: 50, icon: <SiMysql /> },
      { name: "Firebase", level: 75, icon: <SiFirebase /> },
    ],
  },
  {
    title: "AI / APIs",
    icon: <FaBrain className="w-6 h-6" />,
    skills: [
      { name: "OpenAI GPT-4", level: 85, icon: <SiOpenai /> },
      { name: "Google Gemini", level: 70, icon: <SiGoogleassistant /> },
      { name: "Vision OCR", level: 65, icon: <FaBrain /> },
    ],
  },
  {
    title: "IoT & Embedded",
    icon: <FaMicrochip className="w-6 h-6" />,
    skills: [
      { name: "ESP8266/ESP32", level: 80, icon: <SiArduino /> },
      { name: "Sensors (DHT11, etc.)", level: 85, icon: <FaMicrochip /> },
      { name: "ThingSpeak/Blynk", level: 75, icon: <SiGooglecloud /> },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <FaTools className="w-6 h-6" />,
    skills: [
      { name: "Hostinger/Vercel", level: 75, icon: <FaServer /> },
      { name: "Git/GitHub", level: 90, icon: <FaGithub /> },
      { name: "Docker", level: 45, icon: <FaDocker /> },
    ],
  },
  {
    title: "Soft Skills",
    icon: <FaUsers className="w-6 h-6" />,
    skills: [
      { name: "Project Management", level: 90, icon: <FaTools /> },
      { name: "Teamwork & Leadership", level: 95, icon: <FaUsers /> },
      { name: "Public Speaking", level: 70, icon: <FaUsers /> },
      { name: "Quick Learner", level: 95, icon: <FaBrain /> },
    ],
  },
];

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 + (i * 0.05),
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <motion.section
      ref={ref}
      id="skills"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
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
            Skills & Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg">
            A comprehensive overview of my technical skills and expertise across different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
              variants={categoryVariants}
              custom={categoryIndex}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)" }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white ml-3">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="group"
                    variants={skillVariants}
                    custom={skillIndex}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <div className="w-6 h-6 mr-2 text-blue-400 flex items-center justify-center">
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ 
                          width: `${skill.level}%`,
                          transition: { 
                            delay: 0.3 + (categoryIndex * 0.05) + (skillIndex * 0.03),
                            duration: 1,
                            ease: "easeOut"
                          }
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership & Activities Section */}
        <motion.div 
          className="mt-20"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Leadership & Activities
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Smart Campus Initiative Card */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.1,
                  duration: 0.6 
                } 
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 text-white">
                  <FaQrcode className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-3">Smart Campus Initiative</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Developed a QR Code system at Dnyanshree Institute to provide digital information about campus trees, merging technology with sustainability and environmental education.
              </p>
            </motion.div>
            {/* Student Coordinator Card */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.1,
                  duration: 0.6 
                } 
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <FaUsers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-3">Student Coordinator</h3>
              </div>
              <p className="text-gray-300 text-sm">
                AI & Data Science Club — Organized workshops, hackathons, and mentored student projects, fostering a community of tech enthusiasts.
              </p>
            </motion.div>

            {/* NSS Card */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.2,
                  duration: 0.6 
                } 
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                  <FaUsers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-3">NSS Volunteer & Troop Leader</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Led community outreach programs and team activities, developing leadership and organizational skills while making a positive social impact.
              </p>
            </motion.div>

            {/* IQAC Card */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.25,
                  duration: 0.6 
                } 
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                  <FaUsers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-3">IQAC Student Representative</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Serving as a student representative in the Internal Quality Assurance Cell, actively participating in quality enhancement initiatives and bridging communication between students and administration.
              </p>
            </motion.div>

            {/* Hackathons Card */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.3,
                  duration: 0.6 
                } 
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 to-yellow-500 text-white">
                  <FaCode className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-3">Hackathon Participant</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Competed in 3+ national-level hackathons including RIT-Hackathon & Devpost events, delivering innovative project solutions under time constraints.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Always Learning Section */}
        <motion.div 
          className="mt-20 text-center"
          variants={{
            hidden: { 
              opacity: 0, 
              y: 40,
              rotateX: 30
            },
            visible: { 
              opacity: 1, 
              y: 0,
              rotateX: 0,
              transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 15
              }
            }
          }}
          style={{ perspective: "1000px" }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
            Always Learning & Growing
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            I&apos;m constantly exploring new technologies and frameworks to expand my skill set and stay up-to-date with the latest industry trends.
          </p>
        </motion.div>
      </div>
      
    </motion.section>
  );
};

export default Skills;
