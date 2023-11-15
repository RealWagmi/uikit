import React from "react";
import { renderWithProvider } from "../../testHelpers";
import Breadcrumbs from "../../components/Breadcrumbs";
import { expect, it } from "vitest";

it("should render breadcrumbs with correct label and href", () => {
  const label = "Some Label";
  const to = "https://docs.popsicle.finance/";

  const { getByText } = renderWithProvider(<Breadcrumbs label={label} to={to} />);

  const breadcrumbsElement = getByText(label);

  expect(breadcrumbsElement).toBeInTheDocument();
  expect(breadcrumbsElement.closest("a")?.href).toEqual(to);
});
