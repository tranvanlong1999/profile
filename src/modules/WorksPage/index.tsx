import { motion } from 'framer-motion';
import React from 'react';

import { Icons } from '@/assets/icons';
import { VStack } from '@/components/ui/Utilities';
import { useMobile } from '@/hooks/breakpoint';

import ProjectCard from './components/ProjectCard';

const WorksPage = () => {
  const isMobile = useMobile();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      className={`container mx-auto px-5 2xl:px-0 ${isMobile ? 'py-12' : 'py-20'} max-w-[1200px]`}
    >
      <VStack spacing={isMobile ? 12 : 32}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <ProjectCard
                image="/images/project1.png"
                category="Web Designing"
                title="Dynamic"
                href="/work-details/dynamic"
              />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <ProjectCard
                image="/images/project4.png"
                category="Photography"
                title="Diesel H1"
                className="md:aspect-[3/4]"
                href="/work-details/diesel-h1"
              />
            </motion.div>
          </div>

          {/* Right Section (Header + Remaining Projects) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Header */}
            <div className="flex items-center justify-center gap-4 py-8 lg:py-0">
              <Icons.sparkles className="text-white/50 text-3xl animate-pulse" />
              <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tight text-center">
                All Projects
              </h1>
              <Icons.sparkles className="text-white/50 text-3xl animate-pulse" />
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Middle Column */}
              <div className="flex flex-col gap-8">
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <ProjectCard
                    image="/images/project2.png"
                    category="Mobile Designing"
                    title="Seven Studio"
                    href="/work-details/seven-studio"
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <ProjectCard
                    image="/images/project5.png"
                    category="Mobile Designing"
                    title="Submarine"
                    href="/work-details/submarine"
                  />
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-8">
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <ProjectCard
                    image="/images/project3.png"
                    category="Branding"
                    title="Raven Studio"
                    href="/work-details/raven-studio"
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <ProjectCard
                    image="/images/project6.png"
                    category="Web Designing"
                    title="Hydra Merc"
                    href="/work-details/hydra-merc"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </VStack>
    </motion.div>
  );
};

export default WorksPage;
