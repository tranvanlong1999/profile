import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Works', href: '/works' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`hidden lg:flex items-center gap-8 md:gap-10 transition-all duration-300 ${
        isScrolled ? 'opacity-80' : 'opacity-100'
      }`}
    >
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-[#9f9f9f] hover:text-white transition-colors duration-200 text-base font-medium"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
