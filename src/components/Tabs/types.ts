export type TabValue = string | number;
export interface ITabsProps {
  tabs: { title?: string; value?: TabValue }[];
  value?: TabValue;
  onChange?: (value?: TabValue) => void;
}