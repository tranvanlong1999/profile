import { motion } from 'framer-motion';
import React from 'react';

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <h3 className="text-white text-base md:text-lg font-bold uppercase tracking-[0.2em] mb-12">About Me</h3>
      <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
        Backend-focused Full-stack Software Engineer with 5+ years of experience in enterprise systems using Java,
        Spring Boot, and Oracle. Strong background in maintaining and modernizing legacy systems toward Spring Boot and
        microservices architectures. Experienced in building backend services, system integration, and supporting
        frontend development with React. Seeking a backend or full-stack role in scalable system development.
      </p>
    </motion.section>
  );
};

export default AboutSection;
