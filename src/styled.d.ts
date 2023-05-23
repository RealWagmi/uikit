import "styled-components";
import { UIKitTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends UIKitTheme {}
}
