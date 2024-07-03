import { ChainId } from "@real-wagmi/sdk";
import { NamedExoticComponent, PropsWithChildren, useMemo } from "react";
import {
  FtmToken,
  BnbToken,
  EthToken,
  AvaxToken,
  KavaToken,
  MaticToken,
  ArbToken,
  MetisToken,
  IotaToken,
} from "../components/Svg/Tokens";
import { SvgProps } from "../components/Svg/types";

type UseNetworksSvgLogoReturnType = NamedExoticComponent<PropsWithChildren<SvgProps>>;

export default function useNativeTokenSvgLogo(chainId: ChainId = ChainId.ZKSYNC): UseNetworksSvgLogoReturnType {
  let layout: UseNetworksSvgLogoReturnType;
  switch (chainId) {
    case ChainId.FANTOM:
      layout = FtmToken;
      break;
    case ChainId.KAVA:
      layout = KavaToken;
      break;
    case ChainId.BSC:
      layout = BnbToken;
      break;
    case ChainId.POLYGON:
      layout = MaticToken;
      break;
    case ChainId.AVALANCHE:
      layout = AvaxToken;
      break;
    case ChainId.ARBITRUM:
      layout = ArbToken;
      break;
    case ChainId.METIS:
      layout = MetisToken;
      break;
    case ChainId.IOTA:
      layout = IotaToken;
      break;
    default:
      layout = EthToken;
  }
  return useMemo((): UseNetworksSvgLogoReturnType => layout, [chainId]);
}
