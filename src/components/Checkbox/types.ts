import { LayoutProps, SpaceProps } from 'styled-system';

export interface ICheckboxProps extends LayoutProps, SpaceProps {
    value?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
}
