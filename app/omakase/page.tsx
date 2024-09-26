'use client';

import React, { useState, useReducer, useRef } from 'react';

import useModal from '@lib/hooks/useModal';

import {
  type RouletteDataType,
  setRotateProperties,
  resetRotateProperties,
  getIndexByDegree,
} from '@lib/omakase';

import Button from '@components/Button';
import Heading from '@components/Heading';

import DataSetter from '@ui/omakase/DataSetter';
import Roulette from '@ui/omakase/Roulette';

const initialData = [
  { content: '파스타', weight: 2 },
  { content: '돈까스', weight: 2 },
  { content: '제육', weight: 2 },
  { content: '초밥', weight: 2 },
  { content: '칼국수', weight: 1 },
  { content: '짜장면', weight: 1 },
  { content: '찌개', weight: 1 },
  { content: '컵라면', weight: 1 },
];

type ActionType =
  | {
      type: 'add';
      newContent: string;
      newWeight: number;
    }
  | {
      type: 'delete';
      targetContent: string;
    }
  | {
      type: 'loadPreset';
      preset: Array<RouletteDataType>;
    };

const reducer: React.Reducer<Array<RouletteDataType>, ActionType> = (
  data,
  action
) => {
  switch (action.type) {
    case 'add': {
      const { newContent, newWeight } = action;
      if (data.some(({ content }) => content === newContent)) {
        return data.map(({ content, weight }) => {
          if (content !== newContent) return { content, weight };
          return { content, weight: weight + newWeight };
        });
      }
      return data.concat({ content: newContent, weight: newWeight });
    }
    case 'delete': {
      const { targetContent } = action;
      return data.filter(({ content }) => content !== targetContent);
    }
    case 'loadPreset': {
      const { preset } = action;
      return preset;
    }
    default:
      return data;
  }
};

export default function Omakase() {
  const [data, dispatch] = useReducer<
    React.Reducer<Array<RouletteDataType>, ActionType>
  >(reducer, initialData);
  const [trigger, setTrigger] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const rouletteRef = useRef<HTMLDivElement>(null);
  const timeoutID = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { Modal, openModal, closeModal } = useModal();
  const totalWeight = data.reduce((acc, { weight }) => acc + weight, 0);
  const dataPosition = data.reduce(
    (acc, { weight }) => acc.concat((acc.at(-1) || 0) + weight),
    [0]
  );

  const handleSpinRoulette = () => {
    if (trigger) return;
    const key = Math.random();
    const duration = 5000 + Math.floor(key * 1000);
    const degree = Math.floor((key + 10) * 360);

    setTrigger(true);

    if (rouletteRef.current) {
      setRotateProperties(rouletteRef.current, duration, degree);
    }

    timeoutID.current = setTimeout(() => {
      setSelectedIndex(getIndexByDegree(degree, totalWeight, dataPosition));
      openModal();
    }, duration);
  };

  const handleResetRoulette = () => {
    setTrigger(false);
    setSelectedIndex(null);
    clearTimeout(timeoutID.current || '');
    closeModal();

    if (rouletteRef.current) {
      resetRotateProperties(rouletteRef.current);
    }
  };

  const handleAddData = (newContent: string, newWeight: number) => {
    dispatch({ type: 'add', newContent, newWeight });
  };

  const handleDeleteData = (targetContent: string) => {
    dispatch({ type: 'delete', targetContent });
  };

  const handleSavePreset = () => {
    localStorage.setItem('omakase_data', JSON.stringify(data));
  };

  const handleLoadPreset = () => {
    const preset = localStorage.getItem('omakase_data');
    if (preset) {
      dispatch({ type: 'loadPreset', preset: JSON.parse(preset) });
    }
  };

  return (
    <div className='flex flex-col p-4 items-center gap-4'>
      <Heading type='h4' text='뭐 먹지???' />
      <div className='w-60 flex justify-center'>
        <Button
          label={trigger ? '다시하기' : '추첨하기'}
          onClick={trigger ? handleResetRoulette : handleSpinRoulette}
          primary
        />
      </div>
      <div className='relative p-4 flex justify-center items-center overflow-hidden'>
        <div
          className='absolute w-0 h-0 mx-auto top-0 z-20 rounded'
          style={{
            borderTop: '30px solid red',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
          }}
        />
        <Roulette
          ref={rouletteRef}
          data={data}
          totalWeight={totalWeight}
          dataPosition={dataPosition}
        />
      </div>
      <DataSetter
        data={data}
        handleAddData={handleAddData}
        handleDeleteData={handleDeleteData}
      />
      <div className='flex justify-center gap-2'>
        <Button label='프리셋 저장' onClick={handleSavePreset} primary />
        <Button label='프리셋 로드' onClick={handleLoadPreset} primary />
      </div>
      <Modal
        contents={
          <div className='text-center'>
            <Heading type='h3' text={data[selectedIndex ?? -1]?.content} />
          </div>
        }
      />
    </div>
  );
}
