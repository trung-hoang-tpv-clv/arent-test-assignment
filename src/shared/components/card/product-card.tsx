import dayjs from 'dayjs';
import { useMemo } from 'react';

export interface ProductCardProps {
  src: string;
  alt?: string;
  date: string;
  time: string;
}

const ProductCard = (props: ProductCardProps) => {
  const { src, alt, date, time } = props;

  const formattedDate = useMemo(() => {
    if (!date) return;
    const day = dayjs(date);

    return day.format('MM.YY');
  }, [date]);

  return (
    <a tabIndex={0} className='relative font-sans'>
      <div className='aspect-h-1 aspect-w-1'>
        <img src={src} alt={alt} className='object-cover' />
      </div>
      <time
        className='absolute bottom-0 left-0 bg-primary-300 p-2'
        dateTime={date}
      >
        <span>{formattedDate}</span>
        {time && <span className='capitalize'>.{time}</span>}
      </time>
    </a>
  );
};

export { ProductCard };
