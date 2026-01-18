import MainLayout from '@/components/layouts/MainLayout/MainLayout';
import WorksPageModule from '@/modules/WorksPage';
import { type NextPageWithLayout } from '@/types';

const WorksPage: NextPageWithLayout = () => {
  return <WorksPageModule />;
};

WorksPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default WorksPage;
