import React from "react";
import { fireEvent, waitFor } from "@testing-library/react";
import { vitest, expect, it } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import Button from "../../components/Button";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";

describe("Button", () => {
  const label = "Some Button";

  it("should render the button with correct content", () => {
    const onClick = vitest.fn();
    const { getByText } = renderWithProvider(<Button onClick={onClick}>{label}</Button>);

    const buttonElement = getByText(label);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call onClick function for enabled button", () => {
    const onClick = vitest.fn();
    const { getByText } = renderWithProvider(<Button onClick={onClick}>{label}</Button>);

    const buttonElement = getByText(label);

    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("should not call onClick function for disabled button", () => {
    const onClick = vitest.fn();
    const { getByText } = renderWithProvider(
      <Button onClick={onClick} disabled={true}>
        {label}
      </Button>
    );

    const buttonElement = getByText(label);

    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it("should not call onClick function for loading button", () => {
    const onClick = vitest.fn();
    const { getByText } = renderWithProvider(
      <Button onClick={onClick} loading={true}>
        {label}
      </Button>
    );

    const buttonElement = getByText(label);

    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it("should redirect with click to link button", async () => {
    const history = createMemoryHistory();

    const to = "/some-route";
    history.push(to);

    const { getByText } = renderWithProvider(
      <MemoryRouter initialEntries={[to]}>
        <Button>{label}</Button>
      </MemoryRouter>
    );

    const button = getByText(label);

    fireEvent.click(button);

    await waitFor(() => {
      expect(history.location.pathname).toBe(to);
    });
  });
});
