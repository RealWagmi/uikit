import { Box, Grid } from "../Box";
import { memo } from "react";
import { useTheme } from "styled-components";
import { Text } from "../Text";

function ColorsList() {
  const theme = useTheme();
  return (
    <Grid width={"280px"} gap={"16px"}>
      {Object.entries(theme.colors).map(([key, value], i) => (
        <Grid key={i} gridTemplateColumns={"100px auto"} p={"4px"} gap={"8px"} alignItems={"center"}>
          <Box bg={key} py={"8px"} borderRadius={"4px"}>
            <Text textAlign={"center"} style={{ textShadow: "#000000 0px 1px 2px" }}>
              {value}
            </Text>
          </Box>
          <Text>{key}</Text>
        </Grid>
      ))}
    </Grid>
  );
}

export default memo(ColorsList);
