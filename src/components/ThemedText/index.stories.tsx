import React from "react";
import ThemedTextComponent from "./index";
import { Grid } from "../Box";

export default {
  title: "Components/ThemedText",
  component: ThemedTextComponent,
  argTypes: {},
};

export const ThemedText: React.FC<React.PropsWithChildren> = () => {
  return (
    <Grid gridRowGap={20}>
      <ThemedTextComponent variant="h1">Headline/1/Light</ThemedTextComponent>
      <ThemedTextComponent variant="h2">Headline/2/Light</ThemedTextComponent>
      <ThemedTextComponent variant="h3">Headline/3/Regular</ThemedTextComponent>
      <ThemedTextComponent variant="h4">Headline/4/Regular</ThemedTextComponent>
      <ThemedTextComponent variant="h5">Headline/5/Regular</ThemedTextComponent>
      <ThemedTextComponent variant="h6">Headline/6/Medium</ThemedTextComponent>
      <ThemedTextComponent variant="subtitle-1">Subtitle 1/Regular</ThemedTextComponent>
      <ThemedTextComponent variant="subtitle-2">Subtitle 2/Regular</ThemedTextComponent>
      <ThemedTextComponent variant="body-1">Body Text/1/Bold</ThemedTextComponent>
      <ThemedTextComponent variant="body-2">Body Text/2/Bold</ThemedTextComponent>
      <ThemedTextComponent variant="button">Button/Regular</ThemedTextComponent>
      <ThemedTextComponent variant="caption">Caption/Regular</ThemedTextComponent>
      <ThemedTextComponent variant="overline">Overline/Regular</ThemedTextComponent>
    </Grid>
  );
};
