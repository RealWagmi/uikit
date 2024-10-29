import { memo, useMemo } from 'react';
import { Wrapper, LoaderWrapper } from './styles';
import { IProps } from './types';
import { fetchTicksSurroundingPrice } from './helpers/fetchTicksSurroundingPrice';
import { INITIAL_TICKS_TO_FETCH } from './constants';
import { formatData } from './helpers/formatData';
import ReactEcharts from 'echarts-for-react';
import { useTheme } from 'styled-components';
import { useChartResize } from './hooks/useChartResize';
import { getRenderTooltip } from './utils';
import { useQuery } from '@tanstack/react-query';
import { LoadingSpinner } from '../../Loaders';

function DensityChart({ address, client }: IProps) {
    const theme = useTheme();
    const { colors } = theme;
    const { chartRef } = useChartResize();

    const { data, isLoading } = useQuery({
        queryKey: ['densityChart', address, client],
        queryFn: async () => {
            const data = await fetchTicksSurroundingPrice(address, client, INITIAL_TICKS_TO_FETCH);
            return {
                row: data,
                formatData: await formatData(data),
            };
        },
    });

    const option = useMemo(() => {
        return {
            dataZoom: [
                {
                    type: 'inside',
                },
                {
                    type: 'slider',
                    left: 5,
                    right: 4,
                    bottom: 8,
                },
            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color: '#FFFFFF',
                        opacity: 0.4,
                    },
                },
                backgroundColor: '#1D2128',
                borderColor: '#1D2128',
                borderRadius: 8,
                textStyle: {
                    color: '#FDFEFE',
                },
                formatter: getRenderTooltip({
                    chartData: data?.formatData,
                    poolData: data?.row,
                }),
            },
            title: {
                show: false,
            },
            grid: {
                top: 0,
                bottom: 32,
                left: 1,
                right: 1,
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: data?.formatData?.map(({ index }) => index).toReversed(),
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    formatter() {
                        return '';
                    },
                },
            },
            yAxis: {
                scale: true,
                type: 'value',
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    formatter() {
                        return '';
                    },
                },
            },
            series: [
                {
                    name: 'Liquidity',
                    type: 'bar',
                    stack: 'total',
                    symbol: 'none',
                    emphasis: {
                        disabled: false,
                    },
                    itemStyle: {
                        color: colors.primaryDefault,
                        borderColor: null,
                        borderWidth: 2,
                    },
                    data: data?.formatData.map(({ isCurrent, activeLiquidity }) => (isCurrent ? 0 : activeLiquidity)).toReversed(),
                },
                {
                    name: 'Active Tick',
                    type: 'bar',
                    stack: 'total',
                    symbol: 'none',
                    emphasis: {
                        disabled: false,
                    },
                    itemStyle: {
                        color: colors.red,
                        borderColor: null,
                        borderWidth: 2,
                    },
                    data: data?.formatData.map(({ isCurrent, activeLiquidity }) => (isCurrent ? activeLiquidity : 0)).toReversed(),
                },
            ],
        };
    }, [data]);

    if (!data || isLoading) {
        return (
            <LoaderWrapper>
                <LoadingSpinner size="32px" />
            </LoaderWrapper>
        );
    }

    return (
        <Wrapper>
            <ReactEcharts lazyUpdate option={option} notMerge style={{ width: '100%', height: '100%' }} ref={chartRef} />
        </Wrapper>
    );
}

export default memo(DensityChart);
