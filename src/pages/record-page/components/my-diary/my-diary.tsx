import { Button } from '@/shared/components/button';
import { MyDiaryCard } from './my-diary-card';
import { useDiaries } from '@/api';

const MyDiarySection = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useDiaries({ limit: 8 });

  return (
    <>
      <div className='text-dark-500'>
        <h2 id='my-diary' className='font-sans text-1.5xl'>
          My Diary
        </h2>
        {isError ? (
          <p>error: {error.message}</p>
        ) : (
          <ul className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
            {isLoading ? (
              <>Loading....</>
            ) : (
              data?.map((data) => {
                return (
                  <MyDiaryCard
                    key={data?.id}
                    date={data?.date}
                    description={data?.text}
                  />
                );
              })
            )}
          </ul>
        )}
      </div>

      {hasNextPage && (
        <div className='flex justify-center'>
          <Button
            onClick={() => !isFetchingNextPage && fetchNextPage()}
            disabled={isFetchingNextPage}
            variant='gradient'
            intent='primary'
            size='large'
          >
            自分の日記をもっと見る
          </Button>
        </div>
      )}
    </>
  );
};

export { MyDiarySection };
