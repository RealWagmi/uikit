import React from "react";
import { renderWithProvider } from "../../testHelpers";
import Breadcrumbs from "../../components/Breadcrumbs";
import { expect, it } from "vitest";
import { fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

it("should render breadcrumbs and redirect with click", async () => {
  const history = createMemoryHistory();

  const label = "Some Label";
  const to = "/some-route";

  history.push(to);

  const { getByText } = renderWithProvider(
    <MemoryRouter initialEntries={[to]}>
      <Breadcrumbs label={label} to={to} />
    </MemoryRouter>
  );

  const breadcrumbsElement = getByText(label);

  expect(breadcrumbsElement).toBeInTheDocument();

  fireEvent.click(breadcrumbsElement);

  await waitFor(() => {
    expect(history.location.pathname).toBe(to);
  });
});
