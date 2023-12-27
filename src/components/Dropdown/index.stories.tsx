import DropdownComponent from "./Dropdown";
import { useState } from "react";
import { Box, Flex, Grid } from "../Box";
import { Text } from "../Text";

export default {
  title: "Components/Dropdown",
  component: DropdownComponent,
  argTypes: {},
};

export const Dropdown = () => {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);
  const [value4, setValue4] = useState<number>();

  const CustomItem = (color: string, value: string) => (
    <Flex alignItems={"center"}>
      <Box width={"10px"} height={"10px"} borderRadius={"5px"} background={color} mr={"4px"}></Box>
      <span>{value}</span>
    </Flex>
  );

  return (
    <Grid gridTemplateColumns={"repeat(4, 1fr)"} mt={"10px"}>
      <Box>
        <Text variant={"h5"} mb="20px">
          Simple
        </Text>
        <DropdownComponent
          items={[
            { value: 1, title: "1D" },
            { value: 2, title: "1W" },
            { value: 3, title: "1M" },
            { value: 4, title: "1Y" },
          ]}
          value={value}
          onChange={setValue}
        />
      </Box>
      <Box>
        <Text variant={"h5"} mb="20px">
          With custom items
        </Text>
        <DropdownComponent
          items={[
            {
              value: 1,
              title: CustomItem("#EF4625", "1%"),
            },
            { value: 2, title: CustomItem("#63F6FF", "0.3%") },
            { value: 3, title: CustomItem("#F7EF2B", "0.15%") },
            { value: 4, title: CustomItem("#AAC772", "0.05%") },
            { value: 5, title: CustomItem("#5F72D6", "0%") },
          ]}
          value={value2}
          onChange={setValue2}
        />
      </Box>
      <Box>
        <Text variant={"h5"} mb="20px">
          With overflow
        </Text>
        <DropdownComponent
          items={[
            { value: 1, title: "Item 1" },
            { value: 2, title: "Item 2" },
            { value: 3, title: "Item 3" },
            { value: 4, title: "Item 4" },
            { value: 5, title: "Item 5" },
            { value: 6, title: "Item 6" },
            { value: 7, title: "Item 7" },
            { value: 8, title: "Item 8" },
            { value: 9, title: "Item 9" },
            { value: 10, title: "Item 10" },
          ]}
          value={value3}
          onChange={setValue3}
        />
      </Box>{" "}
      <Box>
        <Text variant={"h5"} mb="20px">
          With placeholder
        </Text>
        <DropdownComponent
          items={[
            { value: 1, title: "Item 1" },
            { value: 2, title: "Item 2" },
            { value: 3, title: "Item 3" },
          ]}
          value={value4}
          onChange={setValue4}
          placeholder={"None"}
        />
      </Box>
      <Text color="strokeGray" variant={"h5"} mt="40px">
        Overlapping content.
      </Text>
      <Text color="strokeGray" variant={"h5"} mt="40px">
        Overlapping content.
      </Text>
      <Text color="strokeGray" variant={"h5"} mt="40px">
        Overlapping content.
      </Text>
      <Text color="strokeGray" variant={"h5"} mt="40px">
        Overlapping content.
      </Text>
    </Grid>
  );
};
