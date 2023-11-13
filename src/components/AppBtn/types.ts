import { LayoutProps, SpaceProps } from "styled-system";
import { ElementType, HTMLAttributeAnchorTarget, ReactNode } from "react";

export const colors = {
  PRIMARY: "primary",
  ERROR: "error",
} as const;

export const variants = {
  DEFAULT: "default",
  OUTLINED: "outlined",
  TEXT: "text",
} as const;

export const scales = {
  DEFAULT: "default",
  SMALL: "small",
} as const;

export type AppBtnColor = (typeof colors)[keyof typeof colors];
export interface AppBtnProps extends LayoutProps, SpaceProps {
  as?: "a" | "button" | ElementType;
  variant?: (typeof variants)[keyof typeof variants];
  scale?: (typeof scales)[keyof typeof scales];
  color?: AppBtnColor;
  disabled?: boolean;
  to?: string;
  target?: HTMLAttributeAnchorTarget;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
