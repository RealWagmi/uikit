import useChainSvgLogo from "../useChainSvgLogo";
import { renderHook } from "@testing-library/react-hooks";
import { expect, it } from "vitest";
import { ChainId } from "@real-wagmi/sdk";
import { FantomChain, BscChain } from "../../components";

it("useChainSvgLogo()", () => {
  const { result, rerender } = renderHook((chainId) => useChainSvgLogo(chainId), {
    initialProps: ChainId.FANTOM,
  });
  
  const prevComponent = result.current;
  
  rerender(ChainId.BSC);
  
  const updatedComponent = result.current;
  
  expect(prevComponent).toBe(FantomChain);
  expect(updatedComponent).toBe(BscChain);
});