import styled from "styled-components";
import { Flex, Grid } from "../Box";
import { Z_INDEX } from "../../constants";
import { rgba } from "polished";
import { IMenuProps } from "./types";

type AlignProp = Exclude<IMenuProps["align"], undefined>;

const menuAligns: { [key in AlignProp]: string } = {
  center: "center",
  left: "flex-start",
  right: "flex-end",
};

export const MenuWrap = styled(Flex)<{ align: AlignProp }>`
  display: inline-flex;
  position: relative;
  justify-content: ${({ align }) => menuAligns[align]};
`;

export const MenuBtnWrap = styled.button`
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 100%;
`;

export const MenuList = styled(Grid)<{ offsetX: number; offsetY: number }>`
  position: absolute;
  top: 100%;
  transform: ${({ offsetX, offsetY }) => `translate(${offsetX}px, ${offsetY}px)`};
  background: ${({ theme }) => theme.colors.darkBg};
  box-shadow: 0 2px 16px -4px ${({ theme }) => rgba(theme.colors.shadowDark, 0.04)};
  border: 2px solid ${({ theme: A }) => rgba(A.colors.strokeGray, 0.4)};
  border-radius: 12px;
  box-sizing: border-box;
  z-index: ${Z_INDEX.DROPDOWN};
  overflow-x: hidden;
  overflow-y: auto;
`;
