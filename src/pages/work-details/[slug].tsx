import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import ModuleLayout from '@/components/layouts/ModuleLayout';
import { projects } from '@/data/projects';
import WorkDetailPage from '@/modules/WorkDetailPage';

const WorkDetailsSlug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <ModuleLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <h1 className="text-4xl text-white">Project not found</h1>
        </div>
      </ModuleLayout>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} - Tran Van Long</title>
        <meta name="description" content={project.description} />
      </Head>
      <ModuleLayout>
        <WorkDetailPage project={project} />
      </ModuleLayout>
    </>
  );
};

export default WorkDetailsSlug;
