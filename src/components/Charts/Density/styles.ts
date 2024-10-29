import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    width: 100%;
    max-width: 100%;
    position: relative;

    & .chart-tooltip {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    & .chart-tooltip-header {
        display: flex;
        gap: 4px;
        align-items: center;
        margin-bottom: 6px;
    }

    & .chart-tooltip-title {
        font-size: 14px;
        line-height: 10px;
        font-weight: 300;
    }

    & .chart-tooltip-color {
        width: 14px;
        height: 14px;
        border-radius: 4px;
    }

    & .chart-tooltip-label {
        color: #afb6c9;
        font-size: 14px;
        line-height: 10px;
        font-weight: 300;
    }

    & .chart-tooltip-badge {
        display: flex;
        align-items: center;
        gap: 4px;
        height: 20px;
        padding: 0 8px;
        background-color: #5d93b214;
        border-radius: 6px;
    }

    & .chart-tooltip-badge-text {
        font-size: 12px;
        font-weight: 400;
        line-height: 8px;
        color: #5d93b2;
    }

    & .chart-tooltip-separator {
        height: 1px;
        width: 100%;
        background-color: #6d778733;
    }

    & .chart-tooltip-prop-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    & .chart-tooltip-prop {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    max-width: 100%;
    position: relative;
`;
