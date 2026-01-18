import React from 'react';

import { useMobile } from '@/hooks/breakpoint';
import { useScroll } from '@/hooks/useScroll';

import ActionHeader from './HeaderAction';
import HeaderActionMobile from './HeaderActionMobile';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  const isMobile = useMobile();
  const { isScrolled } = useScroll();

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-4 bg-[#0f0f0f]/80 backdrop-blur-md' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container px-5 2xl:px-0 mx-auto max-w-[1200px]">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Logo className="w-auto h-8 md:h-10" />
            </div>

            {/* Navbar Section (Desktop) */}
            {!isMobile && (
              <div className="hidden lg:flex flex-1 justify-center">
                <Navbar isScrolled={isScrolled} />
              </div>
            )}

            {/* Action/Mobile Section */}
            <div className="flex items-center gap-4">
              <ActionHeader isMobile={isMobile} />
              {isMobile && <HeaderActionMobile />}
            </div>
          </div>
        </div>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-24 md:h-28"></div>
    </>
  );
};

export default Header;
