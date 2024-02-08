import { useState, ButtonHTMLAttributes, useCallback } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Slot } from '@radix-ui/react-slot';
import { IconMenu, IconMenuClose } from '@/shared/icons';
import { NavbarItem } from './navbar-item';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/config';

export interface NavbarMenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const NavbarMenuItem = (props: NavbarMenuItemProps) => {
  const { asChild, ...rest } = props;
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className='z-0 inline-flex h-[72px] w-[280px] items-center bg-[#777] px-[32px] hover:bg-[#888] focus-visible:z-[1]'
      {...rest}
    />
  );
};

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <NavbarItem className='w-fit p-0'>
          {isOpen ? <IconMenuClose /> : <IconMenu />}
          <span className='sr-only'>{isOpen ? 'Close menu' : 'Open menu'}</span>
        </NavbarItem>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align='end'
          className='flex flex-col data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in'
        >
          <NavbarMenuItem asChild onClick={handleClose}>
            <Link to={ROUTES.record}>自分の記録</Link>
          </NavbarMenuItem>
          <NavbarMenuItem onClick={handleClose}>体重グラフ</NavbarMenuItem>
          <NavbarMenuItem onClick={handleClose}>目標</NavbarMenuItem>
          <NavbarMenuItem onClick={handleClose}>選択中のコース</NavbarMenuItem>
          <NavbarMenuItem asChild onClick={handleClose}>
            <Link to={ROUTES.column}>コラム一覧</Link>
          </NavbarMenuItem>
          <NavbarMenuItem onClick={handleClose}>設定</NavbarMenuItem>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default NavbarMenu;
