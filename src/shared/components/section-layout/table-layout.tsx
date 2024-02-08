import { ReactNode, useMemo } from 'react';
import dayjs from 'dayjs';

export interface TableLayoutProps {
  date: string;
  title: string;
  children: ReactNode;
  id: string;
}

const TableLayout = (props: TableLayoutProps) => {
  const { children, date, title, id } = props;

  const formmatedDate = useMemo(() => {
    return dayjs(date).format('YYYY.MM.DD');
  }, [date]);

  return (
    <div className='space-y-1 bg-dark-500 px-6 py-4'>
      <div className='flex space-x-6 font-sans'>
        <h2
          id={id ? id : undefined}
          className='flex max-w-[9ch] flex-col text-lg uppercase'
        >
          {title}
        </h2>
        <time dateTime={date} className='text-1.5xl'>
          {formmatedDate}
        </time>
      </div>

      {children}
    </div>
  );
};

export { TableLayout };
