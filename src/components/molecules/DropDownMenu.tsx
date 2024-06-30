import React from 'react';
import Link from 'next/link';

interface DropdownMenuProps {
  items: { label: string; href: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => (
  <div className="absolute left-1/2 top-full z-50 mt-2 w-64 origin-top -translate-x-1/2 transform rounded-md border bg-background p-2 shadow-lg">
    <ul className="space-y-1">
      {items.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
            prefetch={false}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default DropdownMenu;
