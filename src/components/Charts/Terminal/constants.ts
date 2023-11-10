import { ChainId } from "@real-wagmi/sdk";

//@ts-ignore
export const URLS: { [key in ChainId]: (a: string) => string | undefined } = {
  [ChainId.ZKSYNC]: (address: string) => `https://www.geckoterminal.com/zksync/pools/${address}?embed=1&info=0&swaps=0`,
  [ChainId.FANTOM]: (address: string) => `https://www.geckoterminal.com/ftm/pools/${address}?embed=1&info=0&swaps=0`,
};
