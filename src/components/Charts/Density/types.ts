import { Token } from '@real-wagmi/sdk';
import type { GraphQLClient } from 'graphql-request';

export interface IProps {
    readonly address: `0x${string}`;
    readonly client: GraphQLClient;
}

export interface TickPool {
    tick: string;
    feeTier: string;
    token0: {
        symbol: string;
        id: string;
        decimals: string;
        name: string;
    };
    token1: {
        symbol: string;
        id: string;
        decimals: string;
        name: string;
    };
    sqrtPrice: string;
    liquidity: string;
    token1Price: string;
    token0Price: string;
}

export interface PoolResult {
    pool: TickPool;
}

// Raw tick returned from GQL
export interface Tick {
    tickIdx: string;
    liquidityGross: string;
    liquidityNet: string;
    price0: string;
    price1: string;
}

export interface SurroundingTicksResult {
    ticks: Tick[];
}

// Tick with fields parsed to JSBIs, and active liquidity computed.
export interface TickProcessed {
    liquidityGross: bigint;
    liquidityNet: bigint;
    tickIdx: number;
    liquidityActive: bigint;
    price0: string;
    price1: string;
}

export interface PoolTickData {
    ticksProcessed: TickProcessed[];
    feeTier: string;
    tickSpacing: number;
    activeTickIdx: number;
    token0: Token;
    token1: Token;
    token1Price: number;
    token0Price: number;
}

export interface ChartEntry {
    index: number;
    isCurrent: boolean;
    activeLiquidity: number;
    price0: number;
    price1: number;
    tvlToken0: number;
    tvlToken1: number;
}