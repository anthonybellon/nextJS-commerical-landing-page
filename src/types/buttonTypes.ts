export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

export type ButtonType = {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
};
