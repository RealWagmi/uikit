import { LayoutProps, SpaceProps } from 'styled-system';
import { ElementType, HTMLAttributeAnchorTarget, HTMLAttributes, ReactNode } from 'react';

export const colors = {
    PRIMARY: 'primary',
    ERROR: 'error',
    SUCCESS: 'success',
} as const;

export const variants = {
    DEFAULT: 'default',
    OUTLINED: 'outlined',
    TEXT: 'text',
} as const;

export const scales = {
    DEFAULT: 'default',
    SMALL: 'small',
} as const;

export type ButtonColor = (typeof colors)[keyof typeof colors];
export interface ButtonProps extends LayoutProps, SpaceProps, HTMLAttributes<HTMLElement> {
    as?: 'a' | 'button' | ElementType;
    variant?: (typeof variants)[keyof typeof variants];
    scale?: (typeof scales)[keyof typeof scales];
    color?: ButtonColor;
    disabled?: boolean;
    to?: string;
    target?: HTMLAttributeAnchorTarget;
    children?: ReactNode;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}
