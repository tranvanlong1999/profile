import { motion } from 'framer-motion';
import React from 'react';

const SkillsSection = () => {
  const skills = [
    { percentage: 'Backend', name: 'Java, Spring Boot, Spring MVC', desc: 'Enterprise Systems' },
    { percentage: 'Architecture', name: 'Microservices, REST API', desc: 'System Design' },
    { percentage: 'Frontend', name: 'React, HTML, CSS, Django', desc: 'UI/UX Support' },
    { percentage: 'Database', name: 'Oracle, MySQL, PostgreSQL', desc: 'Database Management' },
    { percentage: 'Tools', name: 'Docker, Git, Jira, CI/CD', desc: 'DevOps & Tooling' },
    { percentage: 'Mobile R&D', name: 'Algorithms (BFS, Backtracking)', desc: 'Problem Solving' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
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
        Skills
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants} className="flex flex-col gap-2">
            <span className="text-zinc-500 text-sm font-medium tracking-wide uppercase">{skill.percentage}</span>
            <h4 className="text-white text-xl font-bold">{skill.name}</h4>
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
