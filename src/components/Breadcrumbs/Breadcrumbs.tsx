import { ArrowLeftIcon } from "../Svg";
import { Text } from "../Text";
import { BreadcrumbsWrapper } from "./styles";
import { IBreadcrumbsProps } from "./types";
import { NavLink } from "react-router-dom";

export default function ({ label, to }: IBreadcrumbsProps) {
  return (
    <NavLink to={to}>
      <BreadcrumbsWrapper>
        <ArrowLeftIcon size={"16px"} mr={1} color="darkGray" />
        <Text variant="body-2" color="darkGray">
          {label}
        </Text>
      </BreadcrumbsWrapper>
    </NavLink>
  );
}
