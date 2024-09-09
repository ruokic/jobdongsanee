export function getSixInFortyFive() {
  const set = new Set();
  while (set.size < 6) {
    set.add(Math.floor(Math.random() * 45) + 1);
  }
  return [...set].toSorted((a, b) => a - b);
}
