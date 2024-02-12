import React from "react";
import LoadingSpinnerComponent from "./LoadingSpinner";
import LoadingBubbleComponent from "./LoadingBubble";
import { Flex, Grid } from "../Box";
import { Text } from "../Text";

export default {
  title: "Components/Loaders",
  component: LoadingSpinnerComponent,
  argTypes: {},
};

export const LoadingSpinner: React.FC<React.PropsWithChildren> = () => {
  return (
    <Grid gap={"24px"}>
      <Flex flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
        <Text variant={"h5"} m="40px 0 20px">
          Default size (16px)
        </Text>
        <LoadingSpinnerComponent />
      </Flex>
      <Flex flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
        <Text variant={"h5"} m="40px 0 20px">
          40px
        </Text>
        <LoadingSpinnerComponent size={"140px"} />
      </Flex>
    </Grid>
  );
};

export const LoadingBubble: React.FC<React.PropsWithChildren> = () => {
  return <LoadingBubbleComponent height={"140px"} />;
};
