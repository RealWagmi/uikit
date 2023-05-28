import {LoadingSpinnerTheme} from "../components/LoadingSpinner/types";
import { ThemeColors } from "./types";

export interface UIKitTheme {
  colors: ThemeColors;

  spinner: LoadingSpinnerTheme
}

export { default as dark } from "./dark";
