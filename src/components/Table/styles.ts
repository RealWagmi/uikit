import styled from "styled-components";

export const TableWrapper = styled.main`
  width: 100%;
  padding: 31px 20px 23px;
  border-radius: 16px;
  background: ${({ theme }) => theme.table.background};
  border: 1px solid ${({ theme }) => theme.table.border};

  display: grid;
  gap: 40px;
`;

export const TableTitle = styled.div`
  display: flex;
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.table.titleColor};
  padding-left: 35px;
`;

const ResponsiveGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  align-items: center;

  grid-template-columns: 20px 3.5fr repeat(4, 1fr);

  @media screen and (max-width: 900px) {
    grid-template-columns: 20px 1.5fr repeat(3, 1fr);
    & :nth-child(4) {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 20px 1.5fr repeat(2, 1fr);
    & :nth-child(5) {
      display: none;
    }
  }

  @media screen and (max-width: 550px) {
    min-width: 550px;
  }
`;

// Table
export const TableContainer = styled.div`
  display: grid;
  gap: 20px;

  @media (max-width: 900px) {
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 2px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.table.scrollbarTrack};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.table.scrollbarThumb};
      border-radius: 6px;
    }
  }
`;

export const TableHead = styled(ResponsiveGrid)``;

export const TableHeadItem = styled.span<{ sortable?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  white-space: nowrap;
  transition: background 0.25s ease;

  font-size: 12px;
  color: ${({ theme }) => theme.table.secondColor};

  padding: 5px 0;
  border-radius: 8px;

  &:not(:nth-child(2)) {
    text-align: center;
    justify-content: center;
  }

  &:hover {
    cursor: ${({ sortable }) => (sortable ? "pointer" : "default")};
    background: ${({ sortable, theme }) => (sortable ? theme.table.activeBackground : "none")};
  }
`;

export const TableBody = styled.div`
  display: grid;
  gap: 10px;
`;

export const TableRow = styled(ResponsiveGrid)`
  padding: 15px 0;
  transition: background 0.25s ease;
  border-radius: 12px;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.table.activeBackground};
  }
`;

export const TableItem = styled.div`
  font-size: 16px;
  font-weight: 300;
  &:not(:nth-child(2)) {
    text-align: center;
  }
`;

export const TableAsset = styled.span`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 15px;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
`;

export const EmptyDataWrapper = styled(LoaderWrapper)`
  flex-direction: column;
`;

export const EmptyDataText = styled.p`
  //font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: ${({theme}) => theme.table.secondColor};
  margin-top: 15px;
`;
