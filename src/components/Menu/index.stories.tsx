import MenuComponent from "./Menu";
import { Box, Flex, Grid } from "../Box";
import { Text } from "../Text";
import React, { useState } from "react";
import { Button } from "../Button";

export default {
  title: "Components/Menu",
  component: MenuComponent,
  argTypes: {},
};

export const Menu = () => {
  const numericItems = [1, 2, 3, 4, 5];

  const items = [
    { id: 1, name: "First Item" },
    { id: 2, name: "Second Item" },
    { id: 3, name: "Last Item" },
  ];

  const [opened, setOpened] = useState(false);
  const [value0, setValue0] = useState(1);
  const [value1, setValue1] = useState(2);
  return (
    <Grid gridTemplateColumns={"repeat(2, 1fr)"} mt={"10px"}>
      <Box>
        <Text variant={"h5"} mb="20px">
          Simple
        </Text>
        <MenuComponent<(typeof numericItems)[number]>
          listWidth={"100%"}
          align={"center"}
          offsetY={5}
          items={numericItems}
          value={value0}
          onChange={setValue0}
        />
      </Box>
      <Box>
        <Text variant={"h5"} mb="20px">
          Reactive (custom activator & items)
        </Text>
        <Flex alignItems={"center"}>
          <MenuComponent<(typeof items)[number]>
            align={"center"}
            offsetY={5}
            opened={opened}
            openedChange={setOpened}
            items={items}
            valueKey={"id"}
            value={value1}
            onChange={setValue1}
            listWidth={"100%"}
            activator={
              <Text bg={"black"} color={"textGray"} p={"4px"} width={"120px"} height={"26px"}>
                {items.find((i) => i.id === value1)?.name}
              </Text>
            }
            renderItem={(item, isActive) => (
              <Text bg={"black"} color={isActive ? "red" : "textGray"} p={"8px"}>
                {item.name}
              </Text>
            )}
          />
          <Button
            width={"90px"}
            scale={"small"}
            disabled={opened}
            onClick={() => {
              setOpened(true);
            }}
            ml={"40px"}
          >
            Open (reactive)
          </Button>
        </Flex>
      </Box>
      <Text color="strokeGray" variant={"h5"} mt="40px">
        Overlapping content.
      </Text>
      <Text color="strokeGray" variant={"h5"} mt="40px">
        Overlapping content.
      </Text>
    </Grid>
  );
};
