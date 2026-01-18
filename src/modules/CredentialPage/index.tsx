import { motion } from 'framer-motion';
import React from 'react';

import { VStack } from '@/components/ui/Utilities';
import { useMobile } from '@/hooks/breakpoint';

import CredentialCard from './components/CredentialCard';
import CredentialContent from './components/CredentialContent';

const CredentialPage = () => {
  const isMobile = useMobile();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      className={`container mx-auto px-5 2xl:px-0 ${isMobile ? 'py-12' : 'py-24'} max-w-[1200px]`}
    >
      <VStack spacing={isMobile ? 12 : 32}>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          {/* Left Sidebar */}
          <div className="w-full lg:w-[400px] lg:shrink-0 lg:sticky lg:top-32">
            <CredentialCard />
          </div>

          {/* Right Content */}
          <div className="w-full flex-1">
            <CredentialContent />
          </div>
        </div>
      </VStack>
    </motion.div>
  );
};

export default CredentialPage;
