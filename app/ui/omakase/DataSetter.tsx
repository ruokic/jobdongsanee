import { useRef } from 'react';

import { type RouletteDataType } from '@lib/omakase';

import Button from '@components/Button';

import DataItem from '@ui/omakase/DataItem';

interface DataSetterProps {
  data: Array<RouletteDataType>;
  handleAddData: (newContent: string, newWeight: number) => void;
  handleDeleteData: (targetContent: string) => void;
}

export default function DataSetter({
  data,
  handleAddData,
  handleDeleteData,
}: DataSetterProps) {
  const contentInputRef = useRef<HTMLInputElement>(null);
  const weightInputRef = useRef<HTMLSelectElement>(null);

  const handleClickAdd = () => {
    if (!contentInputRef.current?.value || !weightInputRef.current?.value)
      return;
    handleAddData(
      contentInputRef.current.value,
      Number(weightInputRef.current.value)
    );
    contentInputRef.current.value = '';
    weightInputRef.current.value = '1';
    contentInputRef.current.focus();
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-center p-2 gap-2 rounded shadow'>
        <input
          ref={contentInputRef}
          className='px-2 w-32'
          placeholder='메뉴'
          required
        />
        <select
          ref={weightInputRef}
          className='w-8 text-center'
          name='weight'
          id='weight'
          defaultValue='1'
        >
          {[1, 2, 3, 4, 5].map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <Button label='추가' onClick={handleClickAdd} primary />
      </div>
      <div className='flex flex-col gap-2 w-full'>
        {data.map(({ content, weight }) => (
          <DataItem
            key={content}
            content={content}
            weight={weight}
            handleDeleteData={handleDeleteData}
          />
        ))}
      </div>
    </div>
  );
}
