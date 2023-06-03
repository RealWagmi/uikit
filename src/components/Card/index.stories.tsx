import React from "react";
import CardComponent from "./index";

export default {
  title: "Components/Primitives",
  component: CardComponent,
  argTypes: {},
};

export const Card: React.FC<React.PropsWithChildren> = () => {
  return <CardComponent>Some Content</CardComponent>;
};

export const BlueCard: React.FC<React.PropsWithChildren> = () => {
  return <CardComponent variant={"blue"}>Blue Card</CardComponent>;
};

export const DarkGrayCard: React.FC<React.PropsWithChildren> = () => {
  return <CardComponent variant={"dark-gray"}>DarkGray Card</CardComponent>;
};

export const GrayCard: React.FC<React.PropsWithChildren> = () => {
  return <CardComponent variant={"gray"}>Gray Card</CardComponent>;
};

export const LightCard: React.FC<React.PropsWithChildren> = () => {
  return <CardComponent variant={"light"}>Light Card</CardComponent>;
};

export const OutlineCard: React.FC<React.PropsWithChildren> = () => {
  return <CardComponent variant={"outline"}>Outline Card</CardComponent>;
};

export const YellowCard: React.FC<React.PropsWithChildren> = () => {
  return <CardComponent variant={"yellow"}>Yellow Card</CardComponent>;
};
