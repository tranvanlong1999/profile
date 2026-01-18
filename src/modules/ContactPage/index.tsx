import { motion } from 'framer-motion';
import React from 'react';

import { VStack } from '@/components/ui/Utilities';
import { useMobile } from '@/hooks/breakpoint';

import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const ContactPage = () => {
  const isMobile = useMobile();
  return (
    <>
      {/* Curtain Reveal Overlay */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: '100%' }}
        transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
        className="fixed inset-0 bg-[#0f0f0f] z-[9999] pointer-events-none"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.6,
              duration: 1.2,
              ease: [0.2, 0, 0.2, 1],
              staggerChildren: 0.15,
            },
          },
        }}
        className={`container mx-auto px-4 ${isMobile ? 'py-12' : 'py-20'} max-w-[1200px]`}
      >
        <VStack spacing={isMobile ? 12 : 32}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Left: Contact Info */}
            <motion.div className="lg:col-span-4 h-full" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <ContactInfo />
            </motion.div>

            {/* Right: Form */}
            <motion.div className="lg:col-span-8" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <ContactForm />
            </motion.div>
          </div>
        </VStack>
      </motion.div>
    </>
  );
};

export default ContactPage;
