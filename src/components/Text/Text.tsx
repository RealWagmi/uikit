import styled from "styled-components";
import { Text as TextOrig, TextProps as TextPropsOriginal } from "rebass";
import { ThemeColors } from "../../theme/types";
import { variant } from "styled-system";
import { typographyVariants } from "./theme";
import { typographies } from "./types";
import { ReactNode } from "react";

type TextProps = Omit<TextPropsOriginal, "variant" | "color"> & {
  color?: keyof ThemeColors;
  variant?: (typeof typographies)[keyof typeof typographies];
  children?: ReactNode;
};

const TextWrap = styled(TextOrig)<TextProps>`
  color: ${({ theme, color }) => theme.colors[color as string] || color || theme.colors.white};
  ${variant({
    prop: "variant",
    variants: typographyVariants,
  })}
`;

TextWrap.defaultProps = {
  variant: "body-2",
};
export default function Text(props: TextProps) {
  return <TextWrap {...props}>{props.children}</TextWrap>;
}
