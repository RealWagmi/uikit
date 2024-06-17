import { tickQuery } from './gql';
import { Tick, SurroundingTicksResult } from '../types';
import type { GraphQLClient } from 'graphql-request';

export const fetchInitializedTicks = async (poolAddress: string, tickIdxLowerBound: number, tickIdxUpperBound: number, client: GraphQLClient): Promise<Tick[]> => {
    let surroundingTicks: Tick[] = [];
    let surroundingTicksResult: Tick[] = [];
    let skip = 0;
    do {
        try {
            const data = await client.request<SurroundingTicksResult>(tickQuery, {
                poolAddress,
                tickIdxLowerBound,
                tickIdxUpperBound,
                skip,
            });

            surroundingTicks = data.ticks;
            surroundingTicksResult = surroundingTicksResult.concat(surroundingTicks);
            skip += 1000;
        } catch (err) {
            return surroundingTicksResult;
        }
    } while (surroundingTicks.length > 0);

    return surroundingTicksResult;
};
