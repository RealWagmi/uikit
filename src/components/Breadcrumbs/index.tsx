import { createContext, ElementType, useContext } from "react";
import { Flex } from "../Box";
import styled from "styled-components";
import { rgba } from "polished";
import { ArrowLeftIcon } from "../Svg";
import Text from "../Text";
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
  border: 0.5px solid ${({ theme }) => rgba(theme.colors.strokeGray, 0.2)};
  background: ${({ theme }) => rgba(theme.colors.strokeGray, 0.08)};
`;

export default function Breadcrumbs({ label, to }: IProps) {
  const { linkComponent } = useContext(MenuContext);
  return (
    <BreadcrumbsWrap as={linkComponent} href={to}>
      <ArrowLeftIcon size={"16px"} mr={1} color="darkGray" />
      <Text variant="body-2" color="darkGray">
        {label}
      </Text>
    </BreadcrumbsWrap>
  );
}
