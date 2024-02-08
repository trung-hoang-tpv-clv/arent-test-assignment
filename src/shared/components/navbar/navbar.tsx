import { IconChallenge, IconInfo, IconMemo } from '@/shared/icons';
import Logo from './logo';
import NavbarMenu from './navbar-menu';
import { NavbarItem } from './navbar-item';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/config';

const Navbar = () => {
  return (
    <header className='bg-dark-500'>
      <div className='container mx-auto flex h-[64px] items-center justify-between'>
        <Logo />
        <div className='hidden h-full flex-1 items-center justify-end md:flex'>
          <NavbarItem asChild>
            <NavLink to={ROUTES.column}>
              <IconMemo />
              <span>自分の記録</span>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <IconChallenge />
            <span>チャレンジ</span>
          </NavbarItem>

          <NavbarItem>
            <IconInfo />
            <span>お知らせ</span>
            <span className='absolute left-6 top-2 inline-flex h-[16px] w-[16px] items-center justify-center rounded-full bg-primary-500 text-xs'>
              1
            </span>
          </NavbarItem>

          <NavbarMenu />
        </div>
      </div>
    </header>
  );
};

export { Navbar };
