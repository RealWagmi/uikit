import { ReactNode } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';

export type RadioButtonValue = string | number;
export interface IRadioButtonProps extends LayoutProps, SpaceProps {
    value?: RadioButtonValue;
    name?: RadioButtonValue;
    onChange?: (value: any) => void;
    disabled?: boolean;
    children?: ReactNode;
}
