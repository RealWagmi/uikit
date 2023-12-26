import React from "react";
import LoadingSpinnerComponent from "./LoadingSpinner";
import LoadingBubbleComponent from "./LoadingBubble";
import LoadingShipComponent from "./LoadingShip";
import { Flex, Grid } from "../Box";
import { Text } from "../Text";

export default {
  title: "Components/Loaders",
  component: LoadingSpinnerComponent,
  argTypes: {},
};

export const LoadingSpinner: React.FC<React.PropsWithChildren> = () => {
  return <LoadingSpinnerComponent />;
};

export const LoadingBubble: React.FC<React.PropsWithChildren> = () => {
  return <LoadingBubbleComponent height={"140px"} />;
};

export const LoadingShip: React.FC<React.PropsWithChildren> = () => {
  return (
    <Grid gridGap={"24px"}>
      <Flex flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
        <Text variant={"h5"} m="40px 0 20px">
          Default width (120px)
        </Text>
        <LoadingShipComponent />
      </Flex>
      <Flex flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
        <Text variant={"h5"} m="40px 0 20px">
          240px
        </Text>
        <LoadingShipComponent width={"240px"} />
      </Flex>
      <Flex flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
        <Text variant={"h5"} m="40px 0 20px">
          400px
        </Text>
        <LoadingShipComponent width={"400px"} />
      </Flex>
    </Grid>
  );
};
