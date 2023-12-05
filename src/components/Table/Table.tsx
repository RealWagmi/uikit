import { ITableProps, SortData } from "./types";
import React, { useMemo, useState, memo } from "react";
import { defaultSortCallback } from "./utils";
import TableServer from "./TableServer";
function Table<T = any>({ headers, items, page, perPage, changePage, ...props }: ITableProps<T>) {
  const [sortData, setSortData] = useState<SortData<T>>();

  const sortedItems = useMemo(() => {
    const newItems = [...items];
    if (sortData?.sortBy) {
      const sortedHeader = headers.find((header) => header.key === sortData.sortBy);
      if (sortedHeader?.sortFunc) {
        newItems.sort((a, b) => sortedHeader.sortFunc(a, b, sortData.reverseOrder));
      } else {
        newItems.sort((itemA, itemB) => defaultSortCallback(itemA, itemB, sortData));
      }
    }
    return newItems;
  }, [items, sortData]);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return sortedItems.slice(start, end);
  }, [sortedItems, perPage]);

  return (
    <TableServer<T>
      items={paginatedItems}
      options={{ page, sort: sortData, total: items.length }}
      changeOptions={(value) => {
        setSortData(value.sort);
        if (changePage) changePage(value.page);
      }}
      headers={headers}
      perPage={perPage}
      isSync={true}
      {...props}
    />
  );
}

export default memo(Table);
