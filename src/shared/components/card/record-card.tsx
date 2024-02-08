export interface RecordCardProps {
  src: string;
  title: string;
  subTitle: string;
  href: string;
}

const RecordCard = (props: RecordCardProps) => {
  const { src, title = '', subTitle = '', href = '#' } = props;

  return (
    <div className='relative bg-primary-300 p-6'>
      <div className='aspect-h-1 aspect-w-1 grayscale'>
        <img src={src} alt={subTitle} className='object-cover' />
        <div className='bg-black/50' />
      </div>
      <div className='absolute inset-0 flex flex-col items-center justify-center space-y-3'>
        <div className='font-sans text-2xl uppercase text-primary-300'>
          {title}
        </div>
        <a
          tabIndex={0}
          href={href}
          className='inline-flex items-center justify-center bg-primary-400 px-4 py-1 text-sm transition-all hover:bg-primary-400/90'
        >
          {subTitle}
        </a>
      </div>
    </div>
  );
};

export { RecordCard };
