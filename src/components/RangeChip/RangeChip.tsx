import { memo, ReactNode, useMemo } from "react";
import { statuses } from "./types";
import styled from "styled-components";
import { layout, space, variant, LayoutProps, SpaceProps } from "styled-system";
import { getStatusPointVariants, getStatusVariants } from "./theme";
import { Flex } from "../Box";
import Tooltip from "../Tooltip/Tooltip";

type RangeChipProps = LayoutProps &
  SpaceProps & {
    variant?: (typeof statuses)[keyof typeof statuses];
    children?: ReactNode;
  };

const RangeChipWrap = styled.div<RangeChipProps>`
  ${({ theme }) =>
    variant({
      prop: "variant",
      variants: getStatusVariants(theme),
    })}

  display: inline-flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 10px;
  border-radius: 6px;

  ${space}
  ${layout}
`;

const RangeChipPoint = styled.div<{ variant: RangeChipProps["variant"] }>`
  ${({ theme }) =>
    variant({
      prop: "variant",
      variants: getStatusPointVariants(theme),
    })}
  display: flex;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  margin-right: 8px;
`;

function RangeChip({ variant, ...props }: RangeChipProps) {
  const label = useMemo(() => {
    switch (variant) {
      case statuses.IN_RANGE:
        return "In range";
      case statuses.OUT_OF_RANGE:
        return "Out of range";
      case statuses.CLOSED:
        return "Closed";
    }
    return "";
  }, [variant]);

  const tooltipContent = useMemo(() => {
    switch (variant) {
      case statuses.IN_RANGE:
        return "The price of this pool is within your selected range. Your position is currently earning fees.";
      case statuses.OUT_OF_RANGE:
        return "The price of this pool is outside of your selected range. Your position is not currently earning fees.";
      case statuses.CLOSED:
        return "Your position has 0 liquidity, and is not earning fees.";
    }
    return "";
  }, [variant]);

  return (
    <RangeChipWrap variant={variant} {...props}>
      <Tooltip content={tooltipContent}>
        <Flex p={"10px 12px"} alignItems={"center"} borderRadius={"inherit"}>
          <RangeChipPoint variant={variant} />
          {label}
        </Flex>
      </Tooltip>
    </RangeChipWrap>
  );
}

export default memo(RangeChip);
