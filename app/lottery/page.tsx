'use client';
import { useState } from 'react';

import { getSixInFortyFive } from '../lib/lottery';

export default function Lottery() {
  const [lotteryNumberArray, setLotteryNumberArray] = useState([]);
  const handleGenerate = () => {
    setLotteryNumberArray((prev) => prev.concat([getSixInFortyFive()]));
  };
  const handleDeleteAll = () => {
    setLotteryNumberArray([]);
  };

  return (
    <div className='w-60 flex flex-col p-4 items-center gap-4'>
      <h2 className='text-xl'>로또 번호 추첨기</h2>
      <div className='flex justify-between w-full'>
        <button onClick={handleDeleteAll}>초기화</button>
        <button onClick={handleGenerate}>생성</button>
      </div>
      <div className='w-full'>
        {lotteryNumberArray.map((lotteryNumber) => (
          <div
            key={lotteryNumber.join('')}
            className='grid grid-cols-6 text-center gap-1'
          >
            {lotteryNumber.map((number) => (
              <span key={lotteryNumber.join('') + number}>{number}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
