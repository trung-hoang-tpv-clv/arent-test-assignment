import { Exercise, PaginationResult } from './interfaces';
import { axiosClient } from './client';
import { useInfiniteQuery } from '@tanstack/react-query';

const getExercises = async ({
  page,
  limit = 8,
}: {
  page: number;
  limit: number;
}): Promise<PaginationResult<Exercise>> => {
  try {
    const response = await axiosClient.get('exercises', {
      params: { _page: page, _limit: limit },
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

const useExercises = ({ limit = 8 }: { limit: number }) => {
  const query = useInfiniteQuery(
    ['exercises', limit],
    async ({ pageParam = 1 }) => getExercises({ page: pageParam, limit }),
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

export { useExercises };
