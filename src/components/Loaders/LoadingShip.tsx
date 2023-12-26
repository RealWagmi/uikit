import styled from "styled-components";
import { memo } from "react";
import shipLoader from "./../../assets/images/ship-loader.gif";

import { layout, LayoutProps, space, SpaceProps } from "styled-system";

type LoadingShipProps = LayoutProps & SpaceProps & {};

const LoadingShipImg = styled.img<LoadingShipProps>`
  ${space}
  ${layout}
`;

function LoadingShip({ width = "120px", ...props }: LoadingShipProps) {
  return <LoadingShipImg src={shipLoader} {...props} width={width} alt={""} />;
}

export default memo(LoadingShip);
