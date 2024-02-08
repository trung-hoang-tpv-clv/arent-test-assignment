import { useState } from 'react';
import { Chart } from '@/shared/components/chart';
import { TableLayout } from '@/shared/components/section-layout';
import { BodyRecordFilterButton } from './body-record-filter-button';
import { RecordChartFilter, useBodyRecordChart } from '@/api';

const BodyRecordSection = () => {
  const [filter, setFilter] = useState<RecordChartFilter>(
    RecordChartFilter.DAY
  );
  const label = filter;
  const { data, isLoading, isError, error } = useBodyRecordChart({
    filter: filter,
  });

  return (
    <TableLayout
      id='body-record'
      title='body record'
      date='2022-07-31T01:33:29.567Z'
    >
      {isError ? (
        <p className='aspect-h-7 aspect-w-16'>error: {error.message}</p>
      ) : isLoading ? (
        <p className='aspect-h-7 aspect-w-16'>Loading...</p>
      ) : (
        <Chart displayData={data} labelText={label} />
      )}

      <div className='flex space-x-4'>
        <BodyRecordFilterButton
          value={filter}
          defaultValue={RecordChartFilter.DAY}
          setValue={setFilter}
        >
          日
        </BodyRecordFilterButton>
        <BodyRecordFilterButton
          value={filter}
          defaultValue={RecordChartFilter.WEEK}
          setValue={setFilter}
        >
          週
        </BodyRecordFilterButton>

        <BodyRecordFilterButton
          value={filter}
          defaultValue={RecordChartFilter.MONTH}
          setValue={setFilter}
        >
          月
        </BodyRecordFilterButton>

        <BodyRecordFilterButton
          value={filter}
          defaultValue={RecordChartFilter.YEAR}
          setValue={setFilter}
        >
          年
        </BodyRecordFilterButton>
      </div>
    </TableLayout>
  );
};

export { BodyRecordSection };
