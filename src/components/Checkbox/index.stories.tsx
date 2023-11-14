import React, { useState } from "react";
import Checkbox from "./index";
import { Box } from "../Box";
import Text from "../Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
};

export const AppCheckbox = () => {
  const [value, setValue] = useState(false);
  const [value1, setValue1] = useState(false);

  return (
    <Box>
      <Text variant={"h5"} m="10px 0 20px">
        Default
      </Text>
      <Checkbox value={value} onChange={setValue} />
      <Text variant={"h5"} m="40px 0 20px">
        Disabled
      </Text>
      <Checkbox disabled={true} />
      <Checkbox disabled={true} value={true} ml={"8px"} />
      <Text variant={"h5"} m="40px 0 20px">
        With Label
      </Text>
      <label style={{ cursor: "pointer", display: "flex" }}>
        <Text mr={"8px"}>Some Label</Text>
        <Checkbox value={value1} onChange={setValue1} />
      </label>
    </Box>
  );
};
