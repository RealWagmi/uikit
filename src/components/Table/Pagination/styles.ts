import styled from 'styled-components'
import { Flex } from "../../Box";

export const PaginationWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  gap: 15px;

  .action {
    display: flex;
    align-items: center;
    gap: 7.5px;
    color: ${({ theme }) => theme.table.color};
    user-select: none;

    .active {
      color: ${({ theme }) => theme.table.activeColor};
    }
  }

  .icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s ease;
    user-select: none;

    img {
      width: 20px;
    }

    &.left {
      rotate: 180deg;
    }

    &:hover {
      background: ${({ theme }) => theme.table.activeBackground};
    }

    &:active {
      scale: 0.96;
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
`
