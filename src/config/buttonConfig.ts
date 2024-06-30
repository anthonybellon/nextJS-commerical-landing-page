import { ButtonVariant } from '@type/buttonTypes';

type Button = {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
};

export const buttons: Button[] = [
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
