import React from "react";
import { fireEvent } from "@testing-library/react";
import { vitest, expect, it } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import Modal from "../../components/Modal/Modal";

const value = true;
const onClose = vitest.fn();
const headerContent = "Custom header";
const modalContent = "Modal content";

it("should render the menu with correct content and call onClose", () => {
  const { getByText, asFragment, getByTestId } = renderWithProvider(
    <Modal header={headerContent} value={value} onClose={onClose}>
      {modalContent}
    </Modal>
  );

  const header = getByText(headerContent);
  expect(header).toBeInTheDocument();

  const content = getByText(modalContent);
  expect(content).toBeInTheDocument();

  const closeBtn = getByTestId("close-modal-btn");

  fireEvent.click(closeBtn);

  expect(onClose).toHaveBeenCalledTimes(1);
  expect(onClose).toHaveBeenCalledWith(false);

  expect(asFragment()).toMatchInlineSnapshot(`
   <DocumentFragment>
     .c0 {
     position: fixed;
     top: 0;
     left: 0;
     display: grid;
     justify-items: center;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     width: 100%;
     height: 100vh;
     background: rgba(0,0,0,0.8);
     z-index: 900;
     -webkit-animation: cJoqxJ 0.2s forwards;
     animation: cJoqxJ 0.2s forwards;
     visibility: visible;
   }
   
   .c1 {
     position: absolute;
     display: grid;
     grid-template-rows: auto 1fr;
     background: red;
     width: 100%;
     max-width: 100%;
     height: calc(100vh - 72px);
     top: 72px;
     max-height: 100vh;
     background: linear-gradient(0deg,#1d222b,#1d222b), linear-gradient(180deg,rgba(89,98,111,0.4) 0%,rgba(62,70,83,0.4) 100%);
     border: 2px solid rgba(97,105,113,0.4);
     box-sizing: border-box;
     border-radius: 12px 12px 0 0;
   }
   
   .c2 {
     display: grid;
     grid-template-columns: 1fr auto;
     grid-gap: 24px;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     font-size: 20px;
     font-weight: 400;
     line-height: 25px;
     padding: 24px;
   }
   
   .c3 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     background: transparent;
     border: none;
     outline: none;
     cursor: pointer;
     padding: 4px;
   }
   
   .c5 {
     overflow-y: auto;
   }
   
   .c4 {
     fill: none !important;
     stroke: #afb6c9;
     width: 16px;
   }
   
   @media (min-width:640px) {
     .c1 {
       top: auto;
       height: auto;
       width: 502px;
       border-radius: 12px;
     }
   }
   
   @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {
     .c4 {
       -webkit-filter: none !important;
       filter: none !important;
     }
   }
   
   <div
       class="c0"
     >
       <div
         class="c1"
         height="auto"
         width="502px"
       >
         <div
           class="c2"
         >
           <div
             class=""
           >
             Custom header
           </div>
           <button
             class="c3"
             data-testid="close-modal-btn"
           >
             <svg
               class="c4"
               color="textGray"
               fill="none"
               viewBox="0 0 20 21"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M18 18.5L2 2.5"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               />
               <path
                 d="M18 2.5L2 18.5"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               />
             </svg>
           </button>
         </div>
         <div
           class="c5"
         >
           Modal content
         </div>
       </div>
     </div>
   </DocumentFragment>
    `);
});
