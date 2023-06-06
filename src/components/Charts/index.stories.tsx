import React from "react";
import { TerminalChart } from './Terminal';
import { SupportedChainId } from '@real-wagmi/sdk';

export default {
  title: "Components/Charts",
  component: TerminalChart,
  argTypes: {},
};

export const Terminal: React.FC<React.PropsWithChildren> = () => {
  return <TerminalChart poolAddress="0xa0131792b824c2f5ffcc37173460c01a066abfd6" chainId={SupportedChainId.ZK_SYNC} />;
};