import { motion } from 'framer-motion';
import React from 'react';

import { Icons } from '@/assets/icons';

const ProjectHeader = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex-col items-center justify-center py-12 md:py-20 px-5 2xl:px-0">
      <div className="flex items-center gap-4 md:gap-8">
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <Icons.sparkles className="text-white/30 text-2xl md:text-3xl" />
        </motion.div>

        <motion.h1
          className="text-3xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter text-center max-w-[900px] leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {title}
        </motion.h1>

        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
          <Icons.sparkles className="text-white/30 text-2xl md:text-3xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectHeader;
