export type DropdownItemValue = string | number;
export interface IDropdownProps {
  items: { title?: string; value?: DropdownItemValue }[];
  value?: DropdownItemValue;
  onChange?: (value?: DropdownItemValue) => void;
}