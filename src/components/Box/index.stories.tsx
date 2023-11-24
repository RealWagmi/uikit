import React from "react";
import BoxComponent from "./components/Box";
import FlexComponent from "./components/Flex";
import GridComponent from "./components/Grid";

export default {
  title: "Components/Base",
  component: BoxComponent,
  argTypes: {},
};

export const Box: React.FC<React.PropsWithChildren> = () => {
  return (
    <div style={{ backgroundColor: "#1F242E" }}>
      <BoxComponent as="p">
        Contains background, border, layout, position, and space from{" "}
        <a href="https://styled-system.com/api" target="_blank">
          Styled System&lsquo;s API
        </a>
      </BoxComponent>
    </div>
  );
};

export const Flex: React.FC<React.PropsWithChildren> = () => {
  return (
    <div style={{ backgroundColor: "#1F242E" }}>
      <span>Based on the Box component. You can apply any flexbox properties on the Flex component.</span>
      <a href="https://styled-system.com/api#flexbox" target="_blank">
        List of applicable props
      </a>
      <FlexComponent justifyContent="space-between" mt="40px">
        <span>Left</span>
        <span>right</span>
      </FlexComponent>
      <FlexComponent justifyContent="center" mt="8px">
        <span>center</span>
      </FlexComponent>
    </div>
  );
};

export const Grid: React.FC<React.PropsWithChildren> = () => {
  return (
    <GridComponent
      justifyItems="center"
      alignContent="center"
      gridTemplateColumns="1fr 1fr"
      gridColumnGap="16px"
      style={{ backgroundColor: "#7645D9" }}
    >
      <BoxComponent style={{ backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
      <BoxComponent style={{ backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
    </GridComponent>
  );
};
