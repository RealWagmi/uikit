import { Project } from "@real-wagmi/sdk";
import { NamedExoticComponent, PropsWithChildren, useMemo } from "react";
import { SvgProps } from "../components/Svg/types";
import getProtocolLogo from "../utils/getProtocolLogo";

type UseProtocolSvgLogoReturnType = NamedExoticComponent<PropsWithChildren<SvgProps>>;

export default function useProtocolLogo(protocol?: Project): UseProtocolSvgLogoReturnType {
  return useMemo((): UseProtocolSvgLogoReturnType => getProtocolLogo(protocol), [protocol]);
}
