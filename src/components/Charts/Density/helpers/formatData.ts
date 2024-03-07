import { FeeAmount, Pool, TICK_SPACINGS, TickMath } from "@real-wagmi/v3-sdk";
import { ChartEntry, PoolTickData, TickProcessed } from "../types";
import { CurrencyAmount } from "@real-wagmi/sdk";
import { maxUint128 } from "../constants";

async function parseTick(poolTickData: PoolTickData, t: TickProcessed, i: number){
    const active = t.tickIdx === poolTickData.activeTickIdx;
    const sqrtPriceX96 = TickMath.getSqrtRatioAtTick(t.tickIdx);
    const feeAmount: FeeAmount = Number(poolTickData.feeTier);
    const mockTicks = [
        {
            index: t.tickIdx - TICK_SPACINGS[feeAmount],
            liquidityGross: t.liquidityGross,
            liquidityNet: t.liquidityNet * -1n,
        },
        {
            index: t.tickIdx,
            liquidityGross: t.liquidityGross,
            liquidityNet: t.liquidityNet,
        },
    ];

    const pool = new Pool(poolTickData.token0, poolTickData.token1, feeAmount, sqrtPriceX96, t.liquidityActive, t.tickIdx, mockTicks);
    const nextSqrtX96 = poolTickData.ticksProcessed[i - 1] ? TickMath.getSqrtRatioAtTick(poolTickData.ticksProcessed[i - 1].tickIdx) : undefined;
    const maxAmountToken0 = CurrencyAmount.fromRawAmount(poolTickData.token0, maxUint128);

    const outputRes0 = await pool.getOutputAmount(maxAmountToken0, nextSqrtX96);

    const token1Amount = outputRes0?.[0];

    const amount0 = token1Amount ? parseFloat(token1Amount.toExact()) * parseFloat(t.price1) : 0;
    const amount1 = token1Amount ? parseFloat(token1Amount.toExact()) : 0;

    return {
        index: i,
        isCurrent: active,
        activeLiquidity: parseFloat(t.liquidityActive.toString()),
        price0: parseFloat(t.price0),
        price1: parseFloat(t.price1),
        tvlToken0: amount0,
        tvlToken1: amount1,
    };
}

export const formatData = async (poolTickData?: PoolTickData): Promise<ChartEntry[]> => {
    if (poolTickData) {
        const newData = await Promise.all(
            poolTickData.ticksProcessed.map(async (t: TickProcessed, i) => parseTick(poolTickData, t, i)),
        );
        // offset the values to line off bars with TVL used to swap across bar
        newData.map((entry, i) => {
            if (i > 0) {
                newData[i - 1].tvlToken0 = entry.tvlToken0;
                newData[i - 1].tvlToken1 = entry.tvlToken1;
            }
        });
        return newData;
    } else {
        return [];
    }
}