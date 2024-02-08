import { Link } from 'react-router-dom';
import { ROUTES } from '@/config';

const Logo = () => {
  return (
    <Link to={ROUTES.home} className='shrink-0'>
      <img src='./icons/logo.svg' alt='Arent Logo' />
      <span className='sr-only'>Arent Logo</span>
    </Link>
  );
};

export default Logo;
