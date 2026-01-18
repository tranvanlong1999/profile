import { motion } from 'framer-motion';

import { VStack } from '@/components/ui/Utilities';
import { useMobile } from '@/hooks/breakpoint';
import { type NextPageWithLayout } from '@/types';

import CTACard from './components/CTACard';
import InfoCard from './components/InfoCard';
import ProfileCard from './components/ProfileCard';
import ProfilesCard from './components/ProfilesCard';
import ServicesCard from './components/ServicesCard';
import StatsCard from './components/StatsCard';
import Ticker from './components/Ticker';

const HomePage: NextPageWithLayout = () => {
  const isMobile = useMobile();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      className={`container mx-auto px-5 2xl:px-0 ${isMobile ? 'py-12' : 'py-24'} max-w-[1200px]`}
    >
      <VStack spacing={isMobile ? 12 : 24}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Row 1 & 2 */}
          {/* Profile - Spans 2x2 */}
          <div className="lg:col-span-2 lg:row-span-2">
            <ProfileCard delay={0} />
          </div>

          {/* Ticker - Spans 2x1 */}
          <div className="lg:col-span-2">
            <Ticker delay={0.1} />
          </div>

          {/* Row 2 Right side */}
          <div>
            <InfoCard
              subtitle="More About Me"
              title="Credentials"
              image="/images/tech-abstract.png"
              href="/credentials"
              delay={0.2}
            />
          </div>
          <div>
            <InfoCard subtitle="Showcase" title="Projects" image="/images/project-ui.png" href="/works" delay={0.3} />
          </div>

          {/* Row 3 */}
          <div>
            <InfoCard subtitle="Blog" title="GFonts" image="/images/blog-cover.png" href="/blog" delay={0.4} />
          </div>

          <div className="lg:col-span-2">
            <ServicesCard delay={0.5} />
          </div>

          <div>
            <ProfilesCard delay={0.6} />
          </div>

          {/* Row 4 */}
          <div className="lg:col-span-2">
            <StatsCard delay={0.7} />
          </div>

          <div className="lg:col-span-2">
            <CTACard delay={0.8} />
          </div>
        </div>
      </VStack>
    </motion.div>
  );
};

export default HomePage;
