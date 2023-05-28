import { ArrowLeftGray } from "../Svg";
import { createContext, ElementType, useContext } from "react";
export const MenuContext = createContext<{ linkComponent: ElementType }>({ linkComponent: "a" });

import { ArrowWrapper, Divider, LinkText, Text, Wrapper } from "./styles";
import { Flex } from "../Box";
import { useTheme } from "styled-components";

interface ILink {
  lable: string;
  link: string;
}

interface IProps {
  links: ILink[];
}

export default function Breadcrumbs({ links }: IProps) {
  const { linkComponent } = useContext(MenuContext);
  const theme = useTheme();
  return (
    <Wrapper>
      <ArrowWrapper>
        <ArrowLeftGray stroke={theme.breadcrumbs.color} />
      </ArrowWrapper>
      {links.map(({ lable, link }, index) => (
        <Flex key={index}>
          <LinkText as={linkComponent} href={link}>
            <Text>{lable}</Text>
          </LinkText>
          {index !== links.length - 1 && <Divider>/</Divider>}
        </Flex>
      ))}
    </Wrapper>
  );
}
