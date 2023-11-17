import React from "react";
import { vitest, expect, it, describe } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import Table from "../../components/Table";
import Button from "../../components/Button";
import { fireEvent } from "@testing-library/react";

const getOnlyItemsOfTable = (table: HTMLDivElement) =>
  Array.from(table.children).filter((el) => !el.getAttribute("data-testid"));

const getItemsTextContent = (table: HTMLDivElement) => getOnlyItemsOfTable(table).map((el) => el.textContent);

const getTextByCol = (textList: Element["textContent"][], cols: number, colIndex: number) =>
  textList.filter((_, i) => i % cols === colIndex);

describe("Table", () => {
  const items = [
    { id: 1, value: "Value 1", amount: 4 },
    { id: 2, value: "Value 2", amount: 2 },
    { id: 3, value: "Value 3", amount: 1 },
    { id: 4, value: "Value 4", amount: 3 },
  ];

  it("should render table content and sort it", () => {
    const customHeaderText = "Custom header";

    const { getByTestId, getByText } = renderWithProvider(
      <Table<(typeof items)[number]>
        items={items}
        page={1}
        perPage={2}
        headers={[
          { key: "value", title: "Value" },
          { key: "amount", sortable: true, title: "Amount" },
        ]}
        header={customHeaderText}
      />
    );

    const customHeader = getByText(customHeaderText);
    expect(customHeader).toBeInTheDocument();

    const amountHeader = getByTestId("table-header-1");
    const amountHeaderBtn = amountHeader.querySelector("button") as HTMLButtonElement;

    const tableContent = getByTestId("table-content") as HTMLDivElement;

    fireEvent.click(amountHeaderBtn);

    const amountColText = getTextByCol(getItemsTextContent(tableContent), 2, 1);
    expect(JSON.stringify(amountColText)).toEqual(JSON.stringify(["1", "2"]));

    fireEvent.click(amountHeaderBtn);

    const amountColTextReversed = getTextByCol(getItemsTextContent(tableContent), 2, 1);
    expect(JSON.stringify(amountColTextReversed)).toEqual(JSON.stringify(["4", "3"]));
  });

  it("should call callbacks when any button of table is pressed", () => {
    const onChangePage = vitest.fn();
    const onClickItem = vitest.fn();

    const { getByTestId } = renderWithProvider(
      <Table<(typeof items)[number]>
        items={items}
        page={1}
        perPage={2}
        headers={[
          { key: "value", title: "Value" },
          { key: "amount", sortable: true, title: "Amount" },
          {
            renderFunc: (item) => (
              <Button
                onClick={() => {
                  onClickItem(item);
                }}
              >
                Click {item.id}
              </Button>
            ),
          },
        ]}
        changePage={onChangePage}
      />
    );

    const tableContent = getByTestId("table-content") as HTMLDivElement;
    const pagNextBtn = getByTestId("table-btn-next");

    const actionOfFirstItem = getOnlyItemsOfTable(tableContent)[2].querySelector("button") as HTMLButtonElement;

    fireEvent.click(actionOfFirstItem);

    expect(onClickItem).toHaveBeenCalledTimes(1);
    expect(onClickItem).toHaveBeenCalledWith(items[0]);

    fireEvent.click(pagNextBtn);

    expect(onChangePage).toHaveBeenCalledTimes(1);
    expect(onChangePage).toHaveBeenCalledWith(2);
  });
});
