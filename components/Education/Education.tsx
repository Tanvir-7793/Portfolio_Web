"use client";

import { motion } from "framer-motion";
import React from "react";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science & Enginnering",
    institution: "Dnyanshree Institute of Enginnering & Technology Satara",
    duration: "2023 – 2027",
    description:
      "Focused on full-stack web development, AI integration, and data-driven software design. Led multiple tech projects and hackathons.",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Defence services Jr.Collage Bhandara , Nagpur",
    duration: "2021 – 2023",
    description:
      "Specialized in Physics, Chemistry, and Mathematics. Scored distinction and developed interest in computer science fundamentals.I also prepared for NDA and other Defence exams.",
  },
 
];

const Education: React.FC = () => {
  return (
    <motion.section
      id="education"
      className="min-h-screen py-20 bg-gray-950 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-1 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 md:ml-10 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <span className="absolute left-[-10px] top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></span>

              {/* Card */}
              <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium mt-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                  {edu.duration}
                </p>
                <p className="mt-3 text-gray-700 dark:text-gray-200 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
