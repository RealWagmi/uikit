import { useMemo, memo } from "react";
import { URLS } from "./constants";
import { ChartWrapper } from "./styles";
import { TerminalChainId } from "./types";

interface IProps {
  poolAddress: `0x${string}`;
  chainId: TerminalChainId;
}

function TerminalChart({ poolAddress, chainId }: IProps) {
  const url = useMemo(() => URLS[chainId](poolAddress), [chainId]);

  return (
    <ChartWrapper>
      <iframe style={{ width: "100%", height: "100%" }} src={url} />
    </ChartWrapper>
  );
}

export default memo(TerminalChart)
