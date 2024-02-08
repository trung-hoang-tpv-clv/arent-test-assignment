import { Diary, PaginationResult } from './interfaces';
import { axiosClient } from './client';
import { useInfiniteQuery } from '@tanstack/react-query';

const getDiaries = async ({
  page,
  limit = 8,
}: {
  page: number;
  limit: number;
}): Promise<PaginationResult<Diary>> => {
  try {
    const response = await axiosClient.get('diaries', {
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

const useDiaries = ({ limit = 8 }: { limit: number }) => {
  const query = useInfiniteQuery(
    ['diaries', limit],
    async ({ pageParam = 1 }) => getDiaries({ page: pageParam, limit }),
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

export { useDiaries };
