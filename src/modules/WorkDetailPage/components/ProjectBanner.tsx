import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const ProjectBanner = ({ image }: { image: string }) => {
  return (
    <motion.div
      className="container mx-auto px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-[40px] overflow-hidden border border-white/5">
        <Image src={image} alt="Project Banner" fill className="object-cover" priority />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
      </div>
    </motion.div>
  );
};

export default ProjectBanner;
