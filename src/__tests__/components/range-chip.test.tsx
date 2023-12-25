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
     .c2 {
     border-radius: inherit;
     padding: 10px 12px;
   }
   
   .c1 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
   }
   
   .c3 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
   }
   
   .c0 {
     background: rgba(184,76,69,0.08);
     color: #b84c45;
     display: -webkit-inline-box;
     display: -webkit-inline-flex;
     display: -ms-inline-flexbox;
     display: inline-flex;
     font-size: 14px;
     font-weight: 400;
     line-height: 10px;
     border-radius: 6px;
   }
   
   .c4 {
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
         class=""
       >
         <div
           class="c1"
         >
           <div
             class="c2 c3"
           >
             <div
               class="c4"
             />
             Out of range
           </div>
         </div>
       </div>
     </div>
   </DocumentFragment>
    `);
  });
});
