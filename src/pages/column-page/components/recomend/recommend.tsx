import { RecommendCard } from '@/shared/components/card';

const RecommendSection = () => {
  return (
    <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
      <RecommendCard title='recommended column' subTitle='オススメ' />
      <RecommendCard title='recommended diet' subTitle='ダイエット' />
      <RecommendCard title='recommended beauty' subTitle='美容' />
      <RecommendCard title='recommended health' subTitle='健康' />
    </div>
  );
};

export { RecommendSection };
