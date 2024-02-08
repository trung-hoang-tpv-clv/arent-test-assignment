import { useTopPageChart } from '@/api';
import { Chart } from '@/shared/components/chart';
import { RadialProgress } from '@/shared/components/radial-progress';

const HeroSection = () => {
  const { data, isLoading, isError, error } = useTopPageChart();

  return (
    <div className='flex h-[316px] flex-col items-center overflow-hidden bg-dark-600 lg:flex-row'>
      {isError ? (
        <p className='w-full text-center'>error: {error.message}</p>
      ) : isLoading ? (
        <p className='w-full text-center'>loading...</p>
      ) : (
        <>
          <div className='relative flex h-full w-full items-center justify-center lg:w-[45%]'>
            <img
              src='./images/d01.jpg'
              alt='progress bg image'
              loading='eager'
              className='absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-center object-cover'
            />
            <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-r from-primary-300 to-primary-400 opacity-10' />
            <RadialProgress value={data?.percentage} date={data?.date} />
          </div>
          <div className='h-full flex-1 px-14 py-3'>
            <Chart displayData={data?.data} />
          </div>
        </>
      )}
    </div>
  );
};

export { HeroSection };
