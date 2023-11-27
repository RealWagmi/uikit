import { ReactNode } from "react";

export type ITableHeader<T> = {
  title?: ReactNode;
  key?: keyof T & string;
  sortable?: boolean;
  sortFunc?: (a: T, b: T, reverseOrder: boolean) => number;
  renderFunc?: (item: T) => ReactNode;
  tooltip?: ReactNode;
  width?: string;
};
export interface ITableProps<T> {
  page: number;
  perPage?: number;
  headers: ITableHeader<T>[];
  items: T[];
  loading?: boolean;
  changePage?: (page: number) => void;
  clickRow?: (item: T) => void;
  minHeight?: string;
  header?: ReactNode;
  emptyCard?: ReactNode;
}

export interface SortData<T> {
  sortBy: keyof T;
  reverseOrder: boolean;
}
