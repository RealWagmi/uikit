import RangeChipComponent from "./RangeChip";
import React from "react";
import { Box, Grid } from "../Box";

export default {
  title: "Components/RangeChip",
  component: RangeChipComponent,
  argTypes: {},
};

export const RangeChip = () => {
  return (
    <Grid gridTemplateColumns={"repeat(3, 1fr)"} justifyItems={"center"}>
      <Box>
        <RangeChipComponent variant={"in"} />
      </Box>
      <Box>
        <RangeChipComponent variant={"out"} />
      </Box>
      <Box>
        <RangeChipComponent variant={"closed"} />
      </Box>
    </Grid>
  );
};
