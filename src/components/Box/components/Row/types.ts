import { BoxProps } from "../../types";

export interface IRowProps extends Omit<BoxProps, 'display'> {
  width?: string;
  align?: string;
  justify?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  padding?: string;
  border?: string;
  borderRadius?: string;
  gap?: string;
}