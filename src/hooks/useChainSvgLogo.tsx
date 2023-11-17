import { ChainId } from "@real-wagmi/sdk";
import { NamedExoticComponent, PropsWithChildren, useMemo } from "react";
import { Arbitrum, Fantom, KavaEvm, Polygon, Ethereum, Optimism, ZkSyncEra, BnbChain, Avalanche } from '../components/Svg/Networks'
import { SvgProps } from "../components/Svg/types";

type UseNetworksSvgLogoReturnType = NamedExoticComponent<PropsWithChildren<SvgProps>>;

export default function useNetworksSvgLogo(chainId: ChainId = ChainId.ZKSYNC): UseNetworksSvgLogoReturnType {
  let layout: UseNetworksSvgLogoReturnType;
  switch (chainId) {
    case ChainId.FANTOM: layout = Fantom; break;
    case ChainId.KAVA: layout = KavaEvm; break;
    case ChainId.BSC: layout = BnbChain; break;
    case ChainId.POLYGON: layout = Polygon; break;
    case ChainId.AVALANCHE: layout = Avalanche; break;
    case ChainId.OPTIMISM: layout = Optimism; break;
    case ChainId.ZKSYNC: layout = ZkSyncEra; break;
    case ChainId.ARBITRUM: layout = Arbitrum; break;
    default: layout = Ethereum;
  }
  return useMemo((): UseNetworksSvgLogoReturnType => layout, [chainId]);
}