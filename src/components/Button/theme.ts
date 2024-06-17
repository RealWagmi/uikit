import { ButtonColor, scales, variants } from './types';
import { DefaultTheme } from 'styled-components';
import { rgba } from 'polished';
export const variantVariants = (theme: DefaultTheme, color: ButtonColor = 'primary') => {
    const colors = theme.buttons[color];
    const hoverGrad0 = colors.hoverGrad0 || colors.grad0;
    const hoverGrad1 = colors.hoverGrad1 || colors.grad1;
    return {
        [variants.DEFAULT]: {
            background: `linear-gradient(90deg, ${colors.grad0} 3.46%, ${colors.grad1} 100%)`,
            outline: 'none',
            color: theme.colors.light,
            boxShadow: `0 5px 13px -4px ${rgba(theme.colors.shadowLight, 0.08)}`,
            '&:hover:not(:disabled), &:focus': {
                background: `linear-gradient(90deg, ${hoverGrad0} 3.46%, ${hoverGrad1} 100%)`,
            },
            '& svg': {
                fill: theme.colors.light,
                stroke: theme.colors.light,
            },
            '&:disabled': {
                boxShadow: `none`,
            },
        },
        [variants.OUTLINED]: {
            background: rgba(theme.colors.strokeGray, 0.08),
            outline: `2px ${colors.text} solid`,
            outlineOffset: '-2px',
            color: colors.text,
            '&:hover:not(:disabled), &:focus': {
                background: rgba(theme.colors.strokeGray, 0.2),
                outlineColor: colors.text,
            },
            '& svg': {
                fill: colors.text,
                stroke: colors.text,
            },
        },
        [variants.TEXT]: {
            background: rgba(theme.colors.strokeGray, 0.08),
            outline: 'none',
            color: colors.text,
            '&:hover:not(:disabled), &:focus': {
                background: rgba(theme.colors.strokeGray, 0.2),
            },
            '& svg': {
                fill: theme.colors.light,
                stroke: theme.colors.light,
            },
            '&:not(:disabled) svg': {
                fill: colors.text,
                stroke: colors.text,
            },
            '&:disabled': {
                background: 'transparent',
                color: theme.colors.light,
            },
        },
    };
};

export const scaleVariants = {
    [scales.DEFAULT]: {
        padding: '12px 16px',
        fontSize: '16px',
        borderRadius: '16px',
    },
    [scales.SMALL]: {
        padding: '8px',
        fontSize: '14px',
        borderRadius: '12px',
    },
};
