import React from 'react';

import MainLayout from '@/components/layouts/MainLayout/MainLayout';
import CredentialPage from '@/modules/CredentialPage';
import { type NextPageWithLayout } from '@/types';

const CredentialsPage: NextPageWithLayout = () => {
  return <CredentialPage />;
};

CredentialsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default CredentialsPage;
