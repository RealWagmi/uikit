import * as React from "react";
import { renderWithProvider } from "../../testHelpers";
import { expect, it } from "vitest";
import { Text } from "../../components/Text";

it("renders correctly", () => {
  const content = "Some Text";
  const { asFragment, getByText } = renderWithProvider(<Text variant={"h5"}>{content}</Text>);

  expect(getByText(content)).toBeInTheDocument();
  expect(asFragment()).toMatchInlineSnapshot(`
  <DocumentFragment>
    .c0 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
  }

  <div
      class="c0 css-vurnku"
    >
      ${content}
    </div>
  </DocumentFragment>
  `);
});
