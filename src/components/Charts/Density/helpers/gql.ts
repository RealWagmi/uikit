import gql from 'graphql-tag';

export const tickQuery = gql`
    query surroundingTicks($poolAddress: String!, $tickIdxLowerBound: BigInt!, $tickIdxUpperBound: BigInt!, $skip: Int!) {
        ticks(subgraphError: allow, first: 1000, skip: $skip, where: { poolAddress: $poolAddress, tickIdx_lte: $tickIdxUpperBound, tickIdx_gte: $tickIdxLowerBound }) {
            tickIdx
            liquidityGross
            liquidityNet
            price0
            price1
        }
    }
`;

export const poolQuery = gql`
    query pool($poolAddress: String!) {
        pool(id: $poolAddress) {
            tick
            token0 {
                symbol
                id
                decimals
            }
            token1 {
                symbol
                id
                decimals
            }
            feeTier
            sqrtPrice
            liquidity
            token1Price
            token0Price
        }
    }
`;