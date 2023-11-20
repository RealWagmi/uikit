import { SortData } from "./types";

export const defaultSortCallback = <T = any>(itemA: T, itemB: T, sortData: SortData<T>) => {
  const a = itemA[sortData.sortBy];
  const b = itemB[sortData.sortBy];
  const orderFactor = sortData.reverseOrder ? -1 : 1;
  if (a < b) return -1 * orderFactor;
  if (a > b) return 1 * orderFactor;
  return 0;
};

export const genAdaptiveGrid = (length: number, shown: number, gapCol = 8) => {
  const percent = 100 / shown;
  const gap = (gapCol * (shown - 1)) / shown;
  return Array.from({ length })
    .map(() => `calc(${percent}% - ${gap}px)`)
    .join(" ");
};
