import React, { useState } from "react";
import RadioButtonComponent from "./RadioButton";
import { Box, Grid } from "../Box";
import { QuestionIcon } from "../Svg/Icons";
import { Tooltip } from "../Tooltip";

export default {
  title: "Components/RadioButton",
  component: RadioButtonComponent,
  argTypes: {},
};

export const RadioButtons = () => {
  const [gender, setGender] = useState("male");

  return (
    <Box>
      <Grid gridGap={"20px"}>
        <RadioButtonComponent value={gender} onChange={setGender} name="female">
          Female
        </RadioButtonComponent>
        <RadioButtonComponent value={gender} onChange={setGender} name="male">
          Male
        </RadioButtonComponent>
        <RadioButtonComponent value={gender} onChange={setGender} name="non-binary">
          Non Binary{" "}
          <Tooltip content={"Some description"}>
            <QuestionIcon size={"20px"} ml={"8px"} color="textGray" />
          </Tooltip>
        </RadioButtonComponent>
        <RadioButtonComponent value={gender} onChange={setGender} name="other" disabled={true}>
          Other (disabled)
        </RadioButtonComponent>
      </Grid>
    </Box>
  );
};
