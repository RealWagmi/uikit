import { BoxProps } from "../../types";
import { CSSProperties } from "react";

export interface IRowProps extends Omit<BoxProps, "display"> {
  width?: string;
  align?: string;
  justify?: CSSProperties["justifyContent"];
  padding?: string;
  border?: string;
  borderRadius?: string;
  gap?: string;
}
