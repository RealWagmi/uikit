import { LayoutProps, SpaceProps } from 'styled-system';
import { ReactNode } from 'react';

export type TabValue = string | number;
export interface ITabsProps extends LayoutProps, SpaceProps {
    tabs: { title?: ReactNode; value?: TabValue }[];
    value?: TabValue;
    onChange?: (value?: TabValue) => void;
}
