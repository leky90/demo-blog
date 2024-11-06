import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'border',
    'rounded',
    'py-2',
    'px-3',
    'h-11',
    'text-base',
    'disabled:bg-transparent',
    'disabled:text-gray-400',
    'disabled:border-gray-400',
  ],
  {
    variants: {
      color: {
        primary: ['bg-purple-500', 'text-white', 'border-purple-500'],
        secondary: [
          'bg-red-500',
          'text-white',
          'border-red-500',
          'hover:bg-red-700',
          'focus:outline-red-500',
          'focus:outline-offset-4',
        ],
      },
      size: {
        large: ['h-14', 'px-4', 'text-xl'],
        small: ['h-9', 'px-2', 'py-1', 'text-xs'],
      },
    },
    defaultVariants: {
      color: 'secondary',
      size: 'small',
    },
  }
);

export type ButtonVariants = typeof buttonVariants;
