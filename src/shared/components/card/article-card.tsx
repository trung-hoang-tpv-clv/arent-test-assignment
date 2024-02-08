import dayjs from 'dayjs';
import { useMemo } from 'react';

export interface ArticleCardProps {
  src: string;
  date: string;
  tags: string[];
  title: string;
}

const ArticleCard = (props: ArticleCardProps) => {
  const { src, date, title = '', tags = [] } = props;

  const formattedDate = useMemo(() => {
    if (!date) return;
    const day = dayjs(date);
    return {
      date: day.format('YYYY.MM.DD'),
      time: day.format('HH:mm'),
    };
  }, [date]);

  return (
    <article className='flex flex-col space-y-1.5 text-base'>
      <a tabIndex={0} className='aspect-h-10 aspect-w-16'>
        <img src={src} alt='' />
        <div className='bottom-0 left-0 right-auto top-auto h-auto w-auto space-x-3 bg-primary-300 px-2 py-1 font-sans'>
          <time dateTime={date}>{formattedDate?.date}</time>
          <time dateTime={date}>{formattedDate?.time}</time>
        </div>
      </a>
      <a tabIndex={0} className='line-clamp-2 text-dark-500'>
        {title}
      </a>
      {tags?.length > 0 && (
        <ul className='flex space-x-2 text-ellipsis'>
          {tags.map((tag: string, index: number) => {
            return (
              <li key={index}>
                <a tabIndex={0} className='text-primary-300'>
                  #{tag}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
};

export { ArticleCard };
