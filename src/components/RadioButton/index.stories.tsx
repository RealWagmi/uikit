import React, { useState } from "react";
import RadioButton from "./index";
import { Box, Grid } from "../Box";
import { QuestionIcon } from "../Svg/Icons";
import Tooltip from "../Tooltip";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {},
};

export const RadioButtons = () => {
  const [gender, setGender] = useState("male");

  return (
    <Box>
      <Grid gridGap={"20px"}>
        <RadioButton value={gender} onChange={setGender} name="female">
          Female
        </RadioButton>
        <RadioButton value={gender} onChange={setGender} name="male">
          Male
        </RadioButton>
        <RadioButton value={gender} onChange={setGender} name="non-binary">
          Non Binary{" "}
          <Tooltip content={"Some description"}>
            <QuestionIcon size={"20px"} ml={"8px"} color="textGray" />
          </Tooltip>
        </RadioButton>
        <RadioButton value={gender} onChange={setGender} name="other" disabled={true}>
          Other (disabled)
        </RadioButton>
      </Grid>
    </Box>
  );
};
