import { LayoutProps, SpaceProps } from "styled-system";

export type TabValue = string | number;
export interface ITabsProps extends LayoutProps, SpaceProps {
  tabs: { title?: string; value?: TabValue }[];
  value?: TabValue;
  onChange?: (value?: TabValue) => void;
}
