import { RecordCard } from '@/shared/components/card';
import { SECTION_ID } from '@/pages/record-page/config';

const RecordNavigationSection = () => {
  return (
    <div className='grid gap-12 lg:grid-cols-3'>
      <RecordCard
        src='./images/MyRecommend-1.jpg'
        title='body record'
        subTitle='自分のカラダの記録'
        href={'#' + SECTION_ID.bodyRecord}
      />
      <RecordCard
        src='./images/MyRecommend-2.jpg'
        title='my exercise'
        subTitle='自分の運動の記録'
        href={'#' + SECTION_ID.myExercise}
      />
      <RecordCard
        src='./images/MyRecommend-3.jpg'
        title='my diary'
        subTitle='自分の日記'
        href={'#' + SECTION_ID.myDiary}
      />
    </div>
  );
};

export { RecordNavigationSection };
