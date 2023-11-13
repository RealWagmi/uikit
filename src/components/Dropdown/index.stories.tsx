import DropdownComponent from "./index";
import { useState } from "react";
import { Box, Grid } from "../Box";
import Text from "../Text";

export default {
  title: "Components/Dropdown",
  component: DropdownComponent,
  argTypes: {},
};

export const Dropdown = () => {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);
  return (
    <Grid gridTemplateColumns={"repeat(3, 1fr)"} mt={"10px"}>
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
          With long title
        </Text>
        <DropdownComponent
          items={[
            { value: 1, title: "Short" },
            { value: 2, title: "Short" },
            { value: 3, title: "Looooooooooooooooong" },
            { value: 4, title: "Short" },
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
    </Grid>
  );
};
