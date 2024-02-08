import { useArticles } from '@/api';
import { Button } from '@/shared/components/button';
import { ArticleCard } from '@/shared/components/card';

const ArticleSection = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useArticles({ limit: 8 });

  return (
    <>
      {isError ? (
        <p>error: {error.message}</p>
      ) : (
        <div className='grid gap-x-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-4'>
          {isLoading ? (
            <>loading...</>
          ) : (
            data?.map((data) => {
              return (
                <ArticleCard
                  key={data?.id}
                  title={data?.title}
                  date={data?.date}
                  tags={data?.tags}
                  src={data?.src}
                />
              );
            })
          )}
        </div>
      )}

      {hasNextPage && (
        <div className='flex justify-center'>
          <Button
            onClick={() => !isFetchingNextPage && fetchNextPage()}
            disabled={isFetchingNextPage}
            variant='gradient'
            size='large'
            intent='primary'
          >
            コラムをもっと見る
          </Button>
        </div>
      )}
    </>
  );
};

export { ArticleSection };
