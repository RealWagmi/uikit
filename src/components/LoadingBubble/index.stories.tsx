import React from "react";
import LoadingBubbleComponent from "./index";

export default {
  title: "Components/Loaders",
  component: LoadingBubbleComponent,
  argTypes: {},
};

export const LoadingBubble: React.FC<React.PropsWithChildren> = () => {
  return <LoadingBubbleComponent />;
};
