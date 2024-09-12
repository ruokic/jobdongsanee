import { useState, useEffect } from 'react';

import classNames from 'classnames';

const bgColorOfNumber = (number: number) => {
  if (number < 10) return 'bg-yellow-400';
  if (number < 20) return 'bg-sky-400';
  if (number < 30) return 'bg-red-500';
  if (number < 40) return 'bg-gray-400';
  return 'bg-green-400';
};

export default function LotteryNumberItem({
  number,
  index,
}: {
  number: number;
  index: number;
}) {
  const [trigger, setTrigger] = useState(false);
  const bgColor = bgColorOfNumber(number);

  useEffect(() => {
    const timeoutKey = setTimeout(() => setTrigger(true), index * 50);

    return () => {
      clearTimeout(timeoutKey);
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
        bgColor
      )}
    >
      {number}
    </span>
  );
}
