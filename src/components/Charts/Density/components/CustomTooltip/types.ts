import { Token } from '@real-wagmi/sdk';

export interface CustomToolTipProps {
    chartProps: any;
    token0: Token;
    token1: Token;
    currentPrice: number | undefined;
}
