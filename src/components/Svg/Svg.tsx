import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { SvgProps } from "./types";

const genSvgColorValue = (theme: DefaultTheme, value?: string, color?: string) => {
  const res = value || theme.colors[color as string] || color;
  return res === "none" ? `${res} !important` : res;
};

const Svg = styled.svg<SvgProps>`
  ${space};
  fill: ${({ fill, color, theme }) => genSvgColorValue(theme, fill, color)};
  stroke: ${({ stroke, color, theme }) => genSvgColorValue(theme, stroke, color)};

  width: ${({ size }) => size};
  // Safari fix
  @supports (-webkit-text-size-adjust: none) and (not (-ms-accelerator: true)) and (not (-moz-appearance: none)) {
    filter: none !important;
  }
`;

Svg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  size: "24px",
  color: "#000000",
};

export default Svg;
