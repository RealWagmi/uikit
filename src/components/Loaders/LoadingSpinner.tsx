import { StyledRotatingSVG } from "./shared";

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
  return (
    <StyledRotatingSVG viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" size={size} {...rest}>
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375"
        strokeWidth={strokeWidth ?? "2.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledRotatingSVG>
  );
}
