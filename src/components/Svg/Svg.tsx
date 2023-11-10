import styled from "styled-components";
import { space } from "styled-system";
import { SvgProps } from "./types";

const Svg = styled.svg<SvgProps>`
  ${space};
  fill: ${({ fill, color, theme }) => fill || theme.colors[color as string] || color};
  stroke: ${({ stroke, color, theme }) => stroke || theme.colors[color as string] || color};
  // Safari fix
  @supports (-webkit-text-size-adjust: none) and (not (-ms-accelerator: true)) and (not (-moz-appearance: none)) {
    filter: none !important;
  }
`;

Svg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  color: "#000000",
};

export default Svg;
