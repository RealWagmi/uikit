import { ChartEntry, PoolTickData } from './types';

export type FormatReturnType = undefined | string;

const genMinAmount = (decimals: number) => {
    if (decimals < 1) return 1;
    return Number(`0.${''.padEnd(decimals - 1, '0')}1`);
};

export const formatNumber = (num?: number, decimals = 4): FormatReturnType => {
    let value: FormatReturnType;
    const minAmount = genMinAmount(decimals);
    if (typeof num === 'number' && !Number.isNaN(num)) {
        if (!!num && num < minAmount) {
            value = `<${minAmount}`;
        } else {
            value = new Intl.NumberFormat(void 0, {
                style: 'decimal',
                maximumFractionDigits: decimals,
                minimumFractionDigits: 0,
            }).format(num);
        }
    }
    return value;
};

interface IGetRenderTooltipParams {
    chartData?: ChartEntry[];
    poolData?: PoolTickData;
}

interface TooltipParams {
    axisValue: string;
    seriesName: string;
    data: number;
}


export const getRenderTooltip =
    ({ chartData, poolData }: IGetRenderTooltipParams) =>
    (params: TooltipParams[]) => {
        const { axisValue } = params[0];
        const hoverTick = +axisValue;

        const tick = chartData?.find(({ index }) => index === hoverTick);

        const currentPrice = poolData?.token0Price;
        const token0 = poolData?.token0;
        const token1 = poolData?.token1;
        const price0 = tick?.price0;
        const price1 = tick?.price1;
        const tvlToken0 = Math.max(tick?.tvlToken0 || 0, 0);
        const tvlToken1 = Math.max(tick?.tvlToken1 || 0, 0);

        if (!tvlToken0 && !tvlToken1) {
            return '';
        }

        const template = `
        <div class="chart-tooltip" style="width: 260px">
            <div class="chart-tooltip-header">
                <h1 class="chart-tooltip-title">Tick stats</h1>
            </div>
            <div class="chart-tooltip-prop-list">
                <div class="chart-tooltip-prop">
                    <p class="chart-tooltip-label">${token0?.symbol} Price:</p>
                    <p class="chart-tooltip-label">${formatNumber(price0, 10)} ${token1?.symbol}</p>
                </div>
                <div class="chart-tooltip-prop">
                    <p class="chart-tooltip-label">${token1?.symbol} Price:</p>
                    <p class="chart-tooltip-label">${formatNumber(price1, 10)} ${token0?.symbol}</p>
                </div>
                <div class="chart-tooltip-separator"></div>
                ${
                    currentPrice && price0 && price1 && currentPrice > price1
                        ? `
                            <div class="chart-tooltip-prop">
                                <p class="chart-tooltip-label">${token0?.symbol} Locked:</p>
                                <p class="chart-tooltip-label">${tvlToken0 ? formatNumber(tvlToken0) : ''} ${token0?.symbol}</p>
                            </div>
                        `
                        : `
                            <div class="chart-tooltip-prop">
                                <p class="chart-tooltip-label">${token1?.symbol} Locked:</p>
                                <p class="chart-tooltip-label">${tvlToken1 ? formatNumber(tvlToken1) : ''} ${token1?.symbol}</p>
                            </div>
                        `
                }
            </div>
        </div>
    `;

        return template;
    };
