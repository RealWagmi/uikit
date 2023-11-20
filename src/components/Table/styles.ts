import styled from "styled-components";
import { Box, Grid } from "../Box";
import { rgba } from "polished";
import { ITableHeader } from "./types";
import { SCREEN_WIDTH } from "../../constants";
import { genAdaptiveGrid } from "./utils";

export const TableWrap = styled(Grid)`
  justify-items: center;
  grid-template-rows: auto 1fr auto;
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${rgba(theme.colors.shuttleGray, 0.12)} 0%, ${rgba(theme.colors.ebonyGray, 0.12)} 100%)`};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => rgba(theme.colors.strokeGray, 0.2)};
  padding: 16px;
  box-sizing: border-box;

  @media (min-width: ${SCREEN_WIDTH.SM}px) {
    padding: 24px 40px;
  }
`;

export const TableContentWrap = styled(Box)`
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  @media (min-width: ${SCREEN_WIDTH.SM}px) {
    overflow-x: hidden;
  }
`;
export const TableContent = styled(Grid)<{ cols: ITableHeader<any>[] }>`
  align-items: center;
  grid-row-gap: 18px;
  grid-column-gap: 8px;
  grid-template-columns: ${({ cols }) => genAdaptiveGrid(cols.length, 2)};

  @media (min-width: ${SCREEN_WIDTH.XS}px) {
    grid-template-columns: ${({ cols }) => genAdaptiveGrid(cols.length, 3)};
  }
  @media (min-width: ${SCREEN_WIDTH.SM}px) {
    grid-template-columns: ${({ cols }) => cols.map((col) => col.width || "auto").join(" ")};
  }
`;

export const TableHeader = styled(Box)`
  display: flex;
  align-items: center;
  padding: 8px 0 12px;
  min-height: 17px;
`;

export const TableHeaderTitleBtn = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  padding: 0;
  color: ${({ theme, active }) =>
    active ? theme.colors.primaryDefault : theme.colors.darkGray}; //styleName: Caption/Regular;
  font-size: 12px;
  font-weight: 400;

  &:disabled {
    cursor: default;
  }
`;

export const TableItem = styled(Box)`
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  text-align: left;

  color: ${({ theme }) => theme.colors.white};
`;

export const TablePagWrap = styled(Grid)`
  grid-template-columns: 1fr max-content 1fr;
  align-items: center;
  grid-column-gap: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  user-select: none;
  margin-top: 8px;
  font-size: 12px;

  @media (min-width: ${SCREEN_WIDTH.XS}px) {
    font-size: 14px;
  }

  @media (min-width: ${SCREEN_WIDTH.SM}px) {
    font-size: 16px;
    margin-top: 44px;
  }
`;

export const TablePagBtn = styled.button`
  display: inline-flex;
  width: max-content;
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 6px;
  border-radius: 14px;

  &:disabled {
    visibility: hidden;
  }
`;
