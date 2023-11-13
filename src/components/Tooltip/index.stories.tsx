import React from "react";
import TooltipComponent from "./index";
import { InfoIcon, QuestionIcon } from "../Svg";
import { Flex } from "../Box";
import Text from "../Text";

export default {
  title: "Components/Tooltip",
  component: TooltipComponent,
  argTypes: {},
};

export const Tooltip = () => {
  return (
    <Flex flexDirection="column" justifyContent="space-between" minHeight="calc(100vh - 32px)">
      <Flex justifyContent="space-between">
        <TooltipComponent content={"Simple Text"}>
          <QuestionIcon color="strokeGray" />
        </TooltipComponent>

        <TooltipComponent
          content={
            <>
              Simple
              <br />
              Text
              <br />
              Simple
              <br />
              Text
              <br />
              Simple
              <br />
              Text
              <br />
              Simple
              <br />
              Text
              <br />
              Simple
              <br />
              Text
            </>
          }
        >
          <Text>Some Label</Text>
        </TooltipComponent>
      </Flex>
      <Flex justifyContent="space-between">
        <TooltipComponent content={"Simple Text"}>
          <QuestionIcon color="strokeGray" />
        </TooltipComponent>

        <TooltipComponent
          content={
            <>
              Simple
              <br />
              Text
              <br />
              Simple
              <br />
              Text
              <br />
              Simple
              <br />
              Text
              <br />
              Simple
              <br />
              Text
              <br />
              Simple
              <br />
              Text
            </>
          }
        >
          <InfoIcon color="strokeGray" />
        </TooltipComponent>
      </Flex>
    </Flex>
  );
};
