import { ArrowLeftIcon } from "../Svg";
import { Text } from "../Text";
import { BreadcrumbsWrapper } from "./styles";
import { IBreadcrumbsProps } from "./types";
import { memo } from "react";

function Breadcrumbs({ label, to }: IBreadcrumbsProps) {
  return (
    <BreadcrumbsWrapper href={to}>
      <ArrowLeftIcon size={"16px"} mr={1} color="darkGray" />
      <Text variant="body-2" color="darkGray">
        {label}
      </Text>
    </BreadcrumbsWrapper>
  );
}

export default memo(Breadcrumbs);
