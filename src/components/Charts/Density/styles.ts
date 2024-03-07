import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    flex: 1;
    // Fix tooltip "border"
    .recharts-tooltip-wrapper {
        outline: none;
    }
`;

export const LoaderWrapper = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ControlsWrapper = styled.div`
    position: absolute;
    right: 40px;
    bottom: 100px;
    padding: 4px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
`;

export const ActionButton = styled.div<{ disabled?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    width: 32px;
    height: 32px;
    padding: 4px;
    border: 1px solid rgba(97, 105, 113, 0.2);
    background: ${(({ theme }) => theme.colors.darkBg)};

    &:hover {
        cursor: pointer;
        opacity: 0.4;
    }

    opacity: ${({ disabled }) => (disabled ? 0.4 : 0.9)};
`;