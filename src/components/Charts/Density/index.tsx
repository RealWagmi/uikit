import { ReactElement, memo, useCallback, useMemo, useState } from "react";
import { Wrapper, LoaderWrapper, ControlsWrapper, ActionButton } from "./styles";
import { IProps } from "./types";
import { fetchTicksSurroundingPrice } from "./helpers/fetchTicksSurroundingPrice";
import { INITIAL_TICKS_TO_FETCH, ZOOM_INTERVAL } from "./constants";
import useSwr from 'swr';
import { formatData } from './helpers/formatData';
import { LoadingSpinner } from '../../Loaders';
import { ZoomIn, ZoomOut } from 'react-feather';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import CustomBar from './components/CustomBar';
import CustomToolTip from "./components/CustomTooltip";
import { useTheme } from "styled-components";

interface ZoomStateProps {
  left: number;
  right: number;
  refAreaLeft: string | number;
  refAreaRight: string | number;
}

const initialState = {
  left: 0,
  right: INITIAL_TICKS_TO_FETCH * 2 + 1,
  refAreaLeft: '',
  refAreaRight: '',
};

function DensityChart({ address, client }: IProps) {
    const theme = useTheme();
    const { colors } = theme;
    const [ticksToFetch, setTicksToFetch] = useState(INITIAL_TICKS_TO_FETCH);
    const amountTicks = ticksToFetch * 2 + 1;
    const [zoomState, setZoomState] = useState<ZoomStateProps>(initialState);

    const { data, isLoading } = useSwr(["densityChart", address, client, ticksToFetch], async () => {
        const data = await fetchTicksSurroundingPrice(address, client, ticksToFetch);
        return {
            row: data,
            formatData: await formatData(data)
        };
    });

    const atZoomMax = zoomState.left + ZOOM_INTERVAL >= zoomState.right - ZOOM_INTERVAL - 1;
    const atZoomMin = zoomState.left - ZOOM_INTERVAL < 0;

    const handleZoomIn = useCallback(() => {
        !atZoomMax &&
            setZoomState({
                ...zoomState,
                left: zoomState.left + ZOOM_INTERVAL,
                right: zoomState.right - ZOOM_INTERVAL,
            });
    }, [zoomState, atZoomMax]);

    const handleZoomOut = useCallback(() => {
        if (atZoomMin) {
            setTicksToFetch(ticksToFetch + ZOOM_INTERVAL);
            setZoomState({
                ...zoomState,
                left: 0,
                right: amountTicks,
            });
        } else {
            setZoomState({
                ...zoomState,
                left: zoomState.left - ZOOM_INTERVAL,
                right: zoomState.right + ZOOM_INTERVAL,
            });
        }
    }, [amountTicks, atZoomMin, ticksToFetch, zoomState]);

    const zoomedData = useMemo(() => {
        if (data) {
            return data.formatData.slice(zoomState.left, zoomState.right);
        }
        return undefined;
    }, [data, zoomState.left, zoomState.right]);

    if (!data || isLoading) {
        return (
            <LoaderWrapper>
                <LoadingSpinner size="32px" />
            </LoaderWrapper>
        );
    }

    return (
        <Wrapper>
            <ResponsiveContainer width="99%" height={400} debounce={1}>
                <BarChart
                    width={500}
                    height={300}
                    data={zoomedData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 60,
                        }}
                    >
                        <Tooltip content={(props) => <CustomToolTip chartProps={props} token0={data.row.token0} token1={data.row.token1} currentPrice={data.row.token0Price} />} />
                        <XAxis reversed={true} tick={false} />
                        <Bar
                            dataKey="activeLiquidity"
                            fill={colors.primaryDefault}
                            isAnimationActive={false}
                            //@ts-ignore
                            shape={(props: { [key: string]: any; x: number; y: number; width: number; height: number; fill: string; isCurrent: boolean }): ReactElement => {
                                return <CustomBar height={props.height} width={props.width} x={props.x} y={props.y} fill={props.fill} />;
                            }}
                        >
                            {zoomedData?.map((entry, index) => {
                                return <Cell key={`cell-${index}`} fill={entry.isCurrent ? colors.red : colors.primaryDefault} />;
                            })}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
                <ControlsWrapper>
                    <ActionButton onClick={handleZoomIn} disabled={false}>
                        <ZoomIn size={16} color={colors.darkGray} />
                    </ActionButton>
                    <ActionButton onClick={handleZoomOut} disabled={false}>
                        <ZoomOut size={16} color={colors.darkGray} />
                    </ActionButton>
                </ControlsWrapper>
        </Wrapper>
    );
}

export default memo(DensityChart)
