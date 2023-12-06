import { renderHook } from "@testing-library/react-hooks";
import { expect, it } from "vitest";
import { ChainId } from "@real-wagmi/sdk";
import { FantomCircleChain, BscCircleChain } from "../../components";
import useCircleChainSvgLogo from "../useCircleChainSvgLogo";

it("useCircleChainSvgLogo()", () => {
  const { result, rerender } = renderHook((chainId) => useCircleChainSvgLogo(chainId), {
    initialProps: ChainId.FANTOM,
  });

  const prevComponent = result.current;

  rerender(ChainId.BSC);

  const updatedComponent = result.current;

  expect(prevComponent).toBe(FantomCircleChain);
  expect(updatedComponent).toBe(BscCircleChain);
});
