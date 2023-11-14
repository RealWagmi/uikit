import {
  TableContent,
  TableContentWrap,
  TableHeader,
  TableHeaderTitleBtn,
  TableItem,
  TablePagBtn,
  TablePagWrap,
  TableWrap,
} from "./styles";
import { ITableProps, SortData } from "./types";
import Text from "../Text";
import { ArrowLeftIcon, QuestionIcon } from "../Svg";
import Tooltip from "../Tooltip";
import { Box, Flex } from "../Box";
import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg/Svg";
import { defaultSortCallback } from "./utils";
import { LoadingSpinner } from "../Loaders";

function SortBtn({ data, active }: { data: SortData<any> | undefined; active: boolean }) {
  const theme = useTheme();
  const directColor = active && data && !data.reverseOrder ? theme.colors.primaryDefault : theme.colors.darkGray;
  const reverseColor = active && data?.reverseOrder ? theme.colors.primaryDefault : theme.colors.darkGray;
  return (
    <Svg viewBox="0 0 12 12" size={"12px"} mr={"4px"} fill="none">
      <path d="M5.25 9L3.75 10.5L2.25 9" stroke={directColor} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.75 3L8.25 1.5L9.75 3" stroke={reverseColor} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.25 10.5V1.5" stroke={reverseColor} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.75 1.5V10.5" stroke={directColor} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default function Table<T = any>({
  headers,
  items,
  page,
  perPage = 10,
  minHeight,
  header,
  changePage = (page: number) => {},
  loading,
  emptyCard,
}: ITableProps<T>) {
  const maxPage = useMemo(() => Math.ceil(items.length / perPage), [items, perPage]);

  const theme = useTheme();

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

  useEffect(() => {
    changePage(1);
  }, [sortData, perPage]);

  return (
    <TableWrap minHeight={minHeight}>
      <Box width={"100%"}>{header}</Box>
      <TableContentWrap>
        {items.length && !loading ? (
          <TableContent cols={headers}>
            {headers.map((header, i) => {
              const isSortable = !!(header.sortable || header.sortFunc);
              return (
                <TableHeader key={i}>
                  {header.key && header.title && (
                    <TableHeaderTitleBtn
                      disabled={!isSortable}
                      onClick={() => {
                        const sortBy = header.key;
                        if (sortBy) {
                          if (sortData?.sortBy === sortBy && sortData.reverseOrder) setSortData(undefined);
                          else {
                            const reverseOrder = sortData?.sortBy !== sortBy ? false : !sortData?.reverseOrder;
                            setSortData({ sortBy, reverseOrder });
                          }
                        }
                      }}
                      active={sortData?.sortBy === header.key}
                    >
                      {isSortable && <SortBtn data={sortData} active={sortData?.sortBy === header.key} />}
                      <span>{header.title}</span>
                    </TableHeaderTitleBtn>
                  )}
                  {header.tooltip && (
                    <Box ml={"4px"}>
                      <Tooltip content={header.tooltip}>
                        <QuestionIcon size={"13px"} color="darkGray" />
                      </Tooltip>
                    </Box>
                  )}
                </TableHeader>
              );
            })}
            {paginatedItems.map((item) =>
              headers.map((header, j) => {
                const customContent = header.renderFunc && header.renderFunc(item);
                const nativeContent = String(header.key ? item[header.key] : "");
                const content = customContent || nativeContent;
                return <TableItem key={j}>{content}</TableItem>;
              })
            )}
          </TableContent>
        ) : loading ? (
          <Flex alignItems={"center"} justifyContent={"center"} height={"100%"}>
            <LoadingSpinner />
          </Flex>
        ) : (
          <Flex alignItems={"center"} justifyContent={"center"} height={"100%"}>
            {emptyCard || <Text color="darkGray">No data</Text>}
          </Flex>
        )}
      </TableContentWrap>
      {maxPage > 1 && (
        <TablePagWrap>
          <TablePagBtn
            disabled={!(page > 1)}
            onClick={() => {
              changePage(page - 1);
            }}
          >
            <ArrowLeftIcon size={"16px"} color="primaryDefault" />
          </TablePagBtn>
          <Flex>
            <Box mr={"0.4em"}>Page</Box>
            <Box color={theme.colors.primaryDefault} minWidth={"10px"}>
              {page}
            </Box>
            <Box mx={"0.4em"}>of</Box>
            <Box>{maxPage}</Box>
          </Flex>
          <TablePagBtn
            disabled={!(page < maxPage)}
            onClick={() => {
              changePage(page + 1);
            }}
          >
            <ArrowLeftIcon size={"16px"} style={{ transform: "scaleX(-1)" }} color="primaryDefault" />
          </TablePagBtn>
        </TablePagWrap>
      )}
    </TableWrap>
  );
}
