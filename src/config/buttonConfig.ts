import { ButtonVariant } from '@type/buttonTypes';

type ButtonType = {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
};
export default ButtonType;
