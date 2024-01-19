import { Box, Grid } from "../Box";
import { memo } from "react";
import { useTheme } from "styled-components";
import { Text } from "../Text";

function ColorsList() {
  const theme = useTheme();
  return (
    <Grid gridTemplateColumns={'repeat(auto-fill, minmax(140px, 1fr))'} gridRowGap={'28px'}>
      {Object.entries(theme.colors).map(([key, value], i) => (
        <Box key={i} p={"4px"}>
          <Box bg={key} py={"8px"} borderRadius={"4px"}>
            <Text textAlign={"center"} style={{ textShadow: "#000000 0px 1px 2px" }}>
              {value}
            </Text>
          </Box>
          <Text mt={'4px'}>{key}</Text>
        </Box>
      ))}
    </Grid>
  );
}

export default memo(ColorsList);
