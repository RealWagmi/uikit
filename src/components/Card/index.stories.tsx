import React from "react";
import CardComponent from "./Card";
import BlueCardComponent from "./BlueCard";
import DarkGrayCardComponent from "./DarkGrayCard";
import GrayCardComponent from "./GrayCard";
import LightCardComponent from "./LightCard";
import OutlineCardComponent from "./OutlineCard";
import YellowCardComponent from "./YellowCard";

export default {
  title: "Components/Primitives",
  component: CardComponent,
  argTypes: {},
};

export const Card: React.FC<React.PropsWithChildren> = () => {
  return (
      <CardComponent >
        Some Content
      </CardComponent>
  );
};

export const BlueCard: React.FC<React.PropsWithChildren> = () => {
  return (
    <BlueCardComponent>
      Blue Card
    </BlueCardComponent>
  );
};

export const DarkGrayCard: React.FC<React.PropsWithChildren> = () => {
  return (
    <DarkGrayCardComponent>
      DarkGray Card
    </DarkGrayCardComponent>
  );
};

export const GrayCard: React.FC<React.PropsWithChildren> = () => {
  return (
    <GrayCardComponent>
      Gray Card
    </GrayCardComponent>
  );
};

export const LightCard: React.FC<React.PropsWithChildren> = () => {
  return (
    <LightCardComponent>
      Light Card
    </LightCardComponent>
  );
};

export const OutlineCard: React.FC<React.PropsWithChildren> = () => {
  return (
    <OutlineCardComponent>
      Outline Card
    </OutlineCardComponent>
  );
};

export const YellowCard: React.FC<React.PropsWithChildren> = () => {
  return (
    <YellowCardComponent>
      Yellow Card
    </YellowCardComponent>
  );
};
