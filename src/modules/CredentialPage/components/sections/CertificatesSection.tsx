import { motion } from 'framer-motion';
import React from 'react';

const CertificatesSection = () => {
  const certificates = [
    {
      title: 'Spring Boot: Mastering the Fundamentals',
      provider: 'Professional Certification',
      description: 'In-depth study of Spring Boot ecosystem, configuration, and best practices.',
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
        Certificates
      </motion.h3>

      <div className="flex flex-col gap-16">
        {certificates.map((cert, index) => (
          <motion.div key={index} variants={itemVariants} className="flex flex-col gap-3">
            <h4 className="text-[#5b78f6] text-xl font-bold">{cert.title}</h4>
            <span className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">{cert.provider}</span>
            <p className="text-zinc-400 text-sm leading-relaxed mt-2">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CertificatesSection;
