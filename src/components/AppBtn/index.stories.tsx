import { useEffect, useState } from "react";
import AppBtnComponent from "./index";
import { BrowserRouter } from "react-router-dom";
import { Box, Grid } from "../Box";
import Text from "../Text";
import { InfoIcon, QuestionIcon } from "../Svg";
import Tooltip from "../Tooltip";

export default {
  title: "Components/Buttons",
  component: AppBtnComponent,
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
          <AppBtnComponent>Button</AppBtnComponent>
        </Box>
        <Box>
          <AppBtnComponent variant={"outlined"}>Button</AppBtnComponent>
        </Box>
        <Box>
          <AppBtnComponent variant={"text"}>Button</AppBtnComponent>
        </Box>
        <Box>
          <AppBtnComponent disabled={true}>Button</AppBtnComponent>
        </Box>
        <Box>
          <AppBtnComponent variant={"outlined"} disabled={true}>
            Button
          </AppBtnComponent>
        </Box>
        <Box>
          <AppBtnComponent variant={"text"} disabled={true}>
            Button
          </AppBtnComponent>
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
          <AppBtnComponent scale={"small"}>Button</AppBtnComponent>
        </Box>
        <Box>
          <AppBtnComponent scale={"small"} variant={"outlined"}>
            Button
          </AppBtnComponent>
        </Box>
        <Box>
          <AppBtnComponent scale={"small"} variant={"text"}>
            Button
          </AppBtnComponent>
        </Box>
        <Box>
          <AppBtnComponent scale={"small"} disabled={true}>
            Button
          </AppBtnComponent>
        </Box>
        <Box>
          <AppBtnComponent scale={"small"} variant={"outlined"} disabled={true}>
            Button
          </AppBtnComponent>
        </Box>
        <Box>
          <AppBtnComponent scale={"small"} variant={"text"} disabled={true}>
            Button
          </AppBtnComponent>
        </Box>
      </Grid>
      <Text variant={"h5"} m="40px 0 20px">
        Error Button
      </Text>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="20px">
        <Box>
          <AppBtnComponent color={"error"}>Button</AppBtnComponent>
        </Box>
        <Box>
          <AppBtnComponent color={"error"} variant={"outlined"}>
            Button
          </AppBtnComponent>
        </Box>
        <Box>
          <AppBtnComponent color={"error"} variant={"text"}>
            Button
          </AppBtnComponent>
        </Box>
      </Grid>
      <Text variant={"h5"} m="40px 0 20px">
        Link Button
      </Text>
      <Box>
        <AppBtnComponent to={"https://docs.popsicle.finance/"} target={"_blank"} width={"50%"}>
          Button
        </AppBtnComponent>
      </Box>
      <Text variant={"h5"} m="40px 0 20px">
        With Start/End components
      </Text>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="20px">
        <AppBtnComponent startIcon={<InfoIcon size={"16px"} />}>Button</AppBtnComponent>
        <AppBtnComponent endIcon={<QuestionIcon size={"16px"} />} variant={"outlined"}>
          Button
        </AppBtnComponent>
        <AppBtnComponent
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
        </AppBtnComponent>
      </Grid>

      <Text variant={"h5"} m="40px 0 20px">
        With Loader
      </Text>

      <AppBtnComponent
        width={"50%"}
        onClick={() => {
          setLoading(true);
        }}
        loading={loading}
        variant={"outlined"}
      >
        Click here
      </AppBtnComponent>
    </BrowserRouter>
  );
};
