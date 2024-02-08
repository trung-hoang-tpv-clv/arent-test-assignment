import { Chip } from '@/shared/components/chip';
import { ReactNode } from 'react';

export interface BodyRecordFilterButtonProps {
  value: string | null;
  defaultValue: string;
  children?: ReactNode;
  setValue: (val: any) => void;
}

const BodyRecordFilterButton = (props: BodyRecordFilterButtonProps) => {
  const { value, defaultValue, children, setValue = () => {} } = props;

  const isActive = value === defaultValue;

  return (
    <Chip
      tabIndex={0}
      size='medium'
      intent='primary'
      variant={isActive ? 'solid' : 'plain'}
      onClick={() => {
        setValue(defaultValue);
      }}
    >
      {children}
    </Chip>
  );
};

export { BodyRecordFilterButton };
