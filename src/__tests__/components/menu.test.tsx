import React from "react";
import { fireEvent } from "@testing-library/react";
import { Menu } from "../../components/Menu";
import { vitest, expect, it, describe } from "vitest";
import { renderWithProvider } from "../../testHelpers";

describe("Menu", () => {
  const items = [
    { value: 1, title: "Item 1" },
    { value: 2, title: "Item 2" },
    { value: 3, title: "Item 3" },
  ];
  const value = 1;
  const onChange = vitest.fn();
  const openChanged = vitest.fn();
  const activatorContent = "Custom activator";

  it("should render the menu with correct items and call onChange", () => {
    const { getByText, asFragment } = renderWithProvider(
      <Menu<(typeof items)[number]>
        items={items}
        value={value}
        onChange={onChange}
        openedChange={openChanged}
        valueKey={"value"}
        activator={activatorContent}
        renderItem={(item) => item.title}
        closeOnClick={true}
      />
    );

    const customActivator = getByText(activatorContent);

    expect(customActivator).toBeInTheDocument();

    fireEvent.click(customActivator);
    expect(openChanged).toHaveBeenCalledWith(true);

    const secondItem = getByText(items[1].title);

    fireEvent.click(secondItem);
    expect(openChanged).toHaveBeenCalledWith(false);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(2);

    expect(openChanged).toHaveBeenCalledTimes(2);

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
     position: relative;
     -webkit-box-pack: center;
     -webkit-justify-content: center;
     -ms-flex-pack: center;
     justify-content: center;
   }
   
   .c2 {
     outline: none;
     background: transparent;
     border: none;
     cursor: pointer;
     padding: 0;
     width: 100%;
   }
   
   <div
       class="c0 c1"
     >
       <button
         class="c2"
       >
         Custom activator
       </button>
     </div>
   </DocumentFragment>
    `);
  });
});
