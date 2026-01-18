import { type Project } from '@/data/projects';

import CTACard from '../HomePage/components/CTACard';
import InfoCard from '../HomePage/components/InfoCard'; // This is the Credentials card
import ProfileCard from '../HomePage/components/ProfileCard';
import ProjectBanner from './components/ProjectBanner';
import ProjectContent from './components/ProjectContent';
import ProjectGallery from './components/ProjectGallery';
import ProjectHeader from './components/ProjectHeader';

const WorkDetailPage = ({ project }: { project: Project }) => {
  if (!project) return null;

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <ProjectHeader title={project.title} />
      <ProjectBanner image={project.bannerImage} />
      <ProjectContent
        date={project.date}
        client={project.client}
        services={project.services}
        year={project.year}
        description={project.description}
        about={project.about}
      />
      <ProjectGallery images={project.galleryImages} />

      {/* Footer Cards - Shared from HomePage pattern */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <ProfileCard delay={0.1} />
          </div>
          <div className="md:col-span-6">
            <CTACard delay={0.2} />
          </div>
          <div className="md:col-span-3">
            <InfoCard title="Credentials" subtitle="More about me" delay={0.3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;
