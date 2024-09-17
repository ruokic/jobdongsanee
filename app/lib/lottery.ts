export const getSixInFortyFive = () => {
  const set = new Set<number>();
  while (set.size < 6) {
    set.add(Math.floor(Math.random() * 45) + 1);
  }
  return [...set].toSorted((a, b) => a - b);
};

export const getBgColorByNumber = (number: number) => {
  if (number < 10) return 'bg-yellow-400';
  if (number < 20) return 'bg-sky-400';
  if (number < 30) return 'bg-red-500';
  if (number < 40) return 'bg-gray-400';
  return 'bg-green-400';
};
