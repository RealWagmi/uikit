import Flex from "../Box/Flex";
import Svg from "./Svg";
import React from "react";

export default {
  title: "Components/Svg Icons",
  component: Svg,
  argTypes: {},
};

// @ts-ignore
const modules = import.meta.glob("./Icons/*.tsx", { eager: true });
const components: { [key: string]: any } = Object.keys(modules).reduce((accum, path) => {
  const file = path.substring(2).replace(".tsx", "");
  return {
    ...accum,
    [file]: modules[path],
  };
}, {});

export const Icons: React.FC<React.PropsWithChildren> = () => {
  return (
    <Flex justifyContent="start" alignItems="center" flexWrap="wrap">
      {Object.keys(components).map((file) => {
        const Icon = components[file].default;
        return (
          <Flex
            key={file}
            flexDirection="column"
            alignItems="center"
            backgroundColor="#1F242E"
            borderRadius="16px"
            title={file}
            width="128px"
            height="96px"
            justifyContent="center"
            py="8px"
            m="4px"
          >
            <Flex alignItems="center" justifyContent="center" style={{ flex: 1 }} height="100%">
              <Icon size={"48px"} color="darkGray" />
              <Icon color="darkGray" ml="4px" />
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
