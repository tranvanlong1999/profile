import { motion } from 'framer-motion';
import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      period: 'Sep 2025 - Present',
      role: 'Java Software Engineer (Onsite)',
      company: 'CMC Global – Samsung Project',
      description:
        'Maintained enterprise monitoring systems for hardware and software using Java EE, JSP, and Oracle. Monitored hardware devices, Oracle databases, and system processes to ensure system stability. Analyzed logs, investigated incidents, and proposed improvements to reduce system risks.',
    },
    {
      period: 'Sep 2021 - Present',
      role: 'Java Software Engineer',
      company: 'Fubon Life Vietnam',
      description:
        'Maintained and enhanced Ebao insurance core system using Spring MVC, Struts, and Oracle. Developed business features including file management and workflow enhancements. Integrated voice-to-text functionality and built supporting services using Django and React JS.',
    },
    {
      period: 'Jan 2021 - Aug 2021',
      role: 'Java Developer',
      company: 'VTI',
      description:
        'Developed REST APIs using Spring Boot for a Japanese government document management system. Supported system migration from legacy Struts framework to Spring Boot. Created API documentation based on business requirements.',
    },
    {
      period: 'Jun 2020 - Jul 2020',
      role: 'Software Engineer Intern',
      company: 'SVMC – Samsung Vietnam Mobile R&D Center',
      description: 'Practiced algorithmic problem solving using BFS and Backtracking under Samsung R&D guidance.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
      <motion.h3
        variants={itemVariants}
        className="text-white text-base md:text-lg font-bold uppercase tracking-[0.2em] mb-12"
      >
        Experience
      </motion.h3>

      <div className="flex flex-col gap-16">
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants} className="flex flex-col gap-3">
            <span className="text-zinc-500 text-sm font-medium tracking-wide uppercase">{exp.period}</span>
            <h4 className="text-[#5b78f6] text-xl font-bold">{exp.role}</h4>
            <span className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">{exp.company}</span>
            <p className="text-zinc-400 text-sm leading-relaxed mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
