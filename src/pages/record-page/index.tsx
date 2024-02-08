import { RecordNavigationSection } from './components/record-navigation';
import { BodyRecordSection } from './components/body-record';
import { ExerciseTableSection } from './components/exercise-table';
import { MyDiarySection } from './components/my-diary';

const RecordPage = () => {
  return (
    <div className='container mx-auto mt-12 space-y-12'>
      <RecordNavigationSection />
      <BodyRecordSection />
      <ExerciseTableSection />
      <MyDiarySection />
    </div>
  );
};

export default RecordPage;
