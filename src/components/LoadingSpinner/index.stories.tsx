import React from "react";
import LoadingSpinnerComponent from "./index";

export default {
  title: "Components/Loaders",
  component: LoadingSpinnerComponent,
  argTypes: {},
};

export const LoadingSpinner: React.FC<React.PropsWithChildren> = () => {
  return <LoadingSpinnerComponent />;
};
