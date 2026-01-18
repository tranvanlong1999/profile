import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import React from 'react';

import type { FCC } from '@/types';

interface Props {
  children: ReactNode;
}

const Transition: FCC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {/* Curtain Overlay - slides down from top */}
      <motion.div
        key={`curtain-${router.asPath}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        style={{ originY: 0 }}
        className="fixed inset-0 z-[9999] bg-gradient-to-b from-[#4A72FF] to-[#2D46B9]"
      />

      {/* Page Content with delay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Transition;
