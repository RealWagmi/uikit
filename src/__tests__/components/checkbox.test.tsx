import React from "react";
import { fireEvent } from "@testing-library/react";
import { vitest, expect, it, describe } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import Checkbox from "../../components/Checkbox";

describe("Checkbox", () => {
  it("should render the checkbox in the correct state", () => {
    const onChange = vitest.fn();
    const { getByTestId } = renderWithProvider(<Checkbox data-testid={"checkbox"} onChange={onChange} />);

    const checkbox = getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect((checkbox as HTMLButtonElement).disabled).toEqual(false);
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
