import classNames from 'classnames';

import {
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

export default function RouletteItem({
  index,
  content,
  position,
  weight,
  totalWeight,
}: RouletteItemProps) {
  return (
    <div
      className='absolute w-60 h-60 rounded-t-full flex justify-center'
      key={content}
      style={{
        transform: getRotateDegree(position, weight, totalWeight),
      }}
    >
      <div
        className={classNames(
          'absolute top-0 left-0 w-60 h-60 rounded-full',
          getBgColorByIndex(index)
        )}
        style={{
          clipPath: getPolygonByDegree(weight, totalWeight),
          transform: getRotateDegree(0, -weight, totalWeight),
        }}
      />
      <span className='pt-4 z-10'>{content}</span>
    </div>
  );
}
