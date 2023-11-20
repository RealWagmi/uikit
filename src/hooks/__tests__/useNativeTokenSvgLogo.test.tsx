import { renderHook } from "@testing-library/react-hooks";
import useNativeTokenSvgLogo from "../useNativeTokenSvgLogo";
import { ChainId } from "@real-wagmi/sdk";
import Ftm from "../../components/Svg/Tokens/components/Ftm";
import { it } from "vitest";

it("useNativeTokenSvgLogo()", () => {
  const resultFantom = renderHook(() => useNativeTokenSvgLogo(ChainId.FANTOM)).result;
  
  expect(resultFantom.current).toBe(Ftm);
});