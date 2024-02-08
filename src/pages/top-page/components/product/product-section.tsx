import { ProductCard } from '@/shared/components/card';
import { Button, IconButton } from '@/shared/components/button';
import { IconCup, IconKnife } from '@/shared/icons';
import { useCallback, useState } from 'react';
import { ProductTime, useProducts } from '@/api';

const ProductSection = () => {
  const [filter, setFilter] = useState<ProductTime | null>(null);
  const {
    data,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    error,
  } = useProducts({ limit: 8, filter: filter as ProductTime });

  const changeFilterValue = useCallback((val: ProductTime) => {
    setFilter((filter) => (val === filter ? null : val));
  }, []);

  return (
    <div className='container space-y-6'>
      <div className='grid grid-cols-2 place-content-center place-items-center items-center justify-center gap-[64px] lg:grid-cols-4'>
        <IconButton
          tabIndex={0}
          isActive={filter === ProductTime.MORNING}
          onClick={() => changeFilterValue(ProductTime.MORNING)}
        >
          <IconKnife />
          <span>Morning</span>
        </IconButton>

        <IconButton
          tabIndex={0}
          isActive={filter === ProductTime.LUNCH}
          onClick={() => changeFilterValue(ProductTime.LUNCH)}
        >
          <IconKnife />
          <span>Lunch</span>
        </IconButton>

        <IconButton
          tabIndex={0}
          isActive={filter === ProductTime.DINNER}
          onClick={() => changeFilterValue(ProductTime.DINNER)}
        >
          <IconKnife />
          <span>Dinner</span>
        </IconButton>

        <IconButton
          tabIndex={0}
          isActive={filter === ProductTime.SNACK}
          onClick={() => changeFilterValue(ProductTime.SNACK)}
        >
          <IconCup />
          <span>Snack</span>
          {filter}
        </IconButton>
      </div>

      {isError ? (
        <p>error: {error.message}</p>
      ) : (
        <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-4'>
          {isLoading ? (
            <>Loading...</>
          ) : (
            data?.map((record) => {
              return (
                <ProductCard
                  key={record?.id}
                  date={record?.date}
                  time={record?.time}
                  src={record?.src}
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
            size='large'
            intent='primary'
            variant='gradient'
          >
            記録をもっと見る
          </Button>
        </div>
      )}
    </div>
  );
};

export { ProductSection };
