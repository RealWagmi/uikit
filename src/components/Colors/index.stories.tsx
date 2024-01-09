import React from "react";
import { Box } from "../Box";
import ColorsList from "./ColorsList";
import { Text } from "../Text";

export default {
  title: "Components/Colors",
  component: ColorsList,
  argTypes: {},
};

export const Colors = () => {
  return (
    <Box>
      <Text variant={"h5"} mb="20px">
        Colors
      </Text>
      <ColorsList />
    </Box>
  );
};
