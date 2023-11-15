import React from "react";
import { fireEvent } from "@testing-library/react";
import Dropdown from "../../components/Dropdown";
import { vitest } from "vitest";
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
    const { getByTestId, getAllByText, getByText } = renderWithProvider(
      <Dropdown items={items} value={value} onChange={onChange} />
    );

    const dropdownItemsList = getByTestId("dropdown-items");

    const selectedItem = getAllByText(items[0].title)[1];
    const nonSelectedItem = getByText(items[1].title);

    expect(dropdownItemsList.children.length).toEqual(items.length);
    expect(selectedItem.tabIndex).toEqual(-1);
    expect(nonSelectedItem.tabIndex).not.toEqual(-1);
  });

  it("should call onChange function when an item is selected", () => {
    const { getByText } = renderWithProvider(<Dropdown items={items} value={value} onChange={onChange} />);

    const nonSelectedItem = getByText(items[1].title);

    fireEvent.click(nonSelectedItem);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(items[1].value);
  });
});
