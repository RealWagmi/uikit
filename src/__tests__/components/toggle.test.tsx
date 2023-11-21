import React from "react";
import { fireEvent } from "@testing-library/react";
import { vitest, expect, it, describe } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import Toggle from "../../components/Toggle/Toggle";

describe("Toggle", () => {
  it("should render the toggle and call onChange function for enabled toggle", () => {
    const onChange = vitest.fn();
    const { getByTestId, asFragment } = renderWithProvider(
      <Toggle data-testid={"toggle"} value={true} onChange={onChange} />
    );

    const toggle = getByTestId("toggle");

    expect(toggle).toBeInTheDocument();

    fireEvent.click(toggle);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(false);

    expect(asFragment()).toMatchInlineSnapshot(`
     <DocumentFragment>
     .c0 {
     position: relative;
     width: 36px;
     height: 20px;
     background: #5d93b2;
     cursor: pointer;
     border-radius: 20px;
     padding: 2px;
     border: none;
     outline: none;
     -webkit-transition: background 0.2s;
     transition: background 0.2s;
   }

   .c0:hover:not(:disabled) {
     background: #6da6c6;
   }

   .c0:disabled {
     background: #6a757b;
     cursor: default;
   }

   .c1 {
     position: absolute;
     top: 2px;
     left: calc(100% - 18px);
     width: 16px;
     height: 16px;
     background: #ffffff;
     border-radius: inherit;
     -webkit-transition: left 0.2s,background 0.2s;
     transition: left 0.2s,background 0.2s;
   }

   <button
       class="c0"
       data-testid="toggle"
       type="button"
     >
       <span
         class="c1"
       />
     </button>
   </DocumentFragment>
    `);
  });
  it("should not call onChange function for disabled toggle", () => {
    const onChange = vitest.fn();
    const { getByTestId } = renderWithProvider(<Toggle data-testid={"toggle"} disabled={true} onChange={onChange} />);

    const toggle = getByTestId("toggle");

    fireEvent.click(toggle);

    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
