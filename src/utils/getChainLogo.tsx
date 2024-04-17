import { ChainId } from "@real-wagmi/sdk";
import {
    ArbitrumChain,
    FantomChain,
    KavaEvmChain,
    PolygonChain,
    EthereumChain,
    OptimismChain,
    ZkSyncEraChain,
    BscChain,
    AvalancheChain,
    MetisChain,
    BlastChain,
    BaseChain
} from "../components/Svg/Networks";

import {
    ArbitrumCircleChain,
    FantomCircleChain,
    KavaEvmCircleChain,
    PolygonCircleChain,
    EthereumCircleChain,
    OptimismCircleChain,
    ZkSyncEraCircleChain,
    BscCircleChain,
    AvalancheCircleChain,
    MetisCircleChain,
    BlastCircleChain,
    BaseCircleChain
} from "../components/Svg/NetworksCircle";

export default function getChainLogo(chainId = ChainId.ETHEREUM, circle = false){
    if(chainId === ChainId.ZKSYNC) return circle ? ZkSyncEraCircleChain : ZkSyncEraChain;
    if(chainId === ChainId.FANTOM) return circle ? FantomCircleChain : FantomChain;
    if(chainId === ChainId.ARBITRUM) return circle ? ArbitrumCircleChain : ArbitrumChain;
    if(chainId === ChainId.KAVA) return circle ? KavaEvmCircleChain : KavaEvmChain;
    if(chainId === ChainId.POLYGON) return circle ? PolygonCircleChain : PolygonChain;
    if(chainId === ChainId.OPTIMISM) return circle ? OptimismCircleChain : OptimismChain;
    if(chainId === ChainId.BSC) return circle ? BscCircleChain : BscChain;
    if(chainId === ChainId.AVALANCHE) return circle ? AvalancheCircleChain : AvalancheChain;
    if(chainId === ChainId.METIS || chainId === ChainId.METIS_SEPOLIA) return circle ? MetisCircleChain : MetisChain;
    if(chainId === ChainId.BLAST) return circle ? BlastCircleChain : BlastChain;
    if(chainId === ChainId.BASE) return circle ? BaseCircleChain : BaseChain;
    return circle ? EthereumCircleChain : EthereumChain;
}