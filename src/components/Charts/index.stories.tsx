import React from "react";
import { TerminalChart, DensityChart } from "./index";
import { ChainId } from "@real-wagmi/sdk";
import { GraphQLClient } from "graphql-request";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Flex } from "../Box";

export default {
  title: "Components/Charts",
  component: TerminalChart,
  argTypes: {},
};

export const Terminal: React.FC<React.PropsWithChildren> = () => {
  return <TerminalChart poolAddress="0xa0131792b824c2f5ffcc37173460c01a066abfd6" chainId={ChainId.ZKSYNC} />;
};

const client = new GraphQLClient('https://metis.graph.wagmi.com/subgraphs/name/v3');
const queryClient = new QueryClient();

export const Density: React.FC<React.PropsWithChildren> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Flex minHeight={400}>
        <DensityChart address="0xfc0AE5EB117a4Ae1b9348956EbBd308b30DA1Bd4" client={client} />
      </Flex>
    </QueryClientProvider> 
  )
};