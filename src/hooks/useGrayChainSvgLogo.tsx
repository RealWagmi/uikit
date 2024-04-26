import { ChainId } from "@real-wagmi/sdk";
import { NamedExoticComponent, PropsWithChildren, useMemo } from "react";
import { SvgProps } from "../components/Svg/types";
import getGrayChainLogo from "../utils/getGrayChainLogo";

type UseNetworksGraySvgLogoReturnType = NamedExoticComponent<PropsWithChildren<SvgProps>>;

export default function useGrayChainSvgLogo(chainId?: ChainId): UseNetworksGraySvgLogoReturnType {
  return useMemo((): UseNetworksGraySvgLogoReturnType => getGrayChainLogo(chainId), [chainId]);
}
