import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  children?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <li className="group relative">
    <Link
      href={href}
      prefetch={false}
      className="flex items-center space-x-2 font-medium transition-colors hover:text-primary"
    >
      <span>{label}</span>
    </Link>
  </li>
);

export default NavLink;
