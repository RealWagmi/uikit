import styled from "styled-components";
import { Text as TextOrig, TextProps as TextPropsOriginal } from "rebass";
import { ThemeColors } from "../../theme/types";
import { layout, space, typography, variant } from "styled-system";
import { typographyVariants } from "./theme";
import { typographies } from "./types";
import { ReactNode, memo } from "react";

type TextProps = Omit<TextPropsOriginal, "variant" | "color"> & {
  color?: keyof ThemeColors | string;
  variant?: (typeof typographies)[keyof typeof typographies];
  children?: ReactNode;
};

const TextWrap = styled(TextOrig).withConfig({
  shouldForwardProp: (prop: string) => !["color"].includes(prop),
} as any)<TextProps>`
  color: ${({ theme, color }) => theme.colors[color] || color || theme.colors.white};
  ${variant({
    prop: "variant",
    variants: typographyVariants,
  })}
  ${space}
  ${typography}
  ${layout}
`;

TextWrap.defaultProps = {
  variant: "body-2",
};
function Text(props: TextProps) {
  return <TextWrap {...props}>{props.children}</TextWrap>;
}

export default memo(Text);
