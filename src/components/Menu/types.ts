import { ReactNode } from "react";

export interface IMenuProps<T = any> {
  opened?: boolean;
  openedChange?: (value: boolean) => any;
  activator?: ReactNode;
  listWidth?: string;
  width?: string;
  maxHeight?: string;
  align?: "center" | "left" | "right";
  offsetX?: number;
  offsetY?: number;
  items: T[];
  renderItem?: (value: T, isActive: boolean) => ReactNode;
  value?: any;
  valueKey?: keyof T;
  onChange?: (value: any) => any;
  closeOnClick?: boolean;
  multiple?: boolean;
  canByEmpty?: boolean;
}
