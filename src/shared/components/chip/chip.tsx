import { cn } from '@/shared/libs';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';

const chipVariants = cva(
  ['focus-ring cursor-pointer select-none transition-all'],
  {
    variants: {
      intent: {
        primary: '',
      },
      size: {
        sm: 'rounded-md p-1 px-2',
        medium: 'rounded-xl px-5 py-1',
      },
      variant: {
        plain: '',
        solid: '',
      },
    },
    compoundVariants: [
      {
        variant: 'plain',
        intent: 'primary',
        className:
          'bg-light-default text-primary-300 hover:bg-light-default/90',
      },
      {
        variant: 'solid',
        intent: 'primary',
        className: 'bg-primary-300 hover:bg-primary-300/90',
      },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
      variant: 'plain',
    },
  }
);

export interface ChipProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {}

const Chip = forwardRef<HTMLSpanElement, ChipProps>((props, ref) => {
  const { className, intent, size, variant, ...rest } = props;

  return (
    <span
      ref={ref}
      className={cn(chipVariants({ intent, size, variant, className }))}
      {...rest}
    />
  );
});
Chip.displayName = 'Chip';

export { Chip };
