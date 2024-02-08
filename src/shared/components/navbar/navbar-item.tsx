import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/shared/libs';

export interface NavbarItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const NavbarItem = forwardRef<HTMLButtonElement, NavbarItemProps>(
  (props: NavbarItemProps, ref) => {
    const { className, asChild, ...rest } = props;
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(
          'relative inline-flex h-[48px] w-[160px] items-center justify-start space-x-2 p-2 transition-all aria-[current=page]:text-primary-400 hover:text-primary-400 [&>svg]:text-primary-400',
          className
        )}
        {...rest}
      />
    );
  }
);
NavbarItem.displayName = 'NavbarItem';

export { NavbarItem };
