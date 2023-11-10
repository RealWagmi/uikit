import { typographies } from "./types";
import { TextProps as TextPropsOriginal } from "rebass";
export const typographyVariants: { [key: string]: TextPropsOriginal } = {
  [typographies.H_1]: {
    fontSize: 97,
    fontWeight: 600,
    lineHeight: "90px",
    letterSpacing: "-1.5px",
  },
  [typographies.H_2]: {
    fontSize: 61,
    fontWeight: 600,
    lineHeight: "80px",
    letterSpacing: "-0.5px",
  },
  [typographies.H_3]: {
    fontSize: 48,
    fontWeight: 400,
    lineHeight: "60px",
  },
  [typographies.H_4]: {
    fontSize: 34,
    fontWeight: 400,
    lineHeight: "42.5px",
    letterSpacing: "0.25px",
  },
  [typographies.H_5]: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: "30px",
  },
  [typographies.H_6]: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "25px",
    letterSpacing: "0.15px",
  },
  [typographies.SUBTITLE_1]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0.15px",
  },
  [typographies.SUBTITLE_2]: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "17.5px",
    letterSpacing: "0.1px",
  },
  [typographies.BODY_1]: {
    fontSize: 16,
    fontWeight: 300,
    lineHeight: "20px",
    letterSpacing: "0.5px",
  },
  [typographies.BODY_2]: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: "17.5px",
    letterSpacing: "0.25px",
  },
  [typographies.BTN]: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "17.5px",
    letterSpacing: "0.25px",
  },
  [typographies.CAPTION]: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "15px",
    letterSpacing: "0.4px",
  },
  [typographies.OVERLINE]: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "15px",
    letterSpacing: "1.5px",
  },
};
