import styled from "styled-components";
import { rgba } from "polished";

export const TableWrapper = styled.main`
  width: 100%;
  padding: 31px 20px 23px;
  border-radius: 16px;
  background: ${({ theme }) => rgba(theme.colors.dimGray, 0.2)};
  border: 1px solid rgba(109, 119, 135, 0.2);

  display: grid;
  gap: 40px;
`;

export const TableTitle = styled.div`
  display: flex;
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
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
      background: ${({ theme }) => theme.colors.dimGray};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.lightFrenchBeige};
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
  color: ${({ theme }) => theme.colors.textGray};

  padding: 5px 0;
  border-radius: 8px;

  &:not(:nth-child(2)) {
    text-align: center;
    justify-content: center;
  }

  &:hover {
    cursor: ${({ sortable }) => (sortable ? "pointer" : "default")};
    background: ${({ sortable, theme }) => (sortable ? rgba(theme.colors.dimGray, 0.1) : "none")};
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
    background: ${({ theme }) => rgba(theme.colors.dimGray, 0.1)};
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

export const PoolNameWrapper = styled.div`
  display: flex;
  align-items: center;

  small {
    margin-left: 5px;
    min-width: 70px;
    height: 20px;
    color: ${({ theme }) => theme.colors.lightFrenchBeige};
    background: ${({ theme }) => rgba(theme.colors.lightFrenchBeige, 0.2)};
    font-size: 12px;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    small {
      margin-top: 5px;
      margin-left: 0;
    }
  }
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
  color: #7b8187;
  margin-top: 15px;
`;
