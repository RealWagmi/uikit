import * as React from "react";
import { renderWithProvider } from "../../testHelpers";
import Flex from "../../components/Box/components/Flex";
import {expect, it} from "vitest";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Flex>flex</Flex>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    <div
        class="c0"
      >
        flex
      </div>
    </DocumentFragment>
  `);
});
