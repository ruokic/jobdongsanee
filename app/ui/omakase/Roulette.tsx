import React, { forwardRef } from 'react';

import classNames from 'classnames';

import {
  type RouletteDataType,
  getBgColorByIndex,
  getRotateDegree,
  getPolygonByDegree,
} from '@lib/omakase';

interface RouletteItemProps {
  index: number;
  content: string;
  position: number;
  weight: number;
  totalWeight: number;
}

interface RouletteProps {
  data: Array<RouletteDataType>;
  totalWeight: number;
  dataPosition: Array<number>;
}

function RouletteItem({
  index,
  content,
  position,
  weight,
  totalWeight,
}: RouletteItemProps) {
  const containerTransform = `rotate(${getRotateDegree(
    position,
    weight,
    totalWeight
  )}deg)`;
  const boardTransform = `rotate(-${getRotateDegree(
    0,
    weight,
    totalWeight
  )}deg)`;

  return (
    <div
      className={classNames(
        'absolute w-60 h-60 rounded-t-full flex justify-center'
      )}
      key={content}
      style={{
        transform: containerTransform,
      }}
    >
      <div
        className={classNames(
          'absolute top-0 left-0 w-60 h-60 rounded-full',
          getBgColorByIndex(index)
        )}
        style={{
          clipPath: getPolygonByDegree(weight, totalWeight),
          transform: boardTransform,
        }}
      />
      <span className='pt-4 z-10'>{content}</span>
    </div>
  );
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
