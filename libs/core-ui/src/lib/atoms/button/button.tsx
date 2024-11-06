import { PropsWithChildren } from 'react';
import { buttonVariants, ButtonVariants } from './button.cva';
import { cx, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export function Button({
  children,
  color,
  size,
  disabled,
}: PropsWithChildren<VariantProps<ButtonVariants> & { disabled?: boolean }>) {
  function onClick() {
    alert('clicked');
  }

  return (
    <button
      className={twMerge(cx(buttonVariants({ color, size })))}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
