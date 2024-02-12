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
    <StyledRotatingSVG viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" size={size} {...rest}>
      <path
        d="M98.43 51C100.402 51 102.013 52.6004 101.875 54.5672C101.256 63.3985 98.3461 71.9391 93.405 79.3341C87.801 87.721 79.8359 94.2578 70.5169 98.1179C61.1978 101.978 50.9434 102.988 41.0504 101.02C31.1574 99.0522 22.07 94.1949 14.9376 87.0624C7.80508 79.93 2.9478 70.8426 0.979951 60.9496C-0.987896 51.0566 0.0220746 40.8022 3.88214 31.4831C7.74221 22.1641 14.279 14.199 22.6659 8.59505C30.0609 3.65385 38.6015 0.744035 47.4328 0.124882C49.3996 -0.0130102 51 1.59834 51 3.57V3.57C51 5.54166 49.3989 7.1249 47.4338 7.2852C40.0162 7.89026 32.8532 10.3753 26.6327 14.5317C19.4199 19.3511 13.7983 26.2011 10.4786 34.2155C7.15898 42.2299 6.29041 51.0487 7.98276 59.5567C9.6751 68.0647 13.8524 75.8798 19.9863 82.0137C26.1202 88.1476 33.9353 92.3249 42.4433 94.0172C50.9513 95.7096 59.7701 94.841 67.7845 91.5214C75.7989 88.2017 82.6489 82.5801 87.4683 75.3673C91.6247 69.1468 94.1097 61.9838 94.7148 54.5662C94.8751 52.6011 96.4583 51 98.43 51V51Z"
        fill={`url(#${id})`}
      />
      <defs>
        <linearGradient id={id} x1="48" y1="5.03309e-06" x2="114" y2="16.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5C9CC0" />
          <stop offset="1" stopColor="#5C9CC0" stopOpacity="0" />
        </linearGradient>
      </defs>
    </StyledRotatingSVG>
  );
}
