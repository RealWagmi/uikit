import React from "react";
import { vitest, expect, it, describe } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import Table from "../../components/Table";
import Button from "../../components/Button";
import { fireEvent } from "@testing-library/react";

const getOnlyItemsOfTable = (table: HTMLDivElement) =>
  Array.from(table.children).filter((el) => !el.getAttribute("data-testid"));

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
     .c2 {
     width: 100%;
   }
   
   .c14 {
     margin-right: 0.4em;
   }
   
   .c15 {
     min-width: 10px;
     color: #5d93b2;
   }
   
   .c16 {
     margin-left: 0.4em;
     margin-right: 0.4em;
   }
   
   .c13 {
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
   
   .c3 {
     overflow-y: hidden;
     overflow-x: auto;
     width: 100%;
   }
   
   .c4 {
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     grid-row-gap: 18px;
     grid-column-gap: 8px;
     grid-template-columns: calc(50% - 4px) calc(50% - 4px);
   }
   
   .c5 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     padding: 8px 0 12px;
     min-height: 17px;
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
     border: none;
     outline: none;
     cursor: pointer;
     background: transparent;
     padding: 0;
     color: #7b8187;
     font-size: 12px;
     font-weight: 400;
   }
   
   .c6:disabled {
     cursor: default;
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
     color: #5d93b2;
     font-size: 12px;
     font-weight: 400;
   }
   
   .c7:disabled {
     cursor: default;
   }
   
   .c9 {
     font-size: 14px;
     font-weight: 300;
     line-height: 18px;
     text-align: left;
     color: #ffffff;
   }
   
   .c10 {
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
   
   .c11 {
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
   
   .c11:disabled {
     visibility: hidden;
   }
   
   .c8 {
     margin-right: 4px;
     fill: none !important;
     stroke: #000000;
     width: 12px;
   }
   
   .c12 {
     fill: none !important;
     stroke: #5d93b2;
     width: 16px;
   }
   
   @media (min-width:640px) {
     .c1 {
       padding: 24px 40px;
     }
   }
   
   @media (min-width:640px) {
     .c3 {
       overflow-x: hidden;
     }
   }
   
   @media (min-width:420px) {
     .c4 {
       grid-template-columns: calc(33.333333333333336% - 5.333333333333333px) calc(33.333333333333336% - 5.333333333333333px);
     }
   }
   
   @media (min-width:640px) {
     .c4 {
       grid-template-columns: auto auto;
     }
   }
   
   @media (min-width:420px) {
     .c10 {
       font-size: 14px;
     }
   }
   
   @media (min-width:640px) {
     .c10 {
       font-size: 16px;
       margin-top: 44px;
     }
   }
   
   @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {
     .c8 {
       -webkit-filter: none !important;
       filter: none !important;
     }
   }
   
   @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {
     .c12 {
       -webkit-filter: none !important;
       filter: none !important;
     }
   }
   
   <div
       class="c0 c1"
     >
       <div
         class="c2"
         width="100%"
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
             class="c5"
             data-testid="table-header-0"
           >
             <button
               class="c6"
               disabled=""
             >
               <span>
                 Value
               </span>
             </button>
           </div>
           <div
             class="c5"
             data-testid="table-header-1"
           >
             <button
               class="c7"
             >
               <svg
                 class="c8"
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
           <div
             class="c9"
           >
             Value 1
           </div>
           <div
             class="c9"
           >
             4
           </div>
           <div
             class="c9"
           >
             Value 4
           </div>
           <div
             class="c9"
           >
             3
           </div>
         </div>
       </div>
       <div
         class="c0 c10"
       >
         <button
           class="c11"
           data-testid="table-btn-previous"
           disabled=""
         >
           <svg
             class="c12"
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
           class="c13"
         >
           <div
             class="c14"
           >
             Page
           </div>
           <div
             class="c15"
             color="#5d93b2"
           >
             1
           </div>
           <div
             class="c16"
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
           class="c11"
           data-testid="table-btn-next"
         >
           <svg
             class="c12"
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
