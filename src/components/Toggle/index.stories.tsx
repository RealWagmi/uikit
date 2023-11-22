import React, { useState } from "react";
import ToggleComponent from "./Toggle";
import { Box } from "../Box";
import { Text } from "../Text";

export default {
  title: "Components/Toggle",
  component: ToggleComponent,
  argTypes: {},
};

export const Toggle = () => {
  const [value, setValue] = useState(false);
  const [value1, setValue1] = useState(false);

  return (
    <Box>
      <Text variant={"h5"} m="10px 0 20px">
        Default
      </Text>
      <ToggleComponent value={value} onChange={setValue} />
      <Text variant={"h5"} m="40px 0 20px">
        Disabled
      </Text>
      <ToggleComponent disabled={true} />
      <ToggleComponent disabled={true} value={true} ml={"8px"} />
      <Text variant={"h5"} m="40px 0 20px">
        With Label
      </Text>
      <label style={{ cursor: "pointer", display: "flex" }}>
        <Text mr={"8px"}>Some Label</Text>
        <ToggleComponent value={value1} onChange={setValue1} />
      </label>
    </Box>
  );
};
