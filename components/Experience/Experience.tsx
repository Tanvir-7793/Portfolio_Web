"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
  type: 'full-time' | 'contract' | 'freelance';
  icon: string;
}

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      duration: '2023 - Present',
      location: 'Remote',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
      achievements: [
        'Improved application performance by 60%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipeline reducing deployment time by 70%'
      ],
      tech: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'],
      type: 'full-time',
      icon: '🚀'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd',
      duration: '2022 - 2023',
      location: 'New York, NY',
      description: 'Developed and maintained multiple client projects with focus on user experience.',
      achievements: [
        'Built 15+ client applications',
        'Reduced bug reports by 45%',
        'Mentored 3 junior developers'
      ],
      tech: ['Vue.js', 'Express.js', 'MongoDB', 'Redis', 'GraphQL'],
      type: 'full-time',
      icon: '💻'
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Creative Agency Pro',
      duration: '2021 - 2022',
      location: 'San Francisco, CA',
      description: 'Specialized in creating responsive and interactive user interfaces.',
      achievements: [
        'Delivered 20+ pixel-perfect designs',
        'Improved mobile responsiveness by 80%',
        'Collaborated with UX/UI design teams'
      ],
      tech: ['React', 'Next.js', 'SCSS', 'Figma', 'Jest', 'Cypress'],
      type: 'full-time',
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Junior Developer',
      company: 'StartupXYZ',
      duration: '2020 - 2021',
      location: 'Austin, TX',
      description: 'Started my journey in web development, learning modern technologies.',
      achievements: [
        'Learned modern development practices',
        'Contributed to 10+ projects',
        'Gained experience in agile methodology'
      ],
      tech: ['JavaScript', 'HTML', 'CSS', 'Git', 'Bootstrap', 'jQuery'],
      type: 'full-time',
      icon: '🌟'
    }
  ];

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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8,
      rotateY: -30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      rotateY: 0
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'from-green-500 to-emerald-600';
      case 'contract': return 'from-blue-500 to-cyan-600';
      case 'freelance': return 'from-purple-500 to-violet-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'full-time': return 'Full Time';
      case 'contract': return 'Contract';
      case 'freelance': return 'Freelance';
      default: return 'Work';
    }
  };

  return (
    <motion.section 
      ref={ref}
      id="experience" 
      className="min-h-screen py-20 bg-gray-950 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-1 leading-tight">
            Work Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey in the world of technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            variants={lineVariants}
            className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
            style={{ transformOrigin: "top" }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80,
                  damping: 12
                }}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-950 z-10"
                />

                {/* Experience Card */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                } md:w-5/12`}>
                  <motion.div
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{exp.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-blue-400 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(exp.type)} text-white`}>
                        {getTypeLabel(exp.type)}
                      </span>
                    </div>

                    {/* Duration & Location */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.duration}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-400 flex items-start">
                            <span className="text-green-400 mr-2 mt-1">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 hover:bg-blue-600/50 transition-colors cursor-pointer"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline End */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="text-4xl">🚀</div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-white">Ready for the next adventure!</h4>
                <p className="text-gray-400 text-sm">Always excited to take on new challenges and opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
