import { ReactNode } from 'react';

export interface IModalProps {
    header?: ReactNode;
    children?: ReactNode;
    navbarOffset?: string;
    width?: string;
    height?: string;
    value?: boolean;
    onClose?: (value: false) => any;
    closeOnOutsideClick?: boolean;
}
