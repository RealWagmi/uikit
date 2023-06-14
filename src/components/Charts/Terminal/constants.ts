import { SupportedChainId } from "../../../constants";

export const URLS = {
    [SupportedChainId.ZK_SYNC]: (address: string) => `https://www.geckoterminal.com/zksync/pools/${address}?embed=1&info=0&swaps=0`,
    [SupportedChainId.FANTOM]: (address: string) => `https://www.geckoterminal.com/ftm/pools/${address}?embed=1&info=0&swaps=0`
}