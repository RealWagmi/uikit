import * as React from "react";
import { expect, it } from "vitest";
import RowFixed from "../index";
import { renderWithProvider } from "../../../../../testHelpers";

it("render <RowFixed />", () => {
  const { asFragment } = renderWithProvider(<RowFixed>RowFixed</RowFixed>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }

    .c1 {
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
    }

    <div
        class="c0 c1"
      >
        RowFixed
      </div>
    </DocumentFragment>
  `);
});
