export interface RecommendCardProps {
  title: string;
  subTitle: string;
}

const RecommendCard = (props: RecommendCardProps) => {
  const { title = '', subTitle = '' } = props;

  return (
    <a tabIndex={0} className='relative text-lg'>
      <div className='aspect-h-10 aspect-w-15 bg-dark-600' />
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2 text-center'>
        <div className='font-sans text-1.5xl uppercase text-primary-300'>
          {title}
        </div>
        <hr className='mx-auto h-[2px] max-w-[56px]' />
        <div>{subTitle}</div>
      </div>
    </a>
  );
};

export { RecommendCard };
