import React from 'react';

import AboutSection from './sections/AboutSection';
import AchievementsSection from './sections/AchievementsSection';
import CertificatesSection from './sections/CertificatesSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';

const CredentialContent = () => {
  return (
    <div className="flex flex-col gap-24">
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <AchievementsSection />
      <CertificatesSection />
    </div>
  );
};

export default CredentialContent;
