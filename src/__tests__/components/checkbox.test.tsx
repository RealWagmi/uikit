import React from "react";
import { fireEvent } from "@testing-library/react";
import { vitest, expect, it, describe } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import Checkbox from "../../components/Checkbox";

describe("Checkbox", () => {
  it("should render the checkbox in the correct state", () => {
    const onChange = vitest.fn();
    const { getByTestId, asFragment } = renderWithProvider(<Checkbox data-testid={"checkbox"} onChange={onChange} />);

    const checkbox = getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect((checkbox as HTMLButtonElement).disabled).toEqual(false);
    expect(asFragment()).toMatchInlineSnapshot(`
  <DocumentFragment>
    .c0 {
    position: relative;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 16px;
    height: 16px;
    outline-offset: -1px;
    border-radius: 4px;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: 1px solid #5d93b2;
    -webkit-transition: outline-color 0.2s;
    transition: outline-color 0.2s;
  }
  
  .c0:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    background: #5d93b2;
    border-radius: 2px;
    -webkit-transition: background 0.2s,width 0.05s,height 0.05s;
    transition: background 0.2s,width 0.05s,height 0.05s;
  }
  
  .c0:hover:not(:disabled) {
    outline: 1px solid #6da6c6;
  }
  
  .c0:hover:not(:disabled):after {
    background: #6da6c6;
  }
  
  .c0:disabled {
    outline: 1px solid #6a757b;
    cursor: default;
  }
  
  .c0:disabled:after {
    background: #6a757b;
    cursor: default;
  }
  
  <button
      class="c0"
      data-testid="checkbox"
      type="button"
    />
  </DocumentFragment>

    
    `);
  });
  it("should call onChange function for enabled checkbox", () => {
    const onChange = vitest.fn();
    const { getByTestId } = renderWithProvider(<Checkbox data-testid={"checkbox"} onChange={onChange} value={false} />);

    const checkbox = getByTestId("checkbox");

    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);
  });
  it("should not onChange function for enabled checkbox", () => {
    const onChange = vitest.fn();
    const { getByTestId } = renderWithProvider(
      <Checkbox data-testid={"checkbox"} onChange={onChange} disabled={true} />
    );

    const checkbox = getByTestId("checkbox");

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
