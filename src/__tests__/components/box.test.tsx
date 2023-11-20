import * as React from "react";
import { renderWithProvider } from "../../testHelpers";
import { expect, it } from "vitest";
import Box from "../../components/Box/Box";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Box>box</Box>);
  expect(asFragment()).toMatchInlineSnapshot(`
  <DocumentFragment>
    <div
      class=""
    >
      box
    </div>
  </DocumentFragment>
  `);
});
