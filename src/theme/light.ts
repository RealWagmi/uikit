import { DefaultTheme } from "styled-components";
import { lightColors } from "./colors";
import { light as DarkLoadingSpinner } from "../components/LoadingSpinner/theme";
import { light as BlueCard } from "../components/Card/BlueCard/theme";
import { light as DarkGrayCard } from "../components/Card/DarkGrayCard/theme";
import { light as GrayCard } from "../components/Card/GrayCard/theme";
import { light as LightCard } from "../components/Card/LightCard/theme";
import { light as OutlineCard } from "../components/Card/OutlineCard/theme";
import { light as YellowCard } from "../components/Card/YellowCard/theme";
import { light as Breadcrumbs } from "../components/Breadcrumbs/theme";
import { light as Table } from "../components/Table/theme";

const lightTheme: DefaultTheme = {
  colors: lightColors,

  spinner: DarkLoadingSpinner,
  blueCard: BlueCard,
  darkGrayCard: DarkGrayCard,
  grayCard: GrayCard,
  lightCard: LightCard,
  outlineCard: OutlineCard,
  yellowCard: YellowCard,
  breadcrumbs: Breadcrumbs,
  table: Table
};

export default lightTheme;
