import React from "react";
import { renderWithProvider } from "../../testHelpers";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { expect, it } from "vitest";
import { fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

it("should render breadcrumbs and redirect with click", async () => {
  const history = createMemoryHistory();

  const label = "Some Label";
  const to = "/some-route";

  history.push(to);

  const { getByText, asFragment } = renderWithProvider(
    <MemoryRouter initialEntries={[to]}>
      <Breadcrumbs label={label} to={to} />
    </MemoryRouter>
  );

  const breadcrumbsElement = getByText(label);

  expect(breadcrumbsElement).toBeInTheDocument();

  fireEvent.click(breadcrumbsElement);

  await waitFor(() => {
    expect(history.location.pathname).toBe(to);
  });

  expect(asFragment()).toMatchInlineSnapshot(`
  <DocumentFragment>
    .c2 {
    margin-right: 4px;
    fill: none !important;
    stroke: #7b8187;
    width: 16px;
  }

  .c3 {
    color: #7b8187;
    font-size: 14px;
    font-weight: 300;
    line-height: 17.5px;
    -webkit-letter-spacing: 0.25px;
    -moz-letter-spacing: 0.25px;
    -ms-letter-spacing: 0.25px;
    letter-spacing: 0.25px;
  }

  .c0 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .c1 {
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
    padding: 2px 16px;
    border-radius: 12px;
    min-width: 89px;
    -webkit-text-decoration: none;
    text-decoration: none;
    border: 0.5px solid rgba(97,105,113,0.2);
    background: rgba(97,105,113,0.08);
  }

  @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {
    .c2 {
      -webkit-filter: none !important;
      filter: none !important;
    }
  }

  <a
      aria-current="page"
      class="active"
      href="${to}"
    >
      <div
        class="c0 c1"
      >
        <svg
          class="c2"
          color="darkGray"
          fill="none"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 8H2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 3.5L2.5 8L7 12.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div
          class="c3 css-ldvhnx"
        >
          ${label}
        </div>
      </div>
    </a>
  </DocumentFragment>

`);
});
