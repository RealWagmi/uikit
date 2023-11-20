import { ReactNode } from "react";

export type DropdownItemValue = string | number;
export interface IDropdownProps {
  items: { title?: ReactNode; value?: DropdownItemValue }[];
  value?: DropdownItemValue;
  onChange?: (value?: DropdownItemValue) => void;
}
