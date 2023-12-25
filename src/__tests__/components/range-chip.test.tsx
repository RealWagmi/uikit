import React from "react";
import { expect, it, describe } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import RangeChip from "../../components/RangeChip/RangeChip";

describe("RangeChip", () => {
  it("should render the range-chip with the correct status", () => {
    const { getByText, asFragment } = renderWithProvider(<RangeChip variant={"out"} />);

    const rangeChip = getByText("Out of range");
    expect(rangeChip).toBeInTheDocument();
    expect(asFragment()).toMatchInlineSnapshot(`
   <DocumentFragment>
     .c0 {
     background: rgba(184,76,69,0.08);
     color: #b84c45;
     display: -webkit-inline-box;
     display: -webkit-inline-flex;
     display: -ms-inline-flexbox;
     display: inline-flex;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     font-size: 14px;
     font-weight: 400;
     padding: 10px 12px;
     line-height: 10px;
     border-radius: 6px;
   }
   
   .c1 {
     background: #b84c45;
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     width: 5px;
     height: 5px;
     border-radius: 5px;
     margin-right: 8px;
   }
   
   <div
       class="c0"
     >
       <div
         class="c1"
       />
       Out of range
     </div>
   </DocumentFragment>
    `);
  });
});
