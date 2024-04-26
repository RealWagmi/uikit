import { ChainId } from "@real-wagmi/sdk";
import {
  ArbitrumChainGray,
  BaseChainGray,
  BlastChainGray,
  BscChainGray,
  EthereumChainGray,
  FantomChainGray,
  KavaEvmChainGray,
  MetisChainGray,
  ZkLinkNovaChainGray,
  AvalancheChainGray,
  OptimismChainGray,
  PolygonChainGray,
  ZkSyncEraChainGray,
} from "../components/Svg/NetworksGray";

export default function getGrayChainLogo(chainId = ChainId.ETHEREUM) {
  if (chainId === ChainId.ARBITRUM) return ArbitrumChainGray;
  if (chainId === ChainId.BASE) return BaseChainGray;
  if (chainId === ChainId.BLAST) return BlastChainGray;
  if (chainId === ChainId.BSC) return BscChainGray;
  if (chainId === ChainId.ETHEREUM) return EthereumChainGray;
  if (chainId === ChainId.FANTOM) return FantomChainGray;
  if (chainId === ChainId.KAVA) return KavaEvmChainGray;
  if (chainId === ChainId.METIS) return MetisChainGray;
  if (chainId === ChainId.ZKLINK) return ZkLinkNovaChainGray;
  if (chainId === ChainId.AVALANCHE) return AvalancheChainGray;
  if (chainId === ChainId.OPTIMISM) return OptimismChainGray;
  if (chainId === ChainId.POLYGON) return PolygonChainGray;
  if (chainId === ChainId.ZKSYNC) return ZkSyncEraChainGray;
  return EthereumChainGray;
}
