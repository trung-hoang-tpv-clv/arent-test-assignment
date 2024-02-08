import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/shared/libs';

const useScrollTrigger = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isShow;
};

const ScrollTopFab = () => {
  const isShow = useScrollTrigger();
  const scrollTop = useCallback(() => {
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      onClick={scrollTop}
      className={cn(
        'fixed bottom-12 right-8 inline-flex h-[48px] w-[48px] items-center justify-center rounded-full border-2 border-dark-500 text-dark-500 transition-all hover:border-primary-400 hover:bg-primary-400 hover:text-light-default',
        isShow ? 'opacity-1 visible' : 'pointer-events-none invisible opacity-0'
      )}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='10'
        viewBox='0 0 16 10'
        fill='currentColor'
      >
        <path
          d='M14.5853 9.04198L8.00023 2.65788L1.41519 9.04198L0.539001 8.19253L8.00024 0.958984L15.4615 8.19253L14.5853 9.04198Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
};

export { ScrollTopFab };
