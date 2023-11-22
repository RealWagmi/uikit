import React from "react";
import TextComponent from "./Text";
import { Grid } from "../Box";

export default {
  title: "Components/Text",
  component: TextComponent,
  argTypes: {},
};

export const Text: React.FC<React.PropsWithChildren> = () => {
  return (
    <Grid gridRowGap={20}>
      <TextComponent variant="h1">Headline/1/Light</TextComponent>
      <TextComponent variant="h2">Headline/2/Light</TextComponent>
      <TextComponent variant="h3">Headline/3/Regular</TextComponent>
      <TextComponent variant="h4">Headline/4/Regular</TextComponent>
      <TextComponent variant="h5">Headline/5/Regular</TextComponent>
      <TextComponent variant="h6">Headline/6/Medium</TextComponent>
      <TextComponent variant="subtitle-1">Subtitle 1/Regular</TextComponent>
      <TextComponent variant="subtitle-2">Subtitle 2/Regular</TextComponent>
      <TextComponent variant="body-1">Body Text/1/Bold</TextComponent>
      <TextComponent variant="body-2">Body Text/2/Bold</TextComponent>
      <TextComponent variant="button">Button/Regular</TextComponent>
      <TextComponent variant="caption">Caption/Regular</TextComponent>
      <TextComponent variant="overline">Overline/Regular</TextComponent>

      <TextComponent color="red">Red text</TextComponent>
    </Grid>
  );
};
