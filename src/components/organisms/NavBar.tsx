import * as React from 'react';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { ButtonType } from '@type/buttonTypes';
import ChevronDownIcon from '@components/atoms/icons/ChevronDownItem';
import MountainIcon from '@components/atoms/icons/MountainIcon';
import DropdownMenu from '@components/molecules/DropDownMenu';
import classNames from 'classnames';
import '../../styles/variants.css';

interface NavBarProps {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  design?: 'static' | 'floating' | 'minimal';
  navItems: {
    label: string;
    href?: string;
    dropdownItems?: { label: string; href: string }[];
  }[];
  buttons: ButtonType[];
}

const NavBar: React.FC<NavBarProps> = ({
  variant = 'default',
  design = 'static',
  navItems,
  buttons,
}) => {
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
    <header
      className={classNames('w-full', `navbar-${design}`, `navbar-${variant}`)}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="flex items-center space-x-2"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6" />
            <span className="font-bold">Acme Inc</span>
          </Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href || '#'}
                  className="nav-item flex items-center space-x-2 transition-colors"
                  prefetch={false}
                >
                  <span>{item.label}</span>
                  {item.dropdownItems && (
                    <ChevronDownIcon
                      className={`h-4 w-4 transform transition-transform duration-200 ${openDropdownIndex === index ? 'rotate-180' : 'rotate-0'}`}
                    />
                  )}
                </Link>
                {openDropdownIndex === index && item.dropdownItems && (
                  <DropdownMenu items={item.dropdownItems} />
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4 ">
          {buttons.map((button, index) => (
            <Button key={index} variant={button.variant} design={design}>
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
