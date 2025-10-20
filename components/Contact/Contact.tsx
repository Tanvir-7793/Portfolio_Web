"use client";

import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from '@emailjs/browser';
import ContactParticleBackground from "./ParticleBackground";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!form.current) return;

    try {
      const result = await emailjs.sendForm(
        'service_a7isdqp', // Your EmailJS Service ID
        'template_h4a1iwo', // Your EmailJS Template ID
        form.current,
        'Wti0msT2sUjKFDr1J' // Your EmailJS Public Key
      );

      if (result.status === 200) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully."
        });
        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later or email me directly at tanvirmujawar7793@gmail.com"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Tanvir-7793", icon: <FaGithub className="w-6 h-6" /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tanvir-mujawar-7573012aa/", icon: <FaLinkedin className="w-6 h-6" /> },
    { name: "LeetCode", url: "https://leetcode.com/u/qVbYWaKxUg/", icon: <SiLeetcode className="w-6 h-6" /> },
    { name: "Twitter", url: "https://x.com/TMujawar7793", icon: <FaTwitter className="w-6 h-6" /> },
    { name: "Instagram", url: "https://www.instagram.com/mr.tanveer_7793/", icon: <FaInstagram className="w-6 h-6" /> },
    { name: "Email", url: "mailto:tanvirmujawar7793@gmail.com", icon: <FaEnvelope className="w-6 h-6" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const formVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <ContactParticleBackground />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-1 leading-tight"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
            variants={itemVariants}
          />
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            variants={itemVariants}
          >
            Have a project in mind or want to chat? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Let's work together</h3>
              <p className="text-gray-400">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email me at</p>
                  <a href="mailto:tanvirmujawar7793@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                    tanvirmujawar7793@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-4">Follow me</h4>
              <div className="flex space-x-4">
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
            </motion.div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={formVariants}
          >
            {submitStatus && (
              <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-900/30 border border-green-800' : 'bg-red-900/30 border border-red-800'}`}>
                <p className={submitStatus.success ? 'text-green-400' : 'text-red-400'}>
                  {submitStatus.message}
                </p>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
