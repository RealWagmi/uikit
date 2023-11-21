import React from "react";
import { fireEvent, waitFor } from "@testing-library/react";
import { vitest, expect, it, describe } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import Button from "../../components/Button/Button";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";

describe("Button", () => {
  const label = "Some Button";

  it("should render the button with correct content", () => {
    const onClick = vitest.fn();
    const { getByText, asFragment } = renderWithProvider(<Button onClick={onClick}>{label}</Button>);

    const buttonElement = getByText(label);
    expect(buttonElement).toBeInTheDocument();
    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
    .c4 {
    height: 16px;
    width: 16px;
    stroke: #5d93b2;
  }

  .c5 {
    fill: none !important;
    -webkit-animation: 0.4s fvtopB linear infinite;
    animation: 0.4s fvtopB linear infinite;
  }

  .c0 {
    width: 100%;
    background: linear-gradient(90deg,#7da0c1 3.46%,#34627d 100%);
    outline: none;
    color: #f7f8f2;
    box-shadow: 0 5px 13px -4px rgba(169,182,191,0.08);
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 16px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
  }

  .c0:hover:not(:disabled),
  .c0:focus {
    background: linear-gradient(90deg,#91B9de 3.46%,#40708b 100%);
  }

  .c0 svg {
    fill: #f7f8f2;
    stroke: #f7f8f2;
  }

  .c0:disabled {
    box-shadow: none;
  }

  .c0:disabled {
    cursor: default;
    opacity: 0.5;
  }

  .c1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    opacity: 1;
    -webkit-transition: opacity 0.15s;
    transition: opacity 0.15s;
  }

  .c3 {
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    opacity: 0;
    pointer-events: none;
    -webkit-transition: opacity 0.15s;
    transition: opacity 0.15s;
  }

  .c2 {
    margin: 0 8px;
  }

  <button
      class="c0"
      color="primary"
      scale="default"
      width="100%"
    >
      <span
        class="c1"
      >
        <span
          class="c2"
        >
          ${label}
        </span>
      </span>
      <span
        class="c3"
      >
        <svg
          class="c4 c5"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
          />
        </svg>
      </span>
    </button>
  </DocumentFragment>
    `);
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
