import { Project } from "@real-wagmi/sdk";
import { KinetixIconProtocol, SushiIconProtocol, UniswapIconProtocol, WagmiIconProtocol } from "../components";

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
    default:
      return WagmiIconProtocol;
  }
}
