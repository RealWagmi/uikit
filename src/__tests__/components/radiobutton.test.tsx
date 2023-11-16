import React from "react";
import { fireEvent } from "@testing-library/react";
import { vitest, expect, it } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import RadioButton from "../../components/RadioButton";
import Grid from "../../components/Box/Grid";

it("should render the radiobutton and respond correctly to clicks", () => {
  const onChange = vitest.fn();

  const items = [
    { value: 1, title: "First" },
    { value: 2, title: "Second" },
    { value: 3, title: "Last", disabled: true },
  ];

  const { getByTestId } = renderWithProvider(
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
});
