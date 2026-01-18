import Link from 'next/link';
import React from 'react';

import { Icons } from '@/assets/icons';
import GridItem from '@/modules/HomePage/components/GridItem';

const CredentialCard = () => {
  return (
    <GridItem className="p-6 md:p-8 lg:p-10 flex flex-col items-center text-center">
      {/* Profile Image */}
      <div className="relative w-[85%] aspect-square rounded-[30px] overflow-hidden mb-10 bg-[#2b2b2b]">
        <img src="/images/avartar.png" alt="Profile" className="w-full h-full object-cover rounded-[30px]" />
      </div>

      {/* Name and Handle */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl md:text-[32px] font-bold text-white tracking-tight">TRAN VAN LONG</h2>
        <span className="text-zinc-500 text-sm">@tranvanlong</span>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mb-10">
        {[
          { icon: <Icons.dribbble size={20} />, href: '#' },
          { icon: <Icons.twitter size={20} />, href: '#' },
          { icon: <Icons.instagram size={20} />, href: '#' },
          { icon: <Icons.facebook size={20} />, href: '#' },
        ].map((social, index) => (
          <Link
            key={index}
            href={social.href}
            className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center bg-zinc-900 text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            {social.icon}
          </Link>
        ))}
      </div>

      {/* Contact Button */}
      <Link
        href="/contact"
        className="w-full bg-[#323232] text-white py-4 rounded-[16px] font-bold hover:bg-white hover:text-black transition-all duration-300 text-center uppercase text-sm tracking-wide"
      >
        Contact Me
      </Link>
    </GridItem>
  );
};

export default CredentialCard;
