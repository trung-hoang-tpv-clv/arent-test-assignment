import dayjs from 'dayjs';
import { useMemo } from 'react';

export interface MyDiaryCardProps {
  date: string;
  description: string;
}

const MyDiaryCard = (props: MyDiaryCardProps) => {
  const { date, description } = props;

  const formmatedDate = useMemo(() => {
    if (!date) return;
    const day = dayjs(date);

    const dateFormat = day.format('YYYY.MM.DD');
    const timeFormat = day.format('HH:mm');

    return {
      date: dateFormat,
      hour: timeFormat,
    };
  }, []);

  return (
    <li
      tabIndex={0}
      className='focus-ring space-y-2 border-2 border-[#707070] p-4 pb-7 text-dark-500'
    >
      <div className='flex flex-col font-sans text-lg'>
        <time dateTime={date}>{formmatedDate?.date}</time>
        <time dateTime={date}>{formmatedDate?.hour}</time>
      </div>
      <div className='line-clamp-6 text-xs'>{description}</div>
    </li>
  );
};

export { MyDiaryCard };
