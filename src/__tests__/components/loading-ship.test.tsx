import * as React from "react";
import { renderWithProvider } from "../../testHelpers";
import { expect, it } from "vitest";
import { LoadingShip } from "../../components/Loaders";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<LoadingShip />);
  expect(asFragment()).toMatchInlineSnapshot(`
  <DocumentFragment>
      .c0 {
      width: 120px;
    }
    
    <img
        alt=""
        class="c0"
        src="/src/assets/images/ship-loader.gif"
        width="120px"
      />
    </DocumentFragment>
`);
});
