import dayjs from 'dayjs';
import { useMemo } from 'react';

export interface RadialProgressProps {
  value: number;
  date: string;
}

const RadialProgress = (props: RadialProgressProps) => {
  const { value = 0, date } = props;

  const totalProgress = 126.92;
  const progress = totalProgress - totalProgress / (100 / value);

  const formattedDate = useMemo(() => {
    if (!date) return;
    return dayjs(date).format('MM.YY');
  }, [date]);

  return (
    <div
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className='relative h-[181px] w-[181px] text-ellipsis rounded-full font-sans drop-shadow-neon'
    >
      <svg viewBox='22 22 44 44' className='-rotate-90'>
        <circle
          style={{ strokeDasharray: totalProgress, strokeDashoffset: progress }}
          className='stroke-light-default transition-[stroke-dashoffset]'
          cx='44'
          cy='44'
          r='20.2'
          fill='none'
          strokeWidth='1'
        />
      </svg>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        {formattedDate && (
          <span className='text-shadow-none text-lg'>{formattedDate}</span>
        )}
        <span className='text-shadow-none ml-1 text-2xl'>{value}%</span>
      </div>
    </div>
  );
};

export { RadialProgress };
