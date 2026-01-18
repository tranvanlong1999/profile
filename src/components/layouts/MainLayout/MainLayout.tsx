import type { ReactNode } from 'react';
import React from 'react';

import type { FCC } from '@/types';

import Footer from '../Footer';
import Header from '../Header/index';
import Transition from '../Transition';

interface Props {
  children: ReactNode;
}

const MainLayout: FCC<Props> = ({ children }) => {
  return (
    <div className="overflow-clip bg-[#0f0f0f]">
      <Header />
      <main className="min-h-screen">
        <Transition>{children}</Transition>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
