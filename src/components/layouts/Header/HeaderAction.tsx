import Link from 'next/link';
import React from 'react';

interface ActionHeaderProps {
  isMobile: boolean;
}

const ActionHeader: React.FC<ActionHeaderProps> = ({ isMobile }) => {
  return (
    <div className={`${isMobile ? 'hidden' : 'flex'} items-center`}>
      <Link
        href="/contact"
        className="bg-[#323232] text-white px-6 py-2.5 rounded-[16px] hover:bg-white hover:text-black transition-colors duration-300 font-medium"
      >
        Let&apos;s talk
      </Link>
    </div>
  );
};

export default ActionHeader;
