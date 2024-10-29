import ReactEcharts from 'echarts-for-react';
import { MutableRefObject, useCallback, useEffect, useMemo, useRef } from 'react';

interface IUseChartResize {
    chartRef: MutableRefObject<ReactEcharts | null>;
}

export const useChartResize = (): IUseChartResize => {
    const chartRef = useRef<ReactEcharts>(null);

    const resizeHandler = useCallback((): void => {
        const echartsInstance = chartRef.current?.getEchartsInstance();
        echartsInstance && echartsInstance.resize();
    }, [chartRef]);

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return (): void => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [resizeHandler]);

    return useMemo((): IUseChartResize => {
        return {
            chartRef,
        };
    }, []);
};
