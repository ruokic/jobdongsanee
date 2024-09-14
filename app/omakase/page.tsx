'use client';
import { useState, useRef } from 'react';

import classNames from 'classnames';

import {
  type RouletteDataType,
  setRotateProperties,
  resetRotateProperties,
  getIndexByDegree,
} from '../lib/omakase';

import Button from '../ui/components/Button';
import Heading from '../ui/components/Heading';

import Roulette from '../ui/omakase/Roulette';

const initialData = [
  { content: '조이스', weight: 1 },
  { content: '호프호프', weight: 1 },
  { content: '별미', weight: 1 },
  { content: '굶어', weight: 1 },
];

export default function Omakase() {
  const [data, setData] = useState<Array<RouletteDataType>>(initialData);
  const [trigger, setTrigger] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const rouletteRef = useRef<HTMLDivElement>(null);
  const timeoutID = useRef<ReturnType<typeof setTimeout> | null>(null);
  const totalWeight = data.reduce((acc, { weight }) => acc + weight, 0);
  const dataPosition = data.reduce(
    (acc, { weight }) => acc.concat((acc.at(-1) || 0) + weight),
    [0]
  );

  const handleAddSlot = () => {
    setData((prev) => prev.concat([{ content: '굶어', weight: 1 }]));
  };
  const handleDeleteSlot = (targetIndex: number) => {
    setData((prev) => prev.filter((_, index) => index !== targetIndex));
  };
  const handleRoulette = () => {
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
    }, duration);
  };

  const handleRouletteReset = () => {
    setTrigger(false);
    setSelectedIndex(null);
    clearTimeout(timeoutID.current || '');

    if (rouletteRef.current) {
      resetRotateProperties(rouletteRef.current);
    }
  };

  return (
    <div className='flex flex-col p-4 items-center gap-4'>
      <Heading type='h4' text='뭐 먹지???' />
      <div className='w-60 flex justify-center'>
        <Button
          label={trigger ? '다시하기' : '추첨하기'}
          onClick={trigger ? handleRouletteReset : handleRoulette}
          primary
        />
      </div>
      <div className='relative p-4 flex justify-center items-center'>
        <div
          className='absolute w-0 h-0 mx-auto top-0 z-50 rounded'
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
      {selectedIndex !== null ? data[selectedIndex].content : ''}
    </div>
  );
}
