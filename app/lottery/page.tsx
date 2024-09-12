'use client';
import { useState, useCallback } from 'react';

import Button from '../ui/components/Button';
import Heading from '../ui/components/Heading';

import { getSixInFortyFive } from '../lib/lottery';

const bgColorOfNumber = (number: number) => {
  if (number < 10) return 'bg-yellow-400';
  if (number < 20) return 'bg-sky-400';
  if (number < 30) return 'bg-red-500';
  if (number < 40) return 'bg-gray-400';
  return 'bg-green-400';
};

function LotteryNumberItem({ number }: { number: number }) {
  const bgColor = bgColorOfNumber(number);
  return (
    <span
      className={`w-8 h-8 text-center rounded-full text-white leading-8 shadow-lg ${bgColor}`}
    >
      {number}
    </span>
  );
}

export default function Lottery() {
  const [lotteryNumberArray, setLotteryNumberArray] = useState<
    Array<Array<number>>
  >([]);
  const handleGenerate = () => {
    const newLotteryNumber = getSixInFortyFive();
    setLotteryNumberArray((prev) => prev.concat([newLotteryNumber]));
  };
  const handleDeleteAll = () => {
    setLotteryNumberArray([]);
  };

  return (
    <div className='flex flex-col p-4 items-center gap-4'>
      <Heading type='h4' text='로또 번호 추첨기' />
      <div className='w-60 flex justify-between'>
        <Button label='초기화' onClick={handleDeleteAll} warning />
        <Button label='생성' onClick={handleGenerate} primary />
      </div>
      <div className='flex flex-col gap-2'>
        {lotteryNumberArray.map((lotteryNumber) => (
          <div
            key={lotteryNumber.join('')}
            className='grid grid-cols-6 text-center gap-2'
          >
            {lotteryNumber.map((number) => (
              <LotteryNumberItem
                key={lotteryNumber.join('') + number}
                number={number}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
