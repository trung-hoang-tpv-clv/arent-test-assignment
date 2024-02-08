import { ProductSection } from './components/product';
import { HeroSection } from './components/hero';

const TopPage = () => {
  return (
    <div className='space-y-6'>
      <HeroSection />
      <ProductSection />
    </div>
  );
};

export default TopPage;
