import { forwardRef } from 'react';

import classNames from 'classnames';

import {
  getBgColorByIndex,
  getRotateDegree,
  getPolygonByDegree,
} from '../../lib/omakase';

interface RouletteItemProps {
  index: number;
  content: string;
  weight: number;
  totalWeight: number;
}

interface RouletteProps {
  data: Array<{ content: string; weight: number }>;
  totalWeight: number;
  dataPosition: Array<number>;
}

function RouletteItem({
  index,
  content,
  weight,
  totalWeight,
}: RouletteItemProps) {
  const transform = `rotate(-${getRotateDegree(0, weight, totalWeight)}deg)`;

  return (
    <>
      <div
        className='absolute border border-white w-0 origin-bottom z-10'
        style={{
          padding: '0 0 calc(50% - 0.1rem) 0',
          transform,
        }}
      />
      <div
        className={classNames(
          'absolute top-0 left-0 w-60 h-60 rounded-full',
          getBgColorByIndex(index)
        )}
        style={{
          clipPath: getPolygonByDegree(weight, totalWeight),
          transform,
        }}
      />
      <span className='pt-4 z-10'>{content}</span>
    </>
  );
}

export default forwardRef(function Roulette(
  { data, totalWeight, dataPosition }: RouletteProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div ref={ref} className='relative w-60 h-60 flex text-white rounded-full'>
      {data.map(({ content, weight }, index) => (
        <div
          className={classNames(
            'absolute w-60 h-60 rounded-t-full flex justify-center'
          )}
          key={content}
          style={{
            transform: `rotate(${getRotateDegree(
              dataPosition[index],
              weight,
              totalWeight
            )}deg)`,
          }}
        >
          <RouletteItem
            index={index}
            content={content}
            weight={weight}
            totalWeight={totalWeight}
          />
        </div>
      ))}
    </div>
  );
});
