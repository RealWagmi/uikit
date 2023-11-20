import React, { useEffect, useState } from "react";
import Button from "./index";
import { BrowserRouter } from "react-router-dom";
import { Box, Grid } from "../Box";
import Text from "../Text";
import { InfoIcon, QuestionIcon } from "../Svg/Icons";
import Tooltip from "../Tooltip";

export default {
  title: "Components/Buttons",
  component: Button,
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
          <Button>Button</Button>
        </Box>
        <Box>
          <Button variant={"outlined"}>Button</Button>
        </Box>
        <Box>
          <Button variant={"text"}>Button</Button>
        </Box>
        <Box>
          <Button disabled={true}>Button</Button>
        </Box>
        <Box>
          <Button variant={"outlined"} disabled={true}>
            Button
          </Button>
        </Box>
        <Box>
          <Button variant={"text"} disabled={true}>
            Button
          </Button>
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
          <Button scale={"small"}>Button</Button>
        </Box>
        <Box>
          <Button scale={"small"} variant={"outlined"}>
            Button
          </Button>
        </Box>
        <Box>
          <Button scale={"small"} variant={"text"}>
            Button
          </Button>
        </Box>
        <Box>
          <Button scale={"small"} disabled={true}>
            Button
          </Button>
        </Box>
        <Box>
          <Button scale={"small"} variant={"outlined"} disabled={true}>
            Button
          </Button>
        </Box>
        <Box>
          <Button scale={"small"} variant={"text"} disabled={true}>
            Button
          </Button>
        </Box>
      </Grid>
      <Text variant={"h5"} m="40px 0 20px">
        Error Button
      </Text>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="20px">
        <Box>
          <Button color={"error"}>Button</Button>
        </Box>
        <Box>
          <Button color={"error"} variant={"outlined"}>
            Button
          </Button>
        </Box>
        <Box>
          <Button color={"error"} variant={"text"}>
            Button
          </Button>
        </Box>
        <Box>
          <Button disabled color={"error"}>Button</Button>
        </Box>
        <Box>
          <Button disabled color={"error"} variant={"outlined"}>
            Button
          </Button>
        </Box>
        <Box>
          <Button disabled color={"error"} variant={"text"}>
            Button
          </Button>
        </Box>
      </Grid>
      <Text variant={"h5"} m="40px 0 20px">
        Link Button
      </Text>
      <Box>
        <Button to={"https://docs.popsicle.finance/"} target={"_blank"} width={"50%"}>
          Button
        </Button>
      </Box>
      <Text variant={"h5"} m="40px 0 20px">
        With Start/End components
      </Text>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="20px">
        <Button startIcon={<InfoIcon size={"16px"} />}>Button</Button>
        <Button endIcon={<QuestionIcon size={"16px"} />} variant={"outlined"}>
          Button
        </Button>
        <Button
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
        </Button>
      </Grid>

      <Text variant={"h5"} m="40px 0 20px">
        With Loader
      </Text>

      <Button
        width={"50%"}
        onClick={() => {
          setLoading(true);
        }}
        loading={loading}
        variant={"outlined"}
      >
        Click here
      </Button>
    </BrowserRouter>
  );
};
