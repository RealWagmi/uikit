import styled from "styled-components";
import { Text as TextOrig, TextProps as TextPropsOriginal } from "rebass";
import { ThemeColors } from "../../theme/types";
import { layout, space, typography, variant, LayoutProps, SpaceProps, TypographyProps, system } from "styled-system";
import { typographyVariants } from "./theme";
import { typographies } from "./types";
import { ReactNode, memo, CSSProperties } from "react";

type TextProps = Omit<TextPropsOriginal, "variant" | "color"> &
  LayoutProps &
  SpaceProps &
  TypographyProps & { whiteSpace?: CSSProperties["whiteSpace"]; textOverflow?: CSSProperties["textOverflow"] } & {
    color?: keyof ThemeColors | string;
    variant?: (typeof typographies)[keyof typeof typographies];
    children?: ReactNode;
  };

const TextWrap = styled(TextOrig).withConfig({
  shouldForwardProp: (prop: string) => !["color"].includes(prop),
} as any)<TextProps>`
  color: ${({ theme, color }) =>
    // @ts-ignore
    theme.colors[color] || color || theme.colors.white};
  ${variant({
    prop: "variant",
    variants: typographyVariants,
  })}
  ${space}
  ${typography}
  ${layout}
  text-overflow: ${({ textOverflow }) => textOverflow};
  white-space: ${({ whiteSpace }) => whiteSpace};
`;

TextWrap.defaultProps = {
  variant: "body-2",
};
function Text(props: TextProps) {
  return <TextWrap {...props}>{props.children}</TextWrap>;
}

export default memo(Text);
