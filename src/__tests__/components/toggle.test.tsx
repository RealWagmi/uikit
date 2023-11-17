import React from "react";
import { fireEvent } from "@testing-library/react";
import { vitest, expect, it, describe } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import Toggle from "../../components/Toggle";

describe("Toggle", () => {
  it("should render the toggle and call onChange function for enabled toggle", () => {
    const onChange = vitest.fn();
    const { getByTestId } = renderWithProvider(<Toggle data-testid={"toggle"} value={true} onChange={onChange} />);

    const toggle = getByTestId("toggle");

    expect(toggle).toBeInTheDocument();

    fireEvent.click(toggle);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(false);
  });
  it("should not call onChange function for disabled toggle", () => {
    const onChange = vitest.fn();
    const { getByTestId } = renderWithProvider(<Toggle data-testid={"toggle"} disabled={true} onChange={onChange} />);

    const toggle = getByTestId("toggle");

    fireEvent.click(toggle);

    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
