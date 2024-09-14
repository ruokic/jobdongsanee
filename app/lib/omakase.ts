const colorSet = [
  'bg-red-500',
  'bg-blue-400',
  'bg-yellow-400',
  'bg-sky-400',
  'bg-gray-400',
  'bg-green-400',
] as const;

export const getBgColorByIndex = (index: number) => {
  return colorSet[index % colorSet.length];
};

export const setRotateProperties = (
  target: HTMLDivElement | null,
  duration: number,
  degree: number
) => {
  if (!target) return;
  target.style.setProperty('transition-property', 'transform');
  target.style.setProperty('transition-timing-function', 'ease-in-out');
  target.style.setProperty('transition-duration', `${duration}ms`);
  target.style.setProperty('transform', `rotate(${degree}deg)`);
};

export const resetRotateProperties = (target: HTMLDivElement | null) => {
  if (!target) return;
  target.style.setProperty('transition-property', '');
  target.style.setProperty('transition-timing-function', '');
  target.style.setProperty('transition-duration', '');
  target.style.setProperty('transform', '');
};

export const getRotateDegree = (
  index: number,
  weight: number,
  totalWeight: number
) => {
  const offset = (360 / (totalWeight * 2)) * weight;
  const deg = offset + index * (360 / totalWeight);
  return deg;
};

export const getIndexByDegree = (
  degree: number,
  totalWeight: number,
  dataRotatePosition: Array<number>
) => {
  const weightIndex =
    Math.floor(((360 - (degree % 360)) / 360) * totalWeight) % totalWeight;
  for (let i = 0; i < dataRotatePosition.length; i++) {
    if (weightIndex < dataRotatePosition[i + 1]) return i;
  }
  return null;
};

export const getPolygonByDegree = (weight: number, totalWeight: number) => {
  const degree = (weight / totalWeight) * 360;
  const radian = (degree / 180) * Math.PI;

  if (degree <= 45) {
    const x = 50 + Math.tan(radian) * 50;
    return `polygon(50% 0%, ${x}% 0%, 50% 50%)`;
  }
  if (degree <= 90) {
    const y = 50 - Math.tan(Math.PI / 2 - radian) * 50;
    return `polygon(50% 0%, 100% 0%, 100% ${y}%, 50% 50%)`;
  }
  if (degree <= 135) {
    const y = 50 + Math.tan(radian - Math.PI / 2) * 50;
    return `polygon(50% 0%, 100% 0%, 100% ${y}%, 50% 50%)`;
  }
  if (degree <= 180) {
    const x = 50 + Math.tan(Math.PI - radian) * 50;
    return `polygon(50% 0%, 100% 0%, 100% 100%, ${x}% 100%, 50% 50%)`;
  }
  if (degree <= 225) {
    const x = 50 - Math.tan(radian - Math.PI) * 50;
    return `polygon(50% 0%, 100% 0%, 100% 100%, ${x}% 100%, 50% 50%)`;
  }
  if (degree <= 270) {
    const y = 50 + Math.tan((3 / 2) * Math.PI - radian) * 50;
    return `polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${y}%, 50% 50%)`;
  }
  if (degree <= 315) {
    const y = 50 - Math.tan(radian - (3 / 2) * Math.PI) * 50;
    return `polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${y}%, 50% 50%)`;
  }
  const x = 50 - Math.tan(2 * Math.PI - radian) * 50;
  return `polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${x}% 0%, 50% 50%)`;
};
