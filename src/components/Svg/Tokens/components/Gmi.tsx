import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Token: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <circle cx="16" cy="16" r="16" fill="#030D1B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 1.10345C7.77287 1.10345 1.10345 7.77287 1.10345 16C1.10345 24.2271 7.77287 30.8966 16 30.8966C24.2271 30.8966 30.8966 24.2271 30.8966 16C30.8966 7.77287 24.2271 1.10345 16 1.10345ZM0 16C0 7.16345 7.16345 0 16 0C24.8365 0 32 7.16345 32 16C32 24.8365 24.8365 32 16 32C7.16345 32 0 24.8365 0 16Z" fill="url(#paint0_linear_2855_61282)"/>
    <path d="M23.2827 10.0853L20.0656 14.6512C18.7239 14.0016 17.484 13.6764 16.346 13.6764C15.5892 13.6764 14.983 13.8739 14.5257 14.2679C14.0684 14.6628 13.8397 15.1847 13.8397 15.8352C13.8397 17.0691 14.6418 17.6857 16.2477 17.6857V15.308H22.9176V23.4954C20.2207 23.6482 18.395 23.7241 17.4414 23.7241C13.7573 23.7241 11.1987 22.9352 9.76471 21.3563C8.33075 19.7783 7.61377 17.9376 7.61377 15.8352C7.61377 14.3894 7.94787 13.0634 8.61522 11.8554C9.28257 10.6482 10.2468 9.71358 11.5062 9.04969C12.7656 8.38669 14.2571 8.05518 15.9809 8.05518C17.1915 8.05518 18.4447 8.23301 19.7404 8.58774C21.0361 8.94247 22.2175 9.44195 23.2827 10.0853Z" fill="url(#paint1_linear_2855_61282)"/>
    <defs>
      <linearGradient id="paint0_linear_2855_61282" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DDC194"/>
        <stop offset="1" stopColor="#9A7D49"/>
      </linearGradient>
      <linearGradient id="paint1_linear_2855_61282" x1="7.61377" y1="8.05518" x2="23.2827" y2="23.7241" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DDC194"/>
        <stop offset="1" stopColor="#9A7D49"/>
      </linearGradient>
    </defs>
  </Svg>
);

export default memo(Token);