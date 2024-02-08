import { useQuery } from '@tanstack/react-query';
import { axiosClient } from './client';
import { TopPageChart } from './interfaces';

const getChartData = async (): Promise<TopPageChart> => {
  const response = await axiosClient.get('top-page-chart');

  return response.data;
};

const useTopPageChart = () => {
  const query = useQuery({
    queryKey: ['top-page-chart'],
    queryFn: getChartData,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return {
    ...query,
    error: query.error as Error,
  };
};

export { useTopPageChart };
