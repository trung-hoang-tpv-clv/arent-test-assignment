import { Article, PaginationResult } from './interfaces';
import { axiosClient } from './client';
import { useInfiniteQuery } from '@tanstack/react-query';

const getArticles = async ({
  page,
  limit = 8,
}: {
  page: number;
  limit: number;
}): Promise<PaginationResult<Article>> => {
  try {
    const response = await axiosClient.get('articles', {
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

const useArticles = ({ limit = 8 }: { limit: number }) => {
  const query = useInfiniteQuery(
    ['articles', limit],
    async ({ pageParam = 1 }) => getArticles({ page: pageParam, limit }),
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

export { useArticles };
