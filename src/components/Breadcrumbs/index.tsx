import { createContext, ElementType, useContext } from "react";
import { Flex } from "../Box";
import styled from "styled-components";
import { rgba } from "polished";
import { ArrowLeftIcon } from "../Svg";
import ThemedText from "../ThemedText";
export const MenuContext = createContext<{ linkComponent: ElementType }>({ linkComponent: "a" });

interface IProps {
  label: string;
  to: string;
}

const BreadcrumbsWrap = styled(Flex)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2px 16px;
  border-radius: 12px;
  min-width: 89px;
  text-decoration: none;
  color: #7b8187;
  border: 0.5px solid ${rgba("#616971", 0.2)};
  background: ${rgba("#616971", 0.08)};
  font-family: Lexend Deca, sans-serif;
  font-size: 14px;
`;

export default function Breadcrumbs({ label, to }: IProps) {
  const { linkComponent } = useContext(MenuContext);
  return (
    <BreadcrumbsWrap as={linkComponent} href={to}>
      <ArrowLeftIcon width={16} height={16} mr={1} color="textDarkGray" />
      <ThemedText variant="body-2" color="textDarkGray">
        {label}
      </ThemedText>
    </BreadcrumbsWrap>
  );
}
