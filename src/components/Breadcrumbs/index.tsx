import { createContext, ElementType, useContext } from "react";
import { ArrowLeftIcon } from "../Svg";
import Text from "../Text";
import { BreadcrumbsWrapper } from "./styles";
import { IBreadcrumbsProps } from './types';

export const MenuContext = createContext<{ linkComponent: ElementType }>({ linkComponent: "a" });

export default function ({ label, to }: IBreadcrumbsProps) {
  const { linkComponent } = useContext(MenuContext);
  return (
    <BreadcrumbsWrapper as={linkComponent} href={to}>
      <ArrowLeftIcon size={"16px"} mr={1} color="darkGray" />
      <Text variant="body-2" color="darkGray">
        {label}
      </Text>
    </BreadcrumbsWrapper>
  );
}
