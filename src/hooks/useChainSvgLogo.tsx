import { ChainId } from "@real-wagmi/sdk";
import { NamedExoticComponent, PropsWithChildren, useMemo } from "react";
import { ArbitrumChain, FantomChain, KavaEvmChain, PolygonChain, EthereumChain, OptimismChain, ZkSyncEraChain, BscChain, AvalancheChain } from '../components/Svg/Networks'
import { SvgProps } from "../components/Svg/types";

type UseNetworksSvgLogoReturnType = NamedExoticComponent<PropsWithChildren<SvgProps>>;

export default function useChainSvgLogo(chainId: ChainId = ChainId.ZKSYNC): UseNetworksSvgLogoReturnType {
  let layout: UseNetworksSvgLogoReturnType;
  switch (chainId) {
    case ChainId.FANTOM: layout = FantomChain; break;
    case ChainId.KAVA: layout = KavaEvmChain; break;
    case ChainId.BSC: layout = BscChain; break;
    case ChainId.POLYGON: layout = PolygonChain; break;
    case ChainId.AVALANCHE: layout = AvalancheChain; break;
    case ChainId.OPTIMISM: layout = OptimismChain; break;
    case ChainId.ZKSYNC: layout = ZkSyncEraChain; break;
    case ChainId.ARBITRUM: layout = ArbitrumChain; break;
    default: layout = EthereumChain;
  }
  return useMemo((): UseNetworksSvgLogoReturnType => layout, [chainId]);
}