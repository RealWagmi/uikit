import React, { useState } from "react";
import AppRadioBtnComponent from "./index";
import { Box, Grid } from "../Box";
import { QuestionIcon } from "../Svg";
import Tooltip from "../Tooltip";

export default {
  title: "Components/AppRadioBtn",
  component: AppRadioBtnComponent,
  argTypes: {},
};

export const AppRadioBtn = () => {
  const [gender, setGender] = useState("male");

  return (
    <Box>
      <Grid gridGap={"20px"}>
        <AppRadioBtnComponent value={gender} onChange={setGender} name="female">
          Female
        </AppRadioBtnComponent>
        <AppRadioBtnComponent value={gender} onChange={setGender} name="male">
          Male
        </AppRadioBtnComponent>
        <AppRadioBtnComponent value={gender} onChange={setGender} name="non-binary">
          Non Binary{" "}
          <Tooltip content={"Some description"}>
            <QuestionIcon size={"20px"} ml={"8px"} color="textGray" />
          </Tooltip>
        </AppRadioBtnComponent>
        <AppRadioBtnComponent value={gender} onChange={setGender} name="other" disabled={true}>
          Other (disabled)
        </AppRadioBtnComponent>
      </Grid>
    </Box>
  );
};
