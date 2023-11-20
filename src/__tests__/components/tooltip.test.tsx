import * as React from "react";
import { renderWithProvider } from "../../testHelpers";
import { expect, it } from "vitest";
import Tooltip from "../../components/Tooltip";

it("renders correctly", () => {
  const label = "Some Label";
  const content = "Some Content";
  const { getByText } = renderWithProvider(<Tooltip content={content}>{label}</Tooltip>);

  expect(getByText(label)).toBeInTheDocument();
  expect(getByText(content)).toBeInTheDocument();
});
