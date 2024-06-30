import * as React from 'react';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { ButtonVariant } from '@type/buttonTypes';
import ChevronDownIcon from '@components/atoms/icons/ChevronDownItem';
import MountainIcon from '@components/atoms/icons/MountainIcon';
import DropdownMenu from '@components/molecules/DropDownMenu';

interface NavBarProps {
  navItems: {
    label: string;
    href?: string;
    dropdownItems?: { label: string; href: string }[];
  }[];
  buttons: { label: string; onClick: () => void; variant?: ButtonVariant }[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems, buttons }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = React.useState<
    number | null
  >(null);
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setOpenDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setOpenDropdownIndex(null);
    }, 200);
    setTimeoutId(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="flex items-center space-x-2"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6" />
            <span className="font-bold">Acme Inc</span>
          </Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6">
            {navItems.map((item, index) =>
              item.dropdownItems ? (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="#"
                    className="flex items-center space-x-2 font-medium transition-colors hover:text-primary"
                    prefetch={false}
                  >
                    <span>{item.label}</span>
                    <ChevronDownIcon
                      className={`h-4 w-4 transform transition-transform duration-200 ${openDropdownIndex === index ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </Link>
                  {openDropdownIndex === index && (
                    <DropdownMenu items={item.dropdownItems} />
                  )}
                </li>
              ) : (
                <li key={index}>
                  <Link
                    href={item.href || '#'}
                    className="font-medium transition-colors hover:text-primary"
                    prefetch={false}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          {buttons.map((button, index) => (
            <Button key={index} variant={button.variant}>
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
