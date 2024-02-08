import { cn } from '@/shared/libs';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { className, isActive = false, ...rest } = props;

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex h-[136px] w-[136px] flex-col items-center justify-center font-sans text-xl transition-all',
          '[&>svg]:text-[56px]',
          'clip-hexagon bg-gradient-to-br from-primary-300 to-primary-400 hover:from-primary-300/90 hover:to-primary-400/90 focus-visible:from-primary-400/80 focus-visible:to-primary-400/80',
          isActive && 'from-primary-300/60 to-primary-400/60',
          className
        )}
        {...rest}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton };
