import React from "react";
import { fireEvent } from "@testing-library/react";
import { vitest, expect, it } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import Tabs from "../../components/Tabs";

it("should render tabs and call onChange function with correct argument", () => {
  const items = [
    { value: 1, title: "First" },
    { value: 2, title: "Second" },
    { value: 3, title: "Last" },
  ];

  const onChange = vitest.fn();
  const { getByTestId, getByText, asFragment } = renderWithProvider(
    <Tabs data-testid={"tabs"} tabs={items} value={1} onChange={onChange} />
  );

  const tabs = getByTestId("tabs");

  const selectedItem = getByText(items[0].title);
  const nonSelectedItem = getByText(items[1].title);

  expect(tabs.children.length).toEqual(items.length);
  expect((selectedItem as HTMLButtonElement).disabled).toEqual(true);

  fireEvent.click(nonSelectedItem);

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(items[1].value);

  expect(asFragment()).toMatchInlineSnapshot(`
   <DocumentFragment>
     .c0 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
   }
   
   .c1 {
     display: -webkit-inline-box;
     display: -webkit-inline-flex;
     display: -ms-inline-flexbox;
     display: inline-flex;
     box-shadow: 0 2px 16px -4px rgba(45,54,67,0.04);
     outline: 1px solid rgba(97,105,113,0.2);
     outline-offset: -1px;
     background: rgba(97,105,113,0.08);
     border-radius: 32px;
     padding: 5px 10px;
   }
   
   .c2 {
     padding: 10px;
     border: none;
     border-radius: 32px;
     font-size: 16px;
     font-weight: 400;
     line-height: 11px;
     min-width: 62px;
     cursor: pointer;
     outline: none;
     background: transparent;
     color: #7b8187;
     -webkit-transition: background 0.2s;
     transition: background 0.2s;
   }
   
   .c2:disabled {
     color: #5d93b2;
   }
   
   .c2:not(:last-child) {
     margin-right: 16px;
   }
   
   .c2:hover,
   .c2:focus,
   .c2:disabled {
     background: rgba(175,182,201,0.08);
   }
   
   <div
       class="c0 c1"
       data-testid="tabs"
     >
       <button
         class="c2"
         disabled=""
       >
         First
       </button>
       <button
         class="c2"
       >
         Second
       </button>
       <button
         class="c2"
       >
         Last
       </button>
     </div>
   </DocumentFragment>
  `);
});
