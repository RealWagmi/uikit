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
    BaseChain,
    MetisTestnetChain,
    IotaChain,
    SonicChain
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
    BaseCircleChain,
    MetisTestnetCircleChain,
    IotaCircleChain,
    SonicCircleChain
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
    if(chainId === ChainId.METIS) return circle ? MetisCircleChain : MetisChain;
    if(chainId === ChainId.METIS_SEPOLIA) return circle ? MetisTestnetCircleChain : MetisTestnetChain;
    if(chainId === ChainId.BASE) return circle ? BaseCircleChain : BaseChain;
    if(chainId === ChainId.IOTA) return circle ? IotaCircleChain : IotaChain;
    if(chainId === ChainId.SONIC) return circle ? SonicCircleChain : SonicChain;
    return circle ? EthereumCircleChain : EthereumChain;
}