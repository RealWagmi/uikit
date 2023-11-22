import * as React from "react";
import { renderWithProvider } from "../../testHelpers";
import { expect, it } from "vitest";
import Tooltip from "../../components/Tooltip/Tooltip";

it("renders correctly", () => {
  const label = "Some Label";
  const content = "Some Content";
  const { getByText, asFragment } = renderWithProvider(<Tooltip content={content}>{label}</Tooltip>);

  expect(getByText(label)).toBeInTheDocument();
  expect(getByText(content)).toBeInTheDocument();

  expect(asFragment()).toMatchInlineSnapshot(`
   <DocumentFragment>
     .c0 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
   }

   <div
       class=""
     >
       <div
         class="c0"
       >
         Some Label
       </div>
     </div>
   </DocumentFragment>
  `);
});
