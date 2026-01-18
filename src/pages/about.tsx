import MainLayout from '@/components/layouts/MainLayout/MainLayout';
import AboutPageModule from '@/modules/AboutPage';
import { type NextPageWithLayout } from '@/types';

const AboutPage: NextPageWithLayout = () => {
  return <AboutPageModule />;
};

AboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default AboutPage;
