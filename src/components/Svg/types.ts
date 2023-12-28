import { SVGAttributes } from "react";
import { SpaceProps } from "styled-system";
import { ThemeColors } from "../../theme/types";

export type SvgProps = SVGAttributes<HTMLOrSVGElement> &
  SpaceProps & {
    color?: keyof ThemeColors | string;
    size?: string;
  };
