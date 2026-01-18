import Link from 'next/link';
import React from 'react';

import { Icons } from '@/assets/icons';
import { HStack, VStack } from '@/components/ui/Utilities';

const ContactInfo = () => {
  return (
    <VStack justify="between" className="h-full py-2 gap-16 lg:gap-0" spacing={0}>
      {/* Contact Info Section */}
      <VStack spacing={32} className="lg:gap-14">
        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2 lg:mb-4">Contact Info</h3>

        {/* Mail */}
        <HStack spacing={24} className="lg:gap-8 group">
          <div className="icon-box">
            <Icons.message size={30} strokeWidth={1.5} />
          </div>
          <VStack spacing={4}>
            <span className="text-zinc-500 text-[12px] font-bold uppercase tracking-widest leading-none">Mail Us</span>
            <p className="text-white text-[17px] font-bold leading-tight">longtranvan15091999@gmail.com</p>
          </VStack>
        </HStack>

        {/* Contact */}
        <HStack spacing={24} className="lg:gap-8 group">
          <div className="icon-box">
            <Icons.smartphone size={30} strokeWidth={1.5} />
          </div>
          <VStack spacing={4}>
            <span className="text-zinc-500 text-[12px] font-bold uppercase tracking-widest leading-none">
              Contact Us
            </span>
            <p className="text-white text-[17px] font-bold leading-tight">0358172099</p>
          </VStack>
        </HStack>

        {/* Location */}
        <HStack spacing={24} className="lg:gap-8 group">
          <div className="icon-box">
            <Icons.location size={30} strokeWidth={1.5} />
          </div>
          <VStack spacing={4}>
            <span className="text-zinc-500 text-[12px] font-bold uppercase tracking-widest leading-none">Location</span>
            <p className="text-white text-[17px] font-bold leading-tight">
              Hà Nội
              <br />
              Việt Nam
            </p>
          </VStack>
        </HStack>
      </VStack>

      {/* Social Info Section */}
      <VStack spacing={24} className="pb-2 lg:gap-8">
        <h3 className="text-white font-bold uppercase tracking-widest text-sm leading-none">Social Info</h3>
        <HStack spacing={24}>
          {[
            { icon: <Icons.dribbble size={28} />, href: '#' },
            { icon: <Icons.twitter size={28} />, href: '#' },
            { icon: <Icons.instagram size={28} />, href: '#' },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center bg-zinc-900/30 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
            >
              <div className="group-hover:scale-110 transition-transform">{social.icon}</div>
            </Link>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ContactInfo;
