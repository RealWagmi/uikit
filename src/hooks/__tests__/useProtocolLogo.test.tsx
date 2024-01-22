import { renderHook } from "@testing-library/react-hooks";
import { expect, it } from "vitest";
import { Project } from "@real-wagmi/sdk";
import { KinetixIconProtocol, WagmiIconProtocol } from "../../components";
import useProtocolLogo from "../useProtocolLogo";

it("useProtocolLogo()", () => {
  const { result, rerender } = renderHook((protocol) => useProtocolLogo(protocol), {
    initialProps: Project.WAGMI,
  });

  const prevComponent = result.current;

  rerender(Project.KINETIX);

  const updatedComponent = result.current;

  expect(prevComponent).toBe(WagmiIconProtocol);
  expect(updatedComponent).toBe(KinetixIconProtocol);
});
