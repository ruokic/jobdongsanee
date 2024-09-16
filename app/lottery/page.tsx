'use client';
import { useState } from 'react';

import classNames from 'classnames';

import Button from '@components/Button';
import Heading from '@components/Heading';

import LotteryNumberItem from '@ui/lottery/LotteryNumberItem';

import { getSixInFortyFive } from '@lib/lottery';

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
      <Heading type='h4' text='로또 번호 추천' />
      <div className='w-60 flex justify-between'>
        <Button label='초기화' onClick={handleDeleteAll} warning />
        <Button label='생성' onClick={handleGenerate} primary />
      </div>
      <div className='flex flex-col gap-3'>
        {lotteryNumberArray.map((lotteryNumber) => (
          <div
            key={lotteryNumber.join('')}
            className='grid grid-cols-6 text-center gap-2'
          >
            {lotteryNumber.map((number, index) => (
              <LotteryNumberItem
                key={lotteryNumber.join('') + number}
                number={number}
                index={index}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
