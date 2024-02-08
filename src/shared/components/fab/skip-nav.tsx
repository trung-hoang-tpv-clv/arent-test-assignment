import { cn } from '@/shared/libs';
import { buttonVariants } from '@/shared/components/button';

export interface SkipNavProps {
  href: string;
}

const SkipNav = (props: SkipNavProps) => {
  const { href } = props;
  return (
    <a
      href={href}
      tabIndex={0}
      className={cn(
        buttonVariants({
          intent: 'primary',
          size: 'medium',
          variant: 'solid',
          className:
            'pointer-events-none fixed left-2 top-2 opacity-0 focus:pointer-events-auto focus:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100',
        })
      )}
    >
      Skip Nav
    </a>
  );
};

export { SkipNav };
