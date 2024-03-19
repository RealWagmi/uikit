import { ChainId } from "@real-wagmi/sdk";

import {
    FantomCircleChain,
    KavaEvmCircleChain,
    PolygonCircleChain,
    EthereumCircleChain,
    BscCircleChain,
    AvalancheCircleChain,
    MetisCircleChain,
} from "../components/Svg/NetworksCircle";

export default function getNativeCurrencyLogo(chainId = ChainId.ETHEREUM){
    if(chainId === ChainId.FANTOM) return FantomCircleChain;
    if(chainId === ChainId.KAVA) return KavaEvmCircleChain;
    if(chainId === ChainId.POLYGON) return PolygonCircleChain;
    if(chainId === ChainId.BSC) return BscCircleChain;
    if(chainId === ChainId.AVALANCHE) return AvalancheCircleChain;
    if(chainId === ChainId.METIS) return MetisCircleChain;
    return EthereumCircleChain;
}