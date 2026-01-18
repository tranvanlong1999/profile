import { motion } from 'framer-motion';
import React from 'react';

const EducationSection = () => {
  const education = [
    {
      period: 'Bachelor of Engineering',
      role: 'Information Technology',
      company: 'Ha Noi University of Industry',
      description: 'GPA: 2.94 / 4.0. Focused on software engineering and system design.',
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
        Education
      </motion.h3>

      <div className="flex flex-col gap-16">
        {education.map((edu, index) => (
          <motion.div key={index} variants={itemVariants} className="flex flex-col gap-3">
            <span className="text-zinc-500 text-sm font-medium tracking-wide uppercase">{edu.period}</span>
            <h4 className="text-[#5b78f6] text-xl font-bold">{edu.role}</h4>
            <span className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">{edu.company}</span>
            <p className="text-zinc-400 text-sm leading-relaxed mt-2">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EducationSection;
