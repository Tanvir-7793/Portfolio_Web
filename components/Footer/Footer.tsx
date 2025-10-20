"use client";

import { motion } from "framer-motion";
import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2">
            &copy; {currentYear} All Rights Reserved
          </p>
          <p className="flex items-center justify-center">
            <span>Designed & Developed with</span>
            <span className="mx-1.5 text-pink-500"><FaHeart className="inline" /></span>
            <span>by</span>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1.5 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Tanvir Mujawar
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
