import { ChainId } from "@real-wagmi/sdk";
import { useMemo } from "react";
import { URLS } from "./constants";
import { ChartWrapper } from "./styles";

interface IProps {
  poolAddress: string;
  chainId: ChainId;
}

export function TerminalChart({ poolAddress, chainId }: IProps) {
  const url = useMemo(() => URLS[chainId](poolAddress), [chainId]);

  return (
    <ChartWrapper>
      <iframe style={{ width: "100%", height: "100%" }} src={url} />
    </ChartWrapper>
  );
}
