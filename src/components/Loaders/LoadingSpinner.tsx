import { StyledRotatingSVG } from "./shared";
import { v4 as uuid } from "uuid";

/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */

type IProps = {
  size?: string;
  stroke?: string;
  strokeWidth?: number;
  duration?: string;
  [k: string]: any;
};

export default function LoadingSpinner({ size = "16px", stroke, strokeWidth, ...rest }: IProps) {
  const id = uuid();
  return (
    <StyledRotatingSVG viewBox="0 0 92 98" fill="none" xmlns="http://www.w3.org/2000/svg" size={size} {...rest}>
      <path
        d="M47.1955 92.75C24.0296 92.75 5.25 73.1625 5.25 49C5.25 24.8375 24.0296 5.25 47.1955 5.25C65.1965 5.25 80.549 17.0771 86.5 33.6875"
        stroke={`url(#${id})`}
        strokeWidth={strokeWidth || "9.375"}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id={id} x1="88.8897" y1="31.9861" x2="44.9096" y2="92.043" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5D93B2" />
          <stop offset="1" stopColor="#5D93B2" stopOpacity="0.38" />
        </linearGradient>
      </defs>
    </StyledRotatingSVG>
  );
}
