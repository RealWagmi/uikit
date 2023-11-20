import * as React from "react";
import { renderWithProvider } from "../../testHelpers";
import { expect, it } from "vitest";
import { LoadingBubble } from "../../components";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<LoadingBubble />);
  expect(asFragment()).toMatchInlineSnapshot(`
  <DocumentFragment>
    .c0 {
    border-radius: 12px;
    height: 24px;
    width: 50%;
    -webkit-animation: fiLSng 1.5s infinite;
    animation: fiLSng 1.5s infinite;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    background: linear-gradient( to left, #0e1218 25%, #1c2430 50%, #0e1218 75% );
    will-change: background-position;
    background-size: 400%;
  }
  
  <div
      class="c0"
    />
  </DocumentFragment>
  

  `);
});
