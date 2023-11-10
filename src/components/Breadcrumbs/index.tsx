//import { createContext, ElementType, useContext } from "react";
import { Flex } from "../Box";
//export const MenuContext = createContext<{ linkComponent: ElementType }>({ linkComponent: "a" });

interface BreadcrumbsProps {
  label: string;
  to: string;
}

export default function Breadcrumbs({ label }: BreadcrumbsProps) {
  // const { linkComponent } = useContext(MenuContext);
  return <Flex>{label}</Flex>;
}
