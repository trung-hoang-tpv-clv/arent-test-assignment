export interface ExerciseTableItemProps {
  title: string;
  kcal: number;
  duration: string;
}

const ExerciseTableItem = (props: ExerciseTableItemProps) => {
  const { title = '', kcal = 0, duration = '' } = props;

  return (
    <li
      tabIndex={0}
      className='focus-ring mb-[2px] flex border-b border-b-[#777] text-lg'
    >
      <div className='mr-4'>●</div>
      <div className='flex flex-col'>
        <span className='text-base'>{title}</span>
        <span className='font-sans text-primary-300'>{kcal}kcal</span>
      </div>
      <div className='ml-auto'>
        <span className='font-sans text-primary-300'>{duration}</span>
      </div>
    </li>
  );
};

export { ExerciseTableItem };
