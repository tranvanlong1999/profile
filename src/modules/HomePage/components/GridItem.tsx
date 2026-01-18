import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

import { useInView } from '@/hooks/useInview';

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GridItem: React.FC<GridItemProps> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref.current, { threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay,
            type: 'spring',
            stiffness: 80,
            damping: 20,
          },
        },
      }}
      className={`bg-[#1e1e1e] border border-white/5 rounded-[30px] p-6 flex flex-col justify-between h-full relative overflow-hidden group ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GridItem;
