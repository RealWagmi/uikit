import type { GraphQLClient } from 'graphql-request';
import { DEFAULT_SURROUNDING_TICKS, PRICE_FIXED_DIGITS } from '../constants';
import { PoolResult, PoolTickData, TickProcessed } from '../types';
import { poolQuery } from './gql';
import { TickMath, tickToPrice, TICK_SPACINGS, FeeAmount } from '@real-wagmi/v3-sdk';
import { fetchInitializedTicks } from './fetchInitializedTicks';
import { keyBy } from 'lodash';
import { ChainId, Token } from '@real-wagmi/sdk';

export const fetchTicksSurroundingPrice = async (
    poolAddress: string,
    client: GraphQLClient,
    numSurroundingTicks = DEFAULT_SURROUNDING_TICKS,
): Promise<PoolTickData> => {
    const poolResult = await client.request<PoolResult>(poolQuery, {
        poolAddress: poolAddress.toLowerCase(),
    });

    const {
        pool: {
            tick: poolCurrentTick,
            feeTier,
            liquidity,
            token0: { id: token0Address, decimals: token0Decimals, name: token0Name , symbol: token0Symbol },
            token1: { id: token1Address, decimals: token1Decimals, name: token1Name , symbol: token1Symbol },
            token1Price,
            token0Price
        },
    } = poolResult;

    const poolCurrentTickIdx = parseInt(poolCurrentTick);
    const tickSpacing = TICK_SPACINGS[+feeTier as FeeAmount];

    // The pools current tick isn't necessarily a tick that can actually be initialized.
    // Find the nearest valid tick given the tick spacing.
    const activeTickIdx = Math.floor(poolCurrentTickIdx / tickSpacing) * tickSpacing;

    // Our search bounds must take into account fee spacing. i.e. for fee tier 1%, only
    // ticks with index 200, 400, 600, etc can be active.
    const tickIdxLowerBound = activeTickIdx - numSurroundingTicks * tickSpacing;
    const tickIdxUpperBound = activeTickIdx + numSurroundingTicks * tickSpacing;

    const initializedTicks = await fetchInitializedTicks(poolAddress.toLowerCase(), tickIdxLowerBound, tickIdxUpperBound, client);

    const tickIdxToInitializedTick = keyBy(initializedTicks, 'tickIdx');

    const token0 = new Token(ChainId.ETHEREUM, token0Address as `0x${string}`, parseInt(token0Decimals), token0Symbol, token0Name  );
    const token1 = new Token(ChainId.ETHEREUM, token1Address as `0x${string}`, parseInt(token1Decimals), token1Symbol, token1Name);

    // If the pool's tick is MIN_TICK (-887272), then when we find the closest
    // initializable tick to its left, the value would be smaller than MIN_TICK.
    // In this case we must ensure that the prices shown never go below/above.
    // what actual possible from the protocol.
    let activeTickIdxForPrice = activeTickIdx;
    if (activeTickIdxForPrice < TickMath.MIN_TICK) {
        activeTickIdxForPrice = TickMath.MIN_TICK;
    }
    if (activeTickIdxForPrice > TickMath.MAX_TICK) {
        activeTickIdxForPrice = TickMath.MAX_TICK;
    }

    const activeTickProcessed: TickProcessed = {
        liquidityActive: BigInt(liquidity),
        tickIdx: activeTickIdx,
        liquidityNet: 0n,
        price0: tickToPrice(token0, token1, activeTickIdxForPrice).toFixed(PRICE_FIXED_DIGITS),
        price1: tickToPrice(token1, token0, activeTickIdxForPrice).toFixed(PRICE_FIXED_DIGITS),
        liquidityGross: 0n,
    };

    // If our active tick happens to be initialized (i.e. there is a position that starts or
    // ends at that tick), ensure we set the gross and net.
    // correctly.
    const activeTick = tickIdxToInitializedTick[activeTickIdx];
    if (activeTick) {
        activeTickProcessed.liquidityGross = BigInt(activeTick.liquidityGross);
        activeTickProcessed.liquidityNet = BigInt(activeTick.liquidityNet);
    }

    enum Direction {
        ASC,
        DESC,
    }

    // Computes the numSurroundingTicks above or below the active tick.
    const computeSurroundingTicks = (activeTickProcessed: TickProcessed, tickSpacing: number, numSurroundingTicks: number, direction: Direction) => {
        let previousTickProcessed: TickProcessed = {
            ...activeTickProcessed,
        };

        // Iterate outwards (either up or down depending on 'Direction') from the active tick,
        // building active liquidity for every tick.
        let processedTicks: TickProcessed[] = [];
        for (let i = 0; i < numSurroundingTicks; i++) {
            const currentTickIdx = direction == Direction.ASC ? previousTickProcessed.tickIdx + tickSpacing : previousTickProcessed.tickIdx - tickSpacing;

            if (currentTickIdx < TickMath.MIN_TICK || currentTickIdx > TickMath.MAX_TICK) {
                break;
            }

            const currentTickProcessed: TickProcessed = {
                liquidityActive: previousTickProcessed.liquidityActive,
                tickIdx: currentTickIdx,
                liquidityNet: BigInt(0),
                price0: tickToPrice(token0, token1, currentTickIdx).toFixed(PRICE_FIXED_DIGITS),
                price1: tickToPrice(token1, token0, currentTickIdx).toFixed(PRICE_FIXED_DIGITS),
                liquidityGross: BigInt(0),
            };

            // Check if there is an initialized tick at our current tick.
            // If so copy the gross and net liquidity from the initialized tick.
            const currentInitializedTick = tickIdxToInitializedTick[currentTickIdx.toString()];
            if (currentInitializedTick) {
                currentTickProcessed.liquidityGross = BigInt(currentInitializedTick.liquidityGross);
                currentTickProcessed.liquidityNet = BigInt(currentInitializedTick.liquidityNet);
            }

            // Update the active liquidity.
            // If we are iterating ascending and we found an initialized tick we immediately apply
            // it to the current processed tick we are building.
            // If we are iterating descending, we don't want to apply the net liquidity until the following tick.
            if (direction == Direction.ASC && currentInitializedTick) {
                currentTickProcessed.liquidityActive = previousTickProcessed.liquidityActive + BigInt(currentInitializedTick.liquidityNet);
            } else if (direction == Direction.DESC && previousTickProcessed.liquidityNet !== BigInt(0)) {
                // We are iterating descending, so look at the previous tick and apply any net liquidity.
                currentTickProcessed.liquidityActive = previousTickProcessed.liquidityActive - previousTickProcessed.liquidityNet;
            }

            processedTicks.push(currentTickProcessed);
            previousTickProcessed = currentTickProcessed;
        }

        if (direction == Direction.DESC) {
            processedTicks = processedTicks.reverse();
        }

        return processedTicks;
    };

    const subsequentTicks: TickProcessed[] = computeSurroundingTicks(activeTickProcessed, tickSpacing, numSurroundingTicks, Direction.ASC);

    const previousTicks: TickProcessed[] = computeSurroundingTicks(activeTickProcessed, tickSpacing, numSurroundingTicks, Direction.DESC);

    const ticksProcessed = previousTicks.concat(activeTickProcessed).concat(subsequentTicks);

    return {
        ticksProcessed,
        feeTier,
        tickSpacing,
        activeTickIdx,
        token0,
        token1,
        token1Price: parseFloat(token1Price),
        token0Price: parseFloat(token0Price)
    };
};