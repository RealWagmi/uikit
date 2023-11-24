import { FC, PropsWithChildren, ReactElement } from "react";
import {
  Grid as GridComponent,
  Box as BoxComponent,
  Flex as FlexComponent,
  Row as RowComponent,
  RowBetween as RowBetweenComponent,
  AutoRow as AutoRowComponent,
  RowFixed as RowFixedComponent,
} from "./index";

export default {
  title: "Components/Base",
  component: BoxComponent,
  argTypes: {}
};

export const Box: FC<PropsWithChildren> = () => {
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

export const Flex: FC<PropsWithChildren> = () => {
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

export const Grid: FC<PropsWithChildren> = () => {
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

export const Row: FC<PropsWithChildren> = (): ReactElement => {
  return (
    <BoxComponent>
      <p>Based on the Box component. Extended by IRowProps.</p>
      <RowComponent gap="20px" mt={20}>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "pink" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "rebeccapurple" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "yellowgreen" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "blanchedalmond" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "darkolivegreen" }}></BoxComponent>
      </RowComponent>
    </BoxComponent>
  );
};

export const RowBetween: FC<PropsWithChildren> = (): ReactElement => {
  return (
    <BoxComponent>
      <p>Based on the Row component. Static justify value (space-between).</p>
      <RowBetweenComponent gap="20px" mt={20}>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "pink" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "rebeccapurple" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "yellowgreen" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "blanchedalmond" }}></BoxComponent>
      </RowBetweenComponent>
    </BoxComponent>
  );
};

export const AutoRow: FC<PropsWithChildren> = (): ReactElement => {
  return (
    <BoxComponent>
      <p style={{ marginBottom: 20 }}>Based on the Row component. With marge based on gap value.</p>
      <AutoRowComponent gap="20px">
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "pink" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "rebeccapurple" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "yellowgreen" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "blanchedalmond" }}></BoxComponent>
      </AutoRowComponent>
    </BoxComponent>
  );
};

export const RowFixed: FC<PropsWithChildren> = (): ReactElement => {
  return (
    <BoxComponent>
      <p style={{ marginBottom: 40 }}>Based on the Row component. Component will use the available space, but never more than "max-content" and marge based on gap</p>
      <RowFixedComponent gap="20px">
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "pink" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "rebeccapurple" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "yellowgreen" }}></BoxComponent>
        <BoxComponent style={{ width: 250, height: 250, backgroundColor: "blanchedalmond" }}></BoxComponent>
      </RowFixedComponent>
    </BoxComponent>
  );
};