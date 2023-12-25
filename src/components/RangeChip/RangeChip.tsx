import { memo, ReactNode, useMemo } from "react";
import { statuses } from "./types";
import styled from "styled-components";
import { layout, space, variant, LayoutProps, SpaceProps } from "styled-system";
import { getStatusPointVariants, getStatusVariants } from "./theme";

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
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 12px;
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

  return (
    <RangeChipWrap variant={variant} {...props}>
      <RangeChipPoint variant={variant} />
      {label}
    </RangeChipWrap>
  );
}

export default memo(RangeChip);
