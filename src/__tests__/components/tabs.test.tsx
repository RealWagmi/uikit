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
  const { getByTestId, getByText } = renderWithProvider(
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
});
