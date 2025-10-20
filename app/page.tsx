import ParticlesHero from "@/components/Home/Hero/ParticleBackground";
import Navbar from "@/components/Navbar/Navbar";
import Logo from "@/components/Logo/Logo";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education/Education";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Navbar */}
      <Navbar />
      
      <main className="relative">
        {/* Logo at bottom left */}
        <Logo />
        
        {/* Hero Section */}
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-950">
          {/* Particle Background */}
          <div className="absolute inset-0 z-0">
            <ParticlesHero />
          </div>
          
          {/* Hero Content */}
          <div className="container mx-auto px-4 z-10 text-center text-white pt-16">
            {/* Profile Image */}
            <ProfileImage />
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Turning ideas into intelligent systems — from web apps to IoT prototypes powered by AI.</h1>
            <div className="text-xl md:text-xl text-gray-300 mb-8 min-h-10 font-sans">
              <span className="font-light text-xl  ">Hi! I'm Tanvir - A Passionate</span>{' '}
              <TypingEffect 
                words={["Web Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast","Defence Aspirant"]} 
                typingSpeed={50}
                deletingSpeed={40}
                delayBetweenWords={1900}
              />
            </div>
            <Link href="#projects">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition-colors">
              View My Work
            </button>
            </Link>
            
          </div>
        </section>
        
        {/* About Section */}
        <About />
        
        {/* Experience Section 
        <Experience />
        */}
        {/* Projects Section */}
        <Projects />
        
        {/* Education Section */}
        <Education />
        <Skills />
        
        {/* Contact Section */}
        <Contact />
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
