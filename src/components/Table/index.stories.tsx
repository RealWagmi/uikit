import React, { useState } from "react";
import TableComponent from "./Table";
import { Box, Flex, Grid } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";
import { Dropdown } from "../Dropdown";
import { Checkbox } from "../Checkbox";
import { Tooltip } from "../Tooltip";
import { InfoIcon } from "../Svg";

export default {
  title: "Components/Table",
  component: TableComponent,
  argTypes: {},
};

export const Table = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const [withMinHeight, setWithMinHeight] = useState(true);
  const [showCustomHeader, setShowCustomHeader] = useState(true);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  const items = [
    { id: 0, price: 12, name: "H Name", someField: "Some Field 1", sortField: "123" },
    { id: 1, price: 54, name: "D Name", someField: "Some Field 2", sortField: "Some String" },
    { id: 2, price: 1, name: "I Name", someField: "Some Field 3", sortField: "Some String" },
    {
      id: 3,
      price: 31,
      name: "G Name",
      someField: "Some Field 4",
      sortField: "123",
    },
    { id: 4, price: 82, name: "J Name", someField: "Some Field 5", sortField: "Some String" },
    { id: 5, price: 51, name: "F Name", someField: "Some Field 6", sortField: "123" },
    { id: 6, price: 66, name: "C Name", someField: "Some Field 7", sortField: "Some String" },
    { id: 7, price: 89, name: "A Name", someField: "Some Field 8", sortField: "Some String" },
    { id: 8, price: 5, name: "E Name", someField: "Some Field 9", sortField: "123" },
    { id: 9, price: 57, name: "B Name", someField: "Some Field 10", sortField: "Some String" },
  ];

  type ItemType = (typeof items)[number];

  return (
    <Box>
      <Grid gridGap={"16px"} alignItems="center" mb={"24px"}>
        <Flex alignItems="center">
          <Text mr={"8px"}>Per page:</Text>
          <Dropdown
            value={perPage}
            onChange={(value: number) => {
              setPage(1);
              setPerPage(value);
            }}
            items={[
              { value: 3, title: "3 Items" },
              { value: 5, title: "5 Items" },
              { value: 10, title: "10 Items" },
            ]}
          />
        </Flex>
        <label style={{ cursor: "pointer", display: "flex" }}>
          <Text mr={"8px"}>Min height (369px)</Text>
          <Checkbox value={withMinHeight} onChange={setWithMinHeight} />
        </label>
        <label style={{ cursor: "pointer", display: "flex" }}>
          <Text mr={"8px"}>Custom header</Text>
          <Checkbox value={showCustomHeader} onChange={setShowCustomHeader} />
        </label>
        <label style={{ cursor: "pointer", display: "flex" }}>
          <Text mr={"8px"}>Loading</Text>
          <Checkbox value={loading} onChange={setLoading} />
        </label>
        <label style={{ cursor: "pointer", display: "flex" }}>
          <Tooltip content={"Empty List card can be customized"}>
            <Text mr={"8px"}>Empty list</Text>
          </Tooltip>
          <Checkbox value={empty} onChange={setEmpty} />
        </label>
      </Grid>
      <TableComponent<ItemType>
        headers={[
          { key: "name", title: "Name", sortable: true },
          {
            key: "sortField",
            title: "Special Field",
            tooltip: "Values are sorted based on convertibility to number with custom sorting method",
            sortFunc: (a, b, reverseOrder) =>
              (Number(isNaN(Number(a.sortField))) - Number(isNaN(Number(b.sortField)))) * (reverseOrder ? -1 : 1),
          },
          {
            key: "someField",
            title: "Some Field",
            renderFunc: ({ someField }) => (
              <Flex alignItems={"center"}>
                <Box mr={"4px"}>{someField}</Box>
                <Tooltip content={`Custom icon in "${someField}" item`}>
                  <InfoIcon color={"primaryDefault"} size={"16px"} />
                </Tooltip>
              </Flex>
            ),
          },
          {
            key: "price",
            title: "Price $",
            width: "100px",
            sortable: true,
            tooltip: "Custom width === 100px",
            renderFunc: ({ price }) => `$${price}`,
          },
          {
            width: "77px",
            renderFunc: (item) => (
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Click table item", item);
                }}
                scale={"small"}
                variant={"outlined"}
              >
                Click
              </Button>
            ),
          }, //actions
        ]}
        items={!empty && !loading ? items : []}
        page={page}
        perPage={perPage}
        changePage={setPage}
        header={
          showCustomHeader ? (
            <Text pb={"24px"} px={"8px"} variant="h5">
              Custom header
            </Text>
          ) : undefined
        }
        minHeight={withMinHeight ? "392px" : undefined}
        loading={loading}
        clickRow={(item) => {
          console.log("clicked row:", item.id);
        }}
      />
    </Box>
  );
};
