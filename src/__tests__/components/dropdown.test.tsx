import React from "react";
import { fireEvent } from "@testing-library/react";
import { Dropdown } from "../../components/Dropdown";
import { vitest, expect, it, describe } from "vitest";
import { renderWithProvider } from "../../testHelpers";

describe("Dropdown", () => {
  const items = [
    { value: 1, title: "Item 1" },
    { value: 2, title: "Item 2" },
    { value: 3, title: "Item 3" },
  ];
  const value = 1;
  const onChange = vitest.fn();

  it("should render the dropdown with correct items and tabIndexes", () => {
    const { getByTestId, getAllByText, getByText, asFragment } = renderWithProvider(
      <Dropdown items={items} value={value} onChange={onChange} />
    );

    const dropdownItemsList = getByTestId("dropdown-items");

    const selectedItem = getAllByText(items[0].title)[1];
    const nonSelectedItem = getByText(items[1].title);

    expect(dropdownItemsList.children.length).toEqual(items.length);
    expect(selectedItem.tabIndex).toEqual(-1);
    expect(nonSelectedItem.tabIndex).not.toEqual(-1);

    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      height: 34px;
    }

    .c2 {
      max-height: 34px;
    }

    .c8 {
      max-height: 200px;
      overflow-y: auto;
      padding-top: 6px;
    }

    .c3 {
      display: grid;
    }

    .c9 {
      display: grid;
      grid-gap: 4px;
    }

    .c7 {
      fill: none !important;
      stroke: #000000;
      width: 16px;
    }

    .c1 {
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
      position: relative;
      overflow: visible;
      z-index: 1000;
      height: 34px;
    }

    .c4 {
      width: 100%;
      max-height: 34px;
      padding: 0 0 4px;
      overflow: hidden;
      box-sizing: border-box;
      background: rgba(93,147,178,0.08);
      outline: 0.5px solid rgba(97,105,113,0.2);
      outline-offset: -0.5px;
      border-radius: 12px;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      -webkit-transition: max-height 0.15s,background 0.2s;
      transition: max-height 0.15s,background 0.2s;
    }

    .c4 svg.dropdown-svg {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      transform: rotate(0);
      stroke: #afb6c9;
      -webkit-transition: all 0.15s;
      transition: all 0.15s;
    }

    .c4:hover {
      background: rgba(97,105,113,0.16);
    }

    .c4:hover svg.dropdown-svg {
      stroke: #ffffff;
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
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 0 40px 0 20px;
      height: 26px;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      cursor: pointer;
      color: #5d93b2;
      background: transparent;
      -webkit-transition: color 0.15s;
      transition: color 0.15s;
    }

    .c5:hover,
    .c5:focus {
      color: #5d93b2;
    }

    .c10 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 0 40px 0 20px;
      height: 26px;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      cursor: pointer;
      color: #afb6c9;
      background: transparent;
      -webkit-transition: color 0.15s;
      transition: color 0.15s;
    }

    .c10:hover,
    .c10:focus {
      color: #5d93b2;
    }

    .c6 {
      height: 34px;
      padding: 0 20px;
    }

    @supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) and (not (-moz-appearance:none)) {
      .c7 {
        -webkit-filter: none !important;
        filter: none !important;
      }
    }

    <div
        class="c0 c1"
        height="34px"
      >
        <div
          class="c2 c3 c4"
        >
          <button
            class="c5 c6"
            tabindex="-1"
          >
            <span>
              Item 1
            </span>
            <svg
              class="c7 dropdown-svg"
              color="#000000"
              fill="none"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 6L8 11L3 6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div
            class="c8 c9"
            data-testid="dropdown-items"
          >
            <button
              class="c5"
              tabindex="-1"
            >
              Item 1
            </button>
            <button
              class="c10"
            >
              Item 2
            </button>
            <button
              class="c10"
            >
              Item 3
            </button>
          </div>
        </div>
      </div>
    </DocumentFragment>
    `);
  });

  it("should call onChange function when an item is selected", () => {
    const { getByText } = renderWithProvider(<Dropdown items={items} value={value} onChange={onChange} />);

    const nonSelectedItem = getByText(items[1].title);

    fireEvent.click(nonSelectedItem);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(items[1].value);
  });
});
