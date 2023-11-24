import * as React from "react";
import { expect, it } from "vitest";
import AutoRow from "../index";
import { renderWithProvider } from "../../../../../testHelpers";

it("render <AutoRow />", () => {
  const { asFragment } = renderWithProvider(<AutoRow>AutoRow</AutoRow>);
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
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.c1 > * {
  margin: !important;
}

<div
    class="c0 c1"
  >
    AutoRow
  </div>
</DocumentFragment>
  `);
});
