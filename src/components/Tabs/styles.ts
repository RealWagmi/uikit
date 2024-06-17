import styled from 'styled-components';
import { Flex } from '../Box';
import { rgba } from 'polished';
import { layout, space } from 'styled-system';

export const TabsWrap = styled(Flex)`
    ${layout}
    ${space}
  
  display: inline-flex;
    box-shadow: 0 2px 16px -4px ${({ theme }) => rgba(theme.colors.shadowDark, 0.04)};
    outline: 1px solid ${({ theme }) => rgba(theme.colors.strokeGray, 0.2)};
    outline-offset: -1px;
    background: ${({ theme }) => rgba(theme.colors.strokeGray, 0.08)};
    border-radius: 32px;
    padding: 3px 10px;
`;

export const TabWrap = styled.button`
    padding: 9px 10px;
    border: none;
    border-radius: 32px;
    font-size: 14px;
    font-weight: 400;
    line-height: 10px;
    min-width: 62px;
    cursor: pointer;
    outline: none;

    background: transparent;
    color: ${({ theme }) => theme.colors.darkGray};

    &:disabled {
        color: ${({ theme }) => theme.colors.primaryDefault};
    }

    &:not(:last-child) {
        margin-right: 16px;
    }

    &:hover,
    &:focus,
    &:disabled {
        background: ${({ theme }) => rgba(theme.colors.textGray, 0.08)};
    }

    transition: background 0.2s;
`;
