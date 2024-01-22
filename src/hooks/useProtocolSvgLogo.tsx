import { Project } from "@real-wagmi/sdk";
import { NamedExoticComponent, PropsWithChildren, useMemo } from "react";
import {
  WagmiIconProtocol,
  KinetixIconProtocol,
  SushiIconProtocol,
  UniswapIconProtocol,
} from "../components/Svg/Protocols";
import { SvgProps } from "../components/Svg/types";

type UseProtocolSvgLogoReturnType = NamedExoticComponent<PropsWithChildren<SvgProps>>;

export default function useProtocolSvgLogo(protocol: Project = Project.WAGMI): UseProtocolSvgLogoReturnType {
  let layout: UseProtocolSvgLogoReturnType;
  switch (protocol) {
    case Project.WAGMI:
      layout = WagmiIconProtocol;
      break;
    case Project.KINETIX:
      layout = KinetixIconProtocol;
      break;
    case Project.SUSHI:
      layout = SushiIconProtocol;
      break;
    case Project.UNISWAP:
      layout = UniswapIconProtocol;
      break;
    default:
      layout = WagmiIconProtocol;
  }
  return useMemo((): UseProtocolSvgLogoReturnType => layout, [protocol]);
}
