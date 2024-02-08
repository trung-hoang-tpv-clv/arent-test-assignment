import { useQuery } from '@tanstack/react-query';
import { axiosClient } from './client';
import { RecordChart, RecordChartFilter } from './interfaces';

const getBodyRecordChartData = async ({
  filter,
}: {
  filter: RecordChartFilter;
}): Promise<RecordChart[]> => {
  const response = await axiosClient.get('record-chart', {
    params: { type: filter },
  });

  return response.data;
};

const useBodyRecordChart = ({ filter }: { filter: RecordChartFilter }) => {
  const query = useQuery({
    queryKey: ['body-record-chart', filter],
    queryFn: () => getBodyRecordChartData({ filter }),
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return {
    ...query,
    data: query.data?.[0].data || [],
    error: query.error as Error,
  };
};

export { useBodyRecordChart };
