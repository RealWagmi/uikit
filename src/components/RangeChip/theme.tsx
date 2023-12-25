import { statuses } from "./types";
import { DefaultTheme } from "styled-components";
import { rgba } from "polished";
export const getStatusVariants = (theme: DefaultTheme) => ({
  [statuses.IN_RANGE]: {
    background: rgba(theme.colors.green, 0.08),
    color: theme.colors.green,
  },
  [statuses.OUT_OF_RANGE]: {
    background: rgba(theme.colors.red, 0.08),
    color: theme.colors.red,
  },
  [statuses.CLOSED]: {
    background: rgba(theme.colors.strokeGray, 0.08),
    color: theme.colors.darkGray,
  },
});

export const getStatusPointVariants = (theme: DefaultTheme) => ({
  [statuses.IN_RANGE]: {
    background: theme.colors.green,
  },
  [statuses.OUT_OF_RANGE]: {
    background: theme.colors.red,
  },
  [statuses.CLOSED]: {
    background: theme.colors.darkGray,
  },
});
