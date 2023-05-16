import React from "react";
import BoxComponent from "./Box";
export default {
  title: "Components/Primitives",
  component: BoxComponent,
  argTypes: {},
};

export const Box: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <BoxComponent as="p">
       Default Box Component
      </BoxComponent>
    </div>
  );
};