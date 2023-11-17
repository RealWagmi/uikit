import { ChainId } from "@real-wagmi/sdk";
import { NamedExoticComponent, PropsWithChildren, useMemo } from "react";
import { Ftm, Bnb, Eth, Avax, Kava, Matic } from '../components/Svg/Tokens'
import { SvgProps } from "../components/Svg/types";

type UseNetworksSvgLogoReturnType = NamedExoticComponent<PropsWithChildren<SvgProps>>;

export default function useNativeTokenSvgLogo(chainId: ChainId = ChainId.ZKSYNC): UseNetworksSvgLogoReturnType {
  let layout: UseNetworksSvgLogoReturnType;
  switch (chainId) {
    case ChainId.FANTOM: layout = Ftm; break;
    case ChainId.KAVA: layout = Kava; break;
    case ChainId.BSC: layout = Bnb; break;
    case ChainId.POLYGON: layout = Matic; break;
    case ChainId.AVALANCHE: layout = Avax; break;
    default: layout = Eth;
  }
  return useMemo((): UseNetworksSvgLogoReturnType => layout, [chainId]);
}