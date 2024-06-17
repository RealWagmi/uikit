import { ReactNode } from 'react';

export type ITableHeader<T> = {
    title?: ReactNode;
    key?: keyof T & string;
    sortable?: boolean;
    sortFunc?: (a: T, b: T, reverseOrder: boolean) => number;
    renderFunc?: (item: T) => ReactNode;
    tooltip?: ReactNode;
    width?: string;
};

export interface SortData<T> {
    sortBy: keyof T;
    reverseOrder: boolean;
}

export interface ITableOptions<T> {
    page: number;
    sort?: SortData<T> | undefined;
    total: number;
}

export interface ITableServerProps<T> {
    options: ITableOptions<T>;
    perPage: number;
    headers: ITableHeader<T>[];
    items: T[];
    loading?: boolean;
    changeOptions?: (value: ITableOptions<T>) => void;
    clickRow?: (item: T) => void;
    minHeight?: string;
    header?: ReactNode;
    emptyCard?: ReactNode;
    isSync?: boolean;
}

export interface ITableProps<T> extends Omit<ITableServerProps<T>, 'options' | 'changeOptions' | 'isSync'> {
    page: number;
    changePage?: (page: number) => void;
}
