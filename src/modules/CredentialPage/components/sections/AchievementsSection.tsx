import { motion } from 'framer-motion';
import React from 'react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Outstanding Employee 2023',
      organization: 'Fubon Life Vietnam',
      date: '2023',
      description: 'Recognized for exceptional performance and contribution to system modernization.',
    },
    {
      title: 'Certificate of Graduation in Algorithms',
      organization: 'SVMC – Samsung Vietnam Mobile R&D Center',
      date: '2020',
      description: 'Successfully completed rigorous algorithm training focused on problem-solving.',
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
        Achievements
      </motion.h3>

      <div className="flex flex-col gap-16">
        {achievements.map((item, index) => (
          <motion.div key={index} variants={itemVariants} className="flex flex-col gap-3">
            <span className="text-zinc-500 text-sm font-medium tracking-wide uppercase">{item.date}</span>
            <h4 className="text-[#5b78f6] text-xl font-bold">{item.title}</h4>
            <span className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">{item.organization}</span>
            <p className="text-zinc-400 text-sm leading-relaxed mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AchievementsSection;
