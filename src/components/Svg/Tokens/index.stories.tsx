import Flex from "../../Box/components/Flex";
import Svg from "./../Svg";
import { FC, ReactElement } from "react";

export default {
  title: "Components/Svg/Tokens",
  component: Svg,
  argTypes: {},
};

// @ts-ignore
const modules = import.meta.glob("./components/*.tsx", { eager: true });
const components: { [key: string]: any } = Object.keys(modules).reduce((accum, path) => {
  const file = path.substring(2).replace(".tsx", "");
  return {
    ...accum,
    [file]: modules[path],
  };
}, {});

export const Tokens: FC = (): ReactElement => {
  return (
    <Flex justifyContent="start" alignItems="center" flexWrap="wrap">
      {Object.keys(components).map((file): ReactElement => {
        const Token = components[file].default;
        return (
          <Flex
            key={file}
            flexDirection="column"
            alignItems="center"
            borderRadius="16px"
            title={file}
            width="64px"
            height="64px"
            justifyContent="center"
            py="8px"
            m="4px"
          >
            <Token size={"56px"} />
          </Flex>
        );
      })}
    </Flex>
  );
};
