import React from "react";
import {ButtonLight as ButtonLightComponent} from "./index";

export default {
  title: "Components/Button",
  component: ButtonLightComponent,
  argTypes: {},
};

export const ButtonLight: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <ButtonLightComponent>Button Light</ButtonLightComponent>
    </div>
  );
};