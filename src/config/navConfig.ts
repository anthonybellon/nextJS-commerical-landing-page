import { ButtonType } from '@type/buttonTypes';

export const navItems = [
  { label: 'Home', href: '#home' },
  {
    label: 'Services',
    dropdownItems: [
      { label: 'Web Development', href: '#web-development' },
      { label: 'App Development', href: '#app-development' },
      { label: 'SEO Services', href: '#seo-services' },
    ],
  },
  {
    label: 'Products',
    dropdownItems: [
      { label: 'Product 1', href: '#product-1' },
      { label: 'Product 2', href: '#product-2' },
      { label: 'Product 3', href: '#product-3' },
    ],
  },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const navButtons: ButtonType[] = [
  {
    label: 'Login',
    onClick: () => console.log('Login clicked!'),
    variant: 'secondary',
  },
  {
    label: 'Sign Up',
    onClick: () => console.log('Sign Up clicked!'),
    variant: 'default',
  },
];
