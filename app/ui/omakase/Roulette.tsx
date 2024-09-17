import React, { forwardRef } from 'react';

import { type RouletteDataType } from '@lib/omakase';

import RouletteItem from '@ui/omakase/RouletteItem';

interface RouletteProps {
  data: Array<RouletteDataType>;
  totalWeight: number;
  dataPosition: Array<number>;
}

function Roulette(
  { data, totalWeight, dataPosition }: RouletteProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div ref={ref} className='relative w-60 h-60 flex text-white rounded-full'>
      {data.map(({ content, weight }, index) => (
        <RouletteItem
          key={content}
          index={index}
          content={content}
          position={dataPosition[index]}
          weight={weight}
          totalWeight={totalWeight}
        />
      ))}
    </div>
  );
}

export default forwardRef(Roulette);
