import { SortData } from './types';

export const defaultSortCallback = <T = any>(itemA: T, itemB: T, sortData: SortData<T>) => {
    const a = itemA[sortData.sortBy];
    const b = itemB[sortData.sortBy];
    const orderFactor = sortData.reverseOrder ? -1 : 1;
    if (a < b) return -1 * orderFactor;
    if (a > b) return 1 * orderFactor;
    return 0;
};
