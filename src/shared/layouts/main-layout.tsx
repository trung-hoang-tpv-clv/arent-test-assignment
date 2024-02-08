import { ReactNode } from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { ScrollTopFab, SkipNav } from '@/shared/components/fab';

export interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  return (
    <div className='flex min-h-screen flex-col font-jp-sans'>
      <SkipNav href='#main-content' />
      <Navbar />
      <main id='main-content' className='flex-1'>
        {children}
      </main>
      <Footer />
      <ScrollTopFab />
    </div>
  );
};

export { MainLayout };
