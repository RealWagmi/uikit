import * as React from "react";
import { expect, it } from "vitest";
import RowBetween from "../index";
import { renderWithProvider } from "../../../../../testHelpers";

it("render <RowBetween />", () => {
  const { asFragment } = renderWithProvider(<RowBetween>RowBetween</RowBetween>);
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
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    <div
        class="c0 c1"
      >
        RowBetween
      </div>
    </DocumentFragment>
  `);
});
