import { Project } from "@real-wagmi/sdk";
import { KinetixIconProtocol, SushiIconProtocol, UniswapIconProtocol, WagmiIconProtocol, PancakeIconProtocol, ThrusterIconProtocol, AmbientIconProtocol } from "../components";

export default function getProtocolLogo(protocol = Project.WAGMI) {
  switch (protocol) {
    case Project.WAGMI:
      return WagmiIconProtocol;
    case Project.KINETIX:
      return KinetixIconProtocol;
    case Project.SUSHI:
      return SushiIconProtocol;
    case Project.UNISWAP:
      return UniswapIconProtocol;
    case Project.PANCAKE:
      return PancakeIconProtocol;
    case Project.THRUSTER:
      return ThrusterIconProtocol;
    case Project.AMBIENT:
      return AmbientIconProtocol;
    default:
      return WagmiIconProtocol;
  }
}
