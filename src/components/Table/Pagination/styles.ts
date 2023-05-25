import styled from 'styled-components'
import { rgba } from "polished";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  .action {
    display: flex;
    align-items: center;
    gap: 7.5px;
    color: ${({ theme }) => theme.colors.textDimGray};
    user-select: none;

    .active {
      color: ${({ theme }) => theme.colors.lightFrenchBeige};
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
      background: ${({ theme }) => rgba(theme.colors.dimGray, 0.1)};
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
