import { useState, useEffect } from 'react';

import classNames from 'classnames';

import { getBgColorByNumber } from '@lib/lottery';

interface LotteryNumberItemProps {
  number: number;
  index: number;
}

export default function LotteryNumberItem({
  number,
  index,
}: LotteryNumberItemProps) {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => setTrigger(true), index * 50);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [index]);

  return (
    <span
      className={classNames(
        'w-8 h-8 text-center rounded-full text-white leading-8 shadow-lg transition duration-500',
        {
          '-translate-x-1 opacity-0': !trigger,
          'translate-x-0 opacity-100': trigger,
        },
        getBgColorByNumber(number)
      )}
    >
      {number}
    </span>
  );
}
