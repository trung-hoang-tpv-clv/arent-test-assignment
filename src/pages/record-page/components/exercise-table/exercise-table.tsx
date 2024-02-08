import { TableLayout } from '@/shared/components/section-layout';
import { ExerciseTableItem } from './exercise-table-item';
import { useExercises } from '@/api';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ExerciseTableSection = () => {
  const { ref, inView } = useInView();
  const { data, isLoading, isError, error, fetchNextPage } = useExercises({
    limit: 8,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <TableLayout
      id='my-exercise'
      title='My Exercise'
      date='2022-07-31T01:33:29.567Z'
    >
      {isError ? (
        <p>error: {error.message}</p>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <ul className='grid max-h-[240px] gap-x-[40px] gap-y-2 overflow-auto pr-8 scrollbar scrollbar-track-white scrollbar-thumb-primary-300 scrollbar-track-rounded-xl scrollbar-thumb-rounded-xl scrollbar-w-[6px] lg:grid-cols-2'>
          {data?.map((data) => (
            <ExerciseTableItem
              key={data?.id}
              duration={data?.duration}
              kcal={data?.kcal}
              title={data?.title}
            />
          ))}
          <li ref={ref} className='h-2 w-full' />
        </ul>
      )}
    </TableLayout>
  );
};

export { ExerciseTableSection };
