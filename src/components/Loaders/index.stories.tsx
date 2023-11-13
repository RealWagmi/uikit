import React from "react";
import LoadingSpinnerComponent from "./LoadingSpinner";
import LoadingBubbleComponent from "./LoadingBubble";

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
