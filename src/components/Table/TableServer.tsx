import {
  TableContent,
  TableContentWrap,
  TableHeader,
  TableHeaderTitleBtn,
  TableHeaderWrap,
  TableItem,
  TableLoadWrap,
  TablePagBtn,
  TablePagWrap,
  TableRow,
  TableWrap,
} from "./styles";
import { ITableOptions, ITableServerProps, SortData } from "./types";
import { Text } from "../Text";
import { ArrowLeftIcon, QuestionIcon } from "../Svg";
import { Tooltip } from "../Tooltip";
import { Box, Flex } from "../Box";
import React, { useMemo, useCallback } from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg/Svg";
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

function TableServer<T = any>({
  headers,
  items,
  options,
  perPage,
  minHeight,
  header,
  changeOptions,
  loading,
  emptyCard,
  clickRow,
  isSync,
}: ITableServerProps<T>) {
  const maxPage = useMemo(() => Math.ceil(options.total / perPage), [options, perPage]);

  const theme = useTheme();

  const updateOptions = useCallback(
    (value: ITableOptions<T>) => {
      if (changeOptions && !loading) {
        changeOptions(value);
      }
    },
    [loading, changeOptions]
  );

  return (
    <TableWrap minHeight={minHeight}>
      <TableHeaderWrap>{header}</TableHeaderWrap>
      <TableContentWrap>
        {items.length || loading ? (
          <TableContent data-testid={`table-content`} cols={headers}>
            <TableRow cols={headers}>
              {headers.map((header, i) => {
                const isSortable = !!(header.key && (header.sortable || (header.sortFunc && isSync)));
                return (
                  <TableHeader key={i} data-testid={`table-header-${i}`}>
                    {header.title && (
                      <TableHeaderTitleBtn
                        onClick={() => {
                          if (isSortable) {
                            const sortBy = header.key;
                            if (sortBy) {
                              if (options.sort?.sortBy === sortBy && options.sort.reverseOrder) {
                                updateOptions({ ...options, sort: undefined, page: 1 });
                              } else {
                                const reverseOrder =
                                  options.sort?.sortBy !== sortBy ? false : !options.sort?.reverseOrder;
                                updateOptions({ ...options, sort: { sortBy, reverseOrder }, page: 1 });
                              }
                            }
                          }
                        }}
                        clickable={isSortable}
                        active={!!header.key && options.sort?.sortBy === header.key}
                      >
                        {isSortable && (
                          <SortBtn data={options.sort || undefined} active={options.sort?.sortBy === header.key} />
                        )}
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
            </TableRow>
            {!loading &&
              items.map((item, k) => (
                <TableRow
                  cols={headers}
                  key={k}
                  onClick={() => {
                    if (clickRow) clickRow(item);
                  }}
                  clickable={!!clickRow}
                >
                  {headers.map((header, j) => {
                    const customContent = header.renderFunc && header.renderFunc(item);
                    const nativeContent = String(header.key ? item[header.key] : "");
                    const content = customContent || nativeContent;
                    return <TableItem key={j}>{content}</TableItem>;
                  })}
                </TableRow>
              ))}
          </TableContent>
        ) : (
          !loading && (
            <Flex alignItems={"center"} justifyContent={"center"} height={"100%"}>
              {emptyCard || <Text color="darkGray">No data</Text>}
            </Flex>
          )
        )}
        {loading && (
          <TableLoadWrap>
            <LoadingSpinner size={"32px"} />
          </TableLoadWrap>
        )}
      </TableContentWrap>
      {maxPage > 1 && (
        <TablePagWrap>
          <TablePagBtn
            data-testid={`table-btn-previous`}
            disabled={!(options.page > 1)}
            onClick={() => {
              updateOptions({ ...options, page: options.page - 1 });
            }}
          >
            <ArrowLeftIcon size={"16px"} color="primaryDefault" />
          </TablePagBtn>
          <Flex>
            <Box mr={"0.4em"}>Page</Box>
            <Box color={theme.colors.primaryDefault} minWidth={"10px"}>
              {options.page}
            </Box>
            <Box mx={"0.4em"}>of</Box>
            <Box>{maxPage}</Box>
          </Flex>
          <TablePagBtn
            data-testid={`table-btn-next`}
            disabled={!(options.page < maxPage)}
            onClick={() => {
              updateOptions({ ...options, page: options.page + 1 });
            }}
          >
            <ArrowLeftIcon size={"16px"} style={{ transform: "scaleX(-1)" }} color="primaryDefault" />
          </TablePagBtn>
        </TablePagWrap>
      )}
    </TableWrap>
  );
}

export default TableServer;
