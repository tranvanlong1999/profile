import MainLayout from '@/components/layouts/MainLayout/MainLayout';
import ContactPageModule from '@/modules/ContactPage';
import { type NextPageWithLayout } from '@/types';

const ContactPage: NextPageWithLayout = () => {
  return <ContactPageModule />;
};

ContactPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ContactPage;
