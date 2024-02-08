import { ArticleSection } from './components/article';
import { RecommendSection } from './components/recomend';

const ColumnPage = () => {
  return (
    <div className='container mt-14 space-y-14'>
      <RecommendSection />
      <ArticleSection />
    </div>
  );
};

export default ColumnPage;
