import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
import { SCREEN_WIDTH, Z_INDEX } from "../../constants";

const showAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const hideAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ModalWrap = styled.div<{ opened?: boolean; visible?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => rgba(theme.colors.black, 0.8)};
  z-index: ${Z_INDEX.MODAL};

  animation: ${({ opened }) => (opened ? showAnimation : hideAnimation)} 0.2s forwards;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export const ModalContainer = styled.div<{ navbarOffset: string; width: string; height: string }>`
  position: absolute;
  display: grid;
  grid-template-rows: auto 1fr;
  background: red;
  width: 100%;
  max-width: 100%;
  height: ${({ navbarOffset }) => `calc(100vh - ${navbarOffset || 0})`};
  top: ${({ navbarOffset }) => navbarOffset};
  max-height: 100vh;
  background: linear-gradient(0deg, #1d222b, #1d222b),
    linear-gradient(180deg, rgba(89, 98, 111, 0.4) 0%, rgba(62, 70, 83, 0.4) 100%);
  border: 2px solid ${({ theme }) => rgba(theme.colors.strokeGray, 0.4)};
  box-sizing: border-box;

  border-radius: 12px 12px 0 0;

  @media (min-width: ${SCREEN_WIDTH.SM}px) {
    top: auto;
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    border-radius: 12px;
  }
`;

export const ModalHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 24px;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  padding: 24px;
`;
export const ModalCloseBtn = styled.button`
  display: flex;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 4px;
`;

export const ModalContent = styled.div`
  overflow-y: auto;
`;
