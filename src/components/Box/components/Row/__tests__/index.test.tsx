import * as React from "react";
import { expect, it } from "vitest";
import Row from "../index";
import { renderWithProvider } from "../../../../../testHelpers";

it("render <Row />", () => {
  const { asFragment } = renderWithProvider(<Row>Row</Row>);
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

    <div
        class="c0"
      >
        Row
      </div>
    </DocumentFragment>
  `);
});
