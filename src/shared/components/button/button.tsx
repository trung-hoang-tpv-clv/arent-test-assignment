import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/libs';

const buttonVariants = cva(
  [
    'relative inline-flex items-center justify-center space-x-2 overflow-hidden transition-all disabled:opacity-50',
  ],
  {
    variants: {
      intent: {
        primary: '',
      },
      size: {
        sm: '',
        medium: 'rounded-md p-2',
        large: ' h-[56px] min-w-[296px] rounded-md p-2',
      },
      variant: {
        plain: 'bg-transparent',
        solid: '',
        gradient: 'bg-gradient-to-b',
      },
    },
    compoundVariants: [
      {
        variant: 'gradient',
        intent: 'primary',
        className:
          'from-primary-300 to-primary-400 hover:from-primary-300/90 hover:to-primary-400/90',
      },
      { variant: 'plain', intent: 'primary', className: 'text-primary-400' },
      { variant: 'solid', intent: 'primary', className: 'bg-primary-400' },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
      variant: 'solid',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, variant, size, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ intent, size, variant, className }))}
        {...rest}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
