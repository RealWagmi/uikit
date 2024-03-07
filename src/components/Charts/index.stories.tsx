import React from "react";
import { TerminalChart, DensityChart } from "./index";
import { ChainId } from "@real-wagmi/sdk";
import { GraphQLClient } from "graphql-request";

export default {
  title: "Components/Charts",
  component: TerminalChart,
  argTypes: {},
};

export const Terminal: React.FC<React.PropsWithChildren> = () => {
  return <TerminalChart poolAddress="0xa0131792b824c2f5ffcc37173460c01a066abfd6" chainId={ChainId.ZKSYNC} />;
};

const client = new GraphQLClient('https://metis.graph.wagmi.com/subgraphs/name/v3');

export const Density: React.FC<React.PropsWithChildren> = () => {
  return <DensityChart address="0x1d347deBF7B4c6Ef0e7fbEFd94d74F75156a16a5" client={client} />;
};