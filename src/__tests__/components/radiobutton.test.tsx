import React from "react";
import { fireEvent } from "@testing-library/react";
import { vitest, expect, it } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import { RadioButton } from "../../components/RadioButton";
import Grid from "../../components/Box/Grid";

it("should render the radiobutton and respond correctly to clicks", () => {
  const onChange = vitest.fn();

  const items = [
    { value: 1, title: "First" },
    { value: 2, title: "Second" },
    { value: 3, title: "Last", disabled: true },
  ];

  const { getByTestId, asFragment } = renderWithProvider(
    <Grid data-testid={`radiobutton`}>
      {items.map((item, i) => (
        <RadioButton
          key={i}
          value={1}
          onChange={onChange}
          name={item.value}
          data-testid={`radiobutton-item-${item.value}`}
          disabled={item.disabled}
        >
          {item.title}
        </RadioButton>
      ))}
    </Grid>
  );

  const radiobuttonWrap = getByTestId("radiobutton");

  expect(radiobuttonWrap).toBeInTheDocument();
  expect(radiobuttonWrap.children.length).toEqual(items.length);

  const nonSelectedItem = getByTestId("radiobutton-item-2");
  const disabledItem = getByTestId("radiobutton-item-3");

  fireEvent.click(nonSelectedItem);

  expect(onChange).toHaveBeenCalledWith(2);

  fireEvent.click(disabledItem);

  expect(onChange).toHaveBeenCalledTimes(1);

  expect(asFragment()).toMatchInlineSnapshot(`
  <DocumentFragment>
     .c1 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     cursor: pointer;
     -webkit-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
     color: #afb6c9;
     font-size: 14px;
     font-weight: 300;
     line-height: 18px;
   }

   .c4 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     cursor: default;
     -webkit-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
     color: #6a757b;
     font-size: 14px;
     font-weight: 300;
     line-height: 18px;
   }

   .c2 {
     margin-right: 8px;
     position: relative;
     display: -webkit-inline-box;
     display: -webkit-inline-flex;
     display: -ms-inline-flexbox;
     display: inline-flex;
     -webkit-box-pack: center;
     -webkit-justify-content: center;
     -ms-flex-pack: center;
     justify-content: center;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     width: 16px;
     height: 16px;
     outline-offset: -1px;
     border-radius: 8px;
     border: none;
     background: transparent;
     cursor: pointer;
     outline: 1px solid #5d93b2;
     -webkit-transition: outline-color 0.2s;
     transition: outline-color 0.2s;
   }

   .c2:after {
     content: "";
     position: absolute;
     width: 8px;
     height: 8px;
     background: #5d93b2;
     border-radius: 4px;
     -webkit-transition: background 0.2s,width 0.05s,height 0.05s;
     transition: background 0.2s,width 0.05s,height 0.05s;
   }

   .c2:hover:not(:disabled) {
     outline: 1px solid #d9d9d9;
   }

   .c2:hover:not(:disabled):after {
     background: #d9d9d9;
   }

   .c2:disabled {
     outline: 1px solid #6a757b;
     cursor: default;
   }

   .c2:disabled:after {
     background: #6a757b;
     cursor: default;
   }

   .c3 {
     margin-right: 8px;
     position: relative;
     display: -webkit-inline-box;
     display: -webkit-inline-flex;
     display: -ms-inline-flexbox;
     display: inline-flex;
     -webkit-box-pack: center;
     -webkit-justify-content: center;
     -ms-flex-pack: center;
     justify-content: center;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     width: 16px;
     height: 16px;
     outline-offset: -1px;
     border-radius: 8px;
     border: none;
     background: transparent;
     cursor: pointer;
     outline: 1px solid #5d93b2;
     -webkit-transition: outline-color 0.2s;
     transition: outline-color 0.2s;
   }

   .c3:after {
     content: "";
     position: absolute;
     width: 0;
     height: 0;
     background: #5d93b2;
     border-radius: 4px;
     -webkit-transition: background 0.2s,width 0.05s,height 0.05s;
     transition: background 0.2s,width 0.05s,height 0.05s;
   }

   .c3:hover:not(:disabled) {
     outline: 1px solid #d9d9d9;
   }

   .c3:hover:not(:disabled):after {
     background: #d9d9d9;
   }

   .c3:disabled {
     outline: 1px solid #6a757b;
     cursor: default;
   }

   .c3:disabled:after {
     background: #6a757b;
     cursor: default;
   }

   .c0 {
     display: grid;
   }

   <div
       class="c0"
       data-testid="radiobutton"
     >
       <label
         class="c1"
       >
         <button
           class="c2"
           data-testid="radiobutton-item-1"
           type="button"
         />
         First
       </label>
       <label
         class="c1"
       >
         <button
           class="c3"
           data-testid="radiobutton-item-2"
           type="button"
         />
         Second
       </label>
       <label
         class="c4"
         disabled=""
       >
         <button
           class="c3"
           data-testid="radiobutton-item-3"
           disabled=""
           type="button"
         />
         Last
       </label>
     </div>
   </DocumentFragment>
  `);
});
