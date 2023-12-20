import { ChainId } from "@real-wagmi/sdk";
import { NamedExoticComponent, PropsWithChildren, useMemo } from "react";
import { SvgProps } from "../components/Svg/types";
import { getChainLogo } from '../utils';

type UseNetworksCircleSvgLogoReturnType = NamedExoticComponent<PropsWithChildren<SvgProps>>;

export default function useCircleChainSvgLogo(chainId?: ChainId): UseNetworksCircleSvgLogoReturnType {
  return useMemo((): UseNetworksCircleSvgLogoReturnType => getChainLogo(chainId, true), [chainId]);
}
