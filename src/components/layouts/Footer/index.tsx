import Link from 'next/link';
import React from 'react';

import Logo from '../Header/Logo';

const Footer = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Works', href: '/works' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="py-20 flex flex-col items-center justify-center gap-10 bg-[#0f0f0f]">
      {/* Logo */}
      <Logo className="scale-125" />

      {/* Navigation */}
      <nav className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-gray-500 hover:text-white uppercase text-sm font-medium tracking-wider transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Copyright */}
      <p className="text-gray-600 text-sm">
        &copy; All rights reserved by <span className="text-blue-500 font-medium">WordPressRiver</span>
      </p>
    </footer>
  );
};

export default Footer;
