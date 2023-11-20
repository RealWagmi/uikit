import * as React from "react";
import { renderWithProvider } from "../../testHelpers";
import { expect, it } from "vitest";
import { LoadingSpinner } from "../../components";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<LoadingSpinner />);
  expect(asFragment()).toMatchInlineSnapshot(`
  <DocumentFragment>
    .c0 {
    height: 16px;
    width: 16px;
    stroke: #5d93b2;
  }
  
  .c1 {
    fill: none !important;
    -webkit-animation: 2s fvtopB linear infinite;
    animation: 2s fvtopB linear infinite;
  }
  
<svg
      class="c0 c1"
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
  </DocumentFragment>
`);
});
