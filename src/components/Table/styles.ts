import styled from 'styled-components';
import { Box, Flex, Grid } from '../Box';
import { rgba } from 'polished';
import { ITableHeader } from './types';
import { SCREEN_WIDTH } from '../../constants';

export const TableWrap = styled(Grid)`
    justify-items: center;
    grid-template-rows: auto 1fr auto;
    background: ${({ theme }) => `linear-gradient(180deg, ${rgba(theme.colors.shuttleGray, 0.12)} 0%, ${rgba(theme.colors.ebonyGray, 0.12)} 100%)`};
    border-radius: 16px;
    border: 1px solid ${({ theme }) => rgba(theme.colors.strokeGray, 0.2)};
    padding: 16px 20px;
    box-sizing: border-box;

    @media (min-width: ${SCREEN_WIDTH.SM}px) {
        padding: 24px 36px;
    }
`;

export const TableHeaderWrap = styled(Box)`
    width: 100%;
    box-sizing: border-box;
    padding: 0 4px;
`;

export const TableContentWrap = styled(Box)`
    position: relative;
    overflow-x: auto;
    width: 100%;
    @media (min-width: ${SCREEN_WIDTH.SM}px) {
        overflow-x: hidden;
    }
`;

//  width: ${({ cols }) => (cols.length / 2) * 100}%;
// @media (min-width: ${SCREEN_WIDTH.XS}px) {
//   width: ${({ cols }) => (cols.length / 3) * 100}%;
// }
export const TableContent = styled(Grid)<{ cols: ITableHeader<any>[] }>`
    width: max-content;
    min-width: 100%;
    grid-row-gap: 10px;

    @media (min-width: ${SCREEN_WIDTH.SM}px) {
        width: 100%;
    }
`;

export const TableRow = styled(Grid)<{ cols: ITableHeader<any>[]; clickable?: boolean }>`
    position: relative;
    align-items: center;
    padding: 8px 4px;
    border-radius: 12px;
    grid-column-gap: 8px;

    grid-template-columns: ${({ cols }) => cols.map((col) => col.width || '1fr').join(' ')};

    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};

    &:hover {
        background: ${({ theme, clickable }) => (clickable ? rgba(theme.colors.primaryDefault, 0.2) : '')};
    }

    transition: background-color 0.2s;
`;

export const TableHeader = styled(Box)`
    display: flex;
    align-items: center;
    padding-bottom: 4px;
    min-height: 17px;
`;

export const TableHeaderTitleBtn = styled.div<{ active: boolean; clickable: boolean }>`
    display: flex;
    align-items: center;
    padding: 0;
    color: ${({ theme, active }) => (active ? theme.colors.primaryDefault : theme.colors.darkGray)}; //styleName: Caption/Regular;
    font-size: 12px;
    font-weight: 400;
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
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

export const TableLoadWrap = styled(Flex)`
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;
