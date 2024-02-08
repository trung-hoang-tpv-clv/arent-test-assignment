import { PaginationResult, Product, ProductTime } from './interfaces';
import { axiosClient } from './client';
import { useInfiniteQuery } from '@tanstack/react-query';

const getProducts = async ({
  page,
  limit = 8,
  time,
}: {
  page: number;
  limit: number;
  time: ProductTime;
}): Promise<PaginationResult<Product>> => {
  try {
    const response = await axiosClient.get('products', {
      params: { _page: page, _limit: limit, time: time },
    });

    return {
      data: response.data,
      page,
      totalCount: +response.headers['x-total-count'],
    };
  } catch {
    return { data: [], page, totalCount: 0 };
  }
};

const useProducts = ({
  limit = 8,
  filter,
}: {
  limit: number;
  filter: ProductTime;
}) => {
  const query = useInfiniteQuery(
    ['products', limit, filter],
    async ({ pageParam = 1 }) =>
      getProducts({ page: pageParam, limit, time: filter }),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      getNextPageParam: (lastPage, pages) => {
        if (Math.ceil(lastPage.totalCount / limit) > pages.length)
          return lastPage.page + 1;
        return undefined;
      },
    }
  );

  return {
    ...query,
    data: query.data?.pages.flatMap(({ data }) => data) || [],
    error: query.error as Error,
  };
};

export { useProducts };
