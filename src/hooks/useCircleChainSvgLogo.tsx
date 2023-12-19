import { ChainId } from "@real-wagmi/sdk";
import { NamedExoticComponent, PropsWithChildren, useMemo } from "react";
import {
  ArbitrumCircleChain,
  FantomCircleChain,
  KavaEvmCircleChain,
  PolygonCircleChain,
  EthereumCircleChain,
  OptimismCircleChain,
  ZkSyncEraCircleChain,
  BscCircleChain,
  AvalancheCircleChain,
  MetisCircleChain,
} from "../components/Svg/NetworksCircle";
import { SvgProps } from "../components/Svg/types";

type UseNetworksCircleSvgLogoReturnType = NamedExoticComponent<PropsWithChildren<SvgProps>>;

export default function useCircleChainSvgLogo(chainId: ChainId = ChainId.ZKSYNC): UseNetworksCircleSvgLogoReturnType {
  let layout: UseNetworksCircleSvgLogoReturnType;
  switch (chainId) {
    case ChainId.FANTOM:
      layout = FantomCircleChain;
      break;
    case ChainId.KAVA:
      layout = KavaEvmCircleChain;
      break;
    case ChainId.BSC:
      layout = BscCircleChain;
      break;
    case ChainId.POLYGON:
      layout = PolygonCircleChain;
      break;
    case ChainId.AVALANCHE:
      layout = AvalancheCircleChain;
      break;
    case ChainId.OPTIMISM:
      layout = OptimismCircleChain;
      break;
    case ChainId.ZKSYNC:
      layout = ZkSyncEraCircleChain;
      break;
    case ChainId.ARBITRUM:
      layout = ArbitrumCircleChain;
      break;
    case ChainId.METIS:
      layout = MetisCircleChain;
      break;
    default:
      layout = EthereumCircleChain;
  }
  return useMemo((): UseNetworksCircleSvgLogoReturnType => layout, [chainId]);
}
