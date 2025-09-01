export const inRange = (n: number, start: number, end?: number): boolean => {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return n >= Math.min(start, end) && n < Math.max(start, end);
};
