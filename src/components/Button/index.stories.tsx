import React, { useEffect, useState } from "react";
import ButtonComponent from "./Button";
import { BrowserRouter } from "react-router-dom";
import { Box, Grid } from "../Box";
import { Text } from "../Text";
import { InfoIcon, QuestionIcon } from "../Svg/Icons";
import { Tooltip } from "../Tooltip";

export default {
  title: "Components/Buttons",
  component: ButtonComponent,
  argTypes: {},
};

export const Buttons = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [loading]);

  return (
    <BrowserRouter>
      <Text variant={"h5"} m="10px 0 20px">
        Default
      </Text>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="20px">
        <Text>Primary</Text>
        <Text>Outlined</Text>
        <Text>Text</Text>
        <Box>
          <ButtonComponent>Button</ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent variant={"outlined"}>Button</ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent variant={"text"}>Button</ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent disabled={true}>Button</ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent variant={"outlined"} disabled={true}>
            Button
          </ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent variant={"text"} disabled={true}>
            Button
          </ButtonComponent>
        </Box>
      </Grid>
      <Text variant={"h5"} m="40px 0 20px">
        Small
      </Text>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="20px">
        <Text>Primary</Text>
        <Text>Outlined</Text>
        <Text>Text</Text>
        <Box>
          <ButtonComponent scale={"small"}>Button</ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent scale={"small"} variant={"outlined"}>
            Button
          </ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent scale={"small"} variant={"text"}>
            Button
          </ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent scale={"small"} disabled={true}>
            Button
          </ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent scale={"small"} variant={"outlined"} disabled={true}>
            Button
          </ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent scale={"small"} variant={"text"} disabled={true}>
            Button
          </ButtonComponent>
        </Box>
      </Grid>
      <Text variant={"h5"} m="40px 0 20px">
        Error Button
      </Text>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="20px">
        <Box>
          <ButtonComponent color={"error"}>Button</ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent color={"error"} variant={"outlined"}>
            Button
          </ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent color={"error"} variant={"text"}>
            Button
          </ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent disabled color={"error"}>Button</ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent disabled color={"error"} variant={"outlined"}>
            Button
          </ButtonComponent>
        </Box>
        <Box>
          <ButtonComponent disabled color={"error"} variant={"text"}>
            Button
          </ButtonComponent>
        </Box>
      </Grid>
      <Text variant={"h5"} m="40px 0 20px">
        Link Button
      </Text>
      <Box>
        <ButtonComponent to={"https://docs.popsicle.finance/"} target={"_blank"} width={"50%"}>
          Button
        </ButtonComponent>
      </Box>
      <Text variant={"h5"} m="40px 0 20px">
        With Start/End components
      </Text>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="20px">
        <ButtonComponent startIcon={<InfoIcon size={"16px"} />}>Button</ButtonComponent>
        <ButtonComponent endIcon={<QuestionIcon size={"16px"} />} variant={"outlined"}>
          Button
        </ButtonComponent>
        <ButtonComponent
          color={"error"}
          disabled={true}
          variant={"text"}
          startIcon={
            <Tooltip content={"Simple text"}>
              <InfoIcon size={"16px"} />
            </Tooltip>
          }
          endIcon={
            <Tooltip
              content={
                <>
                  Simple Text
                  <br />
                  Simple Text
                  <br />
                  Simple Text
                  <br />
                  Simple Text
                  <br />
                </>
              }
            >
              <QuestionIcon size={"16px"} />
            </Tooltip>
          }
        >
          With Tooltips
        </ButtonComponent>
      </Grid>

      <Text variant={"h5"} m="40px 0 20px">
        With Loader
      </Text>

      <ButtonComponent
        width={"50%"}
        onClick={() => {
          setLoading(true);
        }}
        loading={loading}
        variant={"outlined"}
      >
        Click here
      </ButtonComponent>
    </BrowserRouter>
  );
};
