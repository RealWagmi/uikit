import * as React from "react";
import { renderWithProvider } from "../../testHelpers";
import { expect, it } from "vitest";
import Grid from "../../components/Box/components/Grid";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Grid>box</Grid>);
  expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
    .c0 {
    display: grid;
  }

  <div
      class="c0"
    >
      box
    </div>
  </DocumentFragment>
  `);
});
