import { motion } from 'framer-motion';
import React from 'react';

const Logo = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
        Grid<span className="text-white/90">X</span>
      </span>
    </motion.div>
  );
};

export default Logo;
