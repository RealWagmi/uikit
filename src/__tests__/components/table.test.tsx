import React from "react";
import { vitest, expect, it, describe } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import { Table } from "../../components/Table";
import Button from "../../components/Button/Button";
import { fireEvent } from "@testing-library/react";

const getOnlyItemsOfTable = (table: HTMLDivElement) =>
  Array.from(table.children)
    .map((row) => Array.from(row.children))
    .flat()
    .filter((el) => !el.getAttribute("data-testid"));

const getItemsTextContent = (table: HTMLDivElement) => getOnlyItemsOfTable(table).map((el) => el.textContent);

const getTextByCol = (textList: Element["textContent"][], cols: number, colIndex: number) =>
  textList.filter((_, i) => i % cols === colIndex);

describe("Table", () => {
  const items = [
    { id: 1, value: "Value 1", amount: 4 },
    { id: 2, value: "Value 2", amount: 2 },
    { id: 3, value: "Value 3", amount: 1 },
    { id: 4, value: "Value 4", amount: 3 },
  ];

  it("should render table content and sort it", () => {
    const customHeaderText = "Custom header";

    const { getByTestId, getByText, asFragment } = renderWithProvider(
      <Table<(typeof items)[number]>
        items={items}
        page={1}
        perPage={2}
        headers={[
          { key: "value", title: "Value" },
          { key: "amount", sortable: true, title: "Amount" },
        ]}
        header={customHeaderText}
      />
    );

    const customHeader = getByText(customHeaderText);
    expect(customHeader).toBeInTheDocument();

    const amountHeader = getByTestId("table-header-1");
    const amountHeaderBtn = amountHeader.querySelector("button") as HTMLButtonElement;

    const tableContent = getByTestId("table-content") as HTMLDivElement;

    fireEvent.click(amountHeaderBtn);

    const amountColText = getTextByCol(getItemsTextContent(tableContent), 2, 1);
    expect(JSON.stringify(amountColText)).toEqual(JSON.stringify(["1", "2"]));

    fireEvent.click(amountHeaderBtn);

    const amountColTextReversed = getTextByCol(getItemsTextContent(tableContent), 2, 1);
    expect(JSON.stringify(amountColTextReversed)).toEqual(JSON.stringify(["4", "3"]));

    expect(asFragment()).toMatchInlineSnapshot(`
   <DocumentFragment>
     .c15 {
     margin-right: 0.4em;
   }
   
   .c16 {
     min-width: 10px;
     color: #5d93b2;
   }
   
   .c17 {
     margin-left: 0.4em;
     margin-right: 0.4em;
   }
   
   .c14 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
   }
   
   .c0 {
     display: grid;
   }
   
   .c1 {
     justify-items: center;
     grid-template-rows: auto 1fr auto;
     background: linear-gradient(180deg,rgba(84,93,107,0.12) 0%,rgba(31,36,46,0.12) 100%);
     border-radius: 16px;
     border: 1px solid rgba(97,105,113,0.2);
     padding: 16px;
     box-sizing: border-box;
   }
   
   .c2 {
     width: 100%;
     padding: 0 4px;
     box-sizing: border-box;
   }
   
   .c3 {
     overflow-x: auto;
     width: 100%;
   }
   
   .c4 {
     width: 100%;
     grid-row-gap: 10px;
   }
   
   .c5 {
     position: relative;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     padding: 8px 0;
     border-radius: 12px;
     grid-template-columns: repeat(2,1fr);
     cursor: default;
     -webkit-transition: background-color 0.2s;
     transition: background-color 0.2s;
   }
   
   .c5 > * {
     padding: 0 4px;
   }
   
   .c6 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     padding-bottom: 4px;
     min-height: 17px;
   }
   
   .c7 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     border: none;
     outline: none;
     cursor: pointer;
     background: transparent;
     padding: 0;
     color: #7b8187;
     font-size: 12px;
     font-weight: 400;
   }
   
   .c7:disabled {
     cursor: default;
   }
   
   .c8 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     border: none;
     outline: none;
     cursor: pointer;
     background: transparent;
     padding: 0;
     color: #5d93b2;
     font-size: 12px;
     font-weight: 400;
   }
   
   .c8:disabled {
     cursor: default;
   }
   
   .c10 {
     font-size: 14px;
     font-weight: 300;
     line-height: 18px;
     text-align: left;
     color: #ffffff;
   }
   
   .c11 {
     grid-template-columns: 1fr max-content 1fr;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     grid-column-gap: 10px;
     color: #ffffff;
     font-weight: 400;
     -webkit-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
     margin-top: 8px;
     font-size: 12px;
   }
   
   .c12 {
     display: -webkit-inline-box;
     display: -webkit-inline-flex;
     display: -ms-inline-flexbox;
     display: inline-flex;
     width: -webkit-max-content;
     width: -moz-max-content;
     width: max-content;
     background: transparent;
     cursor: pointer;
     border: none;
     outline: none;
     padding: 6px;
     border-radius: 14px;
   }
   
   .c12:disabled {
     visibility: hidden;
   }
   
   .c9 {
     margin-right: 4px;
     fill: none !important;
     stroke: #000000;
     width: 12px;
   }
   
   .c13 {
     fill: none !important;
     stroke: #5d93b2;
     width: 16px;
   }
   
   @media (min-width:640px) {
     .c1 {
       padding: 24px 32px;
     }
   }
   
   @media (min-width:640px) {
     .c2 {
       padding: 0 8px;
     }
   }
   
   @media (min-width:640px) {
     .c3 {
       overflow-x: hidden;
     }
   }
   
   @media (min-width:420px) {
     .c4 {
       width: 66.66666666666666%;
     }
   }
   
   @media (min-width:640px) {
     .c4 {
       width: 100%;
     }
   }
   
   @media (min-width:640px) {
     .c5 {
       grid-template-columns: 1fr 1fr;
       padding: 8px 4px;
     }
   }
   
   @media (min-width:420px) {
     .c11 {
       font-size: 14px;
     }
   }
   
   @media (min-width:640px) {
     .c11 {
       font-size: 16px;
       margin-top: 44px;
     }
   }
   
   @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {
     .c9 {
       -webkit-filter: none !important;
       filter: none !important;
     }
   }
   
   @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {
     .c13 {
       -webkit-filter: none !important;
       filter: none !important;
     }
   }
   
   <div
       class="c0 c1"
     >
       <div
         class="c2"
       >
         Custom header
       </div>
       <div
         class="c3"
       >
         <div
           class="c0 c4"
           data-testid="table-content"
         >
           <div
             class="c0 c5"
           >
             <div
               class="c6"
               data-testid="table-header-0"
             >
               <button
                 class="c7"
                 disabled=""
               >
                 <span>
                   Value
                 </span>
               </button>
             </div>
             <div
               class="c6"
               data-testid="table-header-1"
             >
               <button
                 class="c8"
               >
                 <svg
                   class="c9"
                   color="#000000"
                   fill="none"
                   viewBox="0 0 12 12"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M5.25 9L3.75 10.5L2.25 9"
                     stroke="#7b8187"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                   />
                   <path
                     d="M6.75 3L8.25 1.5L9.75 3"
                     stroke="#5d93b2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                   />
                   <path
                     d="M8.25 10.5V1.5"
                     stroke="#5d93b2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                   />
                   <path
                     d="M3.75 1.5V10.5"
                     stroke="#7b8187"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                   />
                 </svg>
                 <span>
                   Amount
                 </span>
               </button>
             </div>
           </div>
           <div
             class="c0 c5"
           >
             <div
               class="c10"
             >
               Value 1
             </div>
             <div
               class="c10"
             >
               4
             </div>
           </div>
           <div
             class="c0 c5"
           >
             <div
               class="c10"
             >
               Value 4
             </div>
             <div
               class="c10"
             >
               3
             </div>
           </div>
         </div>
       </div>
       <div
         class="c0 c11"
       >
         <button
           class="c12"
           data-testid="table-btn-previous"
           disabled=""
         >
           <svg
             class="c13"
             color="primaryDefault"
             fill="none"
             viewBox="0 0 16 16"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M13.5 8H2.5"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
             <path
               d="M7 3.5L2.5 8L7 12.5"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
           </svg>
         </button>
         <div
           class="c14"
         >
           <div
             class="c15"
           >
             Page
           </div>
           <div
             class="c16"
             color="#5d93b2"
           >
             1
           </div>
           <div
             class="c17"
           >
             of
           </div>
           <div
             class=""
           >
             2
           </div>
         </div>
         <button
           class="c12"
           data-testid="table-btn-next"
         >
           <svg
             class="c13"
             color="primaryDefault"
             fill="none"
             style="transform: scaleX(-1);"
             viewBox="0 0 16 16"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M13.5 8H2.5"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
             <path
               d="M7 3.5L2.5 8L7 12.5"
               stroke-linecap="round"
               stroke-linejoin="round"
             />
           </svg>
         </button>
       </div>
     </div>
   </DocumentFragment>
    `);
  });

  it("should call callbacks when any button of table is pressed", () => {
    const onChangePage = vitest.fn();
    const onClickItem = vitest.fn();

    const { getByTestId } = renderWithProvider(
      <Table<(typeof items)[number]>
        items={items}
        page={1}
        perPage={2}
        headers={[
          { key: "value", title: "Value" },
          { key: "amount", sortable: true, title: "Amount" },
          {
            renderFunc: (item) => (
              <Button
                onClick={() => {
                  onClickItem(item);
                }}
              >
                Click {item.id}
              </Button>
            ),
          },
        ]}
        changePage={onChangePage}
      />
    );

    const tableContent = getByTestId("table-content") as HTMLDivElement;
    const pagNextBtn = getByTestId("table-btn-next");

    const actionOfFirstItem = getOnlyItemsOfTable(tableContent)[2].querySelector("button") as HTMLButtonElement;

    fireEvent.click(actionOfFirstItem);

    expect(onClickItem).toHaveBeenCalledTimes(1);
    expect(onClickItem).toHaveBeenCalledWith(items[0]);

    fireEvent.click(pagNextBtn);

    expect(onChangePage).toHaveBeenCalledTimes(1);
    expect(onChangePage).toHaveBeenCalledWith(2);
  });
});
