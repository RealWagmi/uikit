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
  return <DensityChart address="0x28D5576057A27F95d5dB75776BA50e6e84FAf477" client={client} />;
};