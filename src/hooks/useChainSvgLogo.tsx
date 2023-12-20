import { ChainId } from "@real-wagmi/sdk";
import { NamedExoticComponent, PropsWithChildren, useMemo } from "react";
import { SvgProps } from "../components/Svg/types";
import { getChainLogo } from '../utils';

type UseNetworksSvgLogoReturnType = NamedExoticComponent<PropsWithChildren<SvgProps>>;

export default function useChainSvgLogo(chainId?: ChainId): UseNetworksSvgLogoReturnType {
  return useMemo((): UseNetworksSvgLogoReturnType => getChainLogo(chainId), [chainId]);
}
