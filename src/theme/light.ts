import { DefaultTheme } from "styled-components";
import { colors } from "./colors";
import { light as DarkLoadingSpinner } from "../components/LoadingSpinner/theme";
import { light as Breadcrumbs } from "../components/Breadcrumbs/theme";
import { light as Table } from "../components/Table/theme";
//Cards
import { light as BlueCard } from "../components/Card/BlueCard/theme";
import { light as DarkGrayCard } from "../components/Card/DarkGrayCard/theme";
import { light as GrayCard } from "../components/Card/GrayCard/theme";
import { light as LightCard } from "../components/Card/LightCard/theme";
import { light as OutlineCard } from "../components/Card/OutlineCard/theme";
import { light as YellowCard } from "../components/Card/YellowCard/theme";
//Buttons
import { light as ButtonConfirmed } from "../components/Button/ButtonConfirmed/theme";
import { light as ButtonError } from "../components/Button/ButtonError/theme";
import { light as ButtonPrimary } from "../components/Button/ButtonPrimary/theme";
import { light as ButtonGray } from "../components/Button/ButtonGray/theme";
import { light as ButtonEmpty } from "../components/Button/ButtonEmpty/theme";
import { light as ButtonLight } from "../components/Button/ButtonLight/theme";
import { light as ButtonOutlined } from "../components/Button/ButtonOutlined/theme";
import { light as ButtonRadioChecked } from "../components/Button/ButtonRadioChecked/theme";
import { light as ButtonSecondary } from "../components/Button/ButtonSecondary/theme";

const lightTheme: DefaultTheme = {
  colors: colors,
  spinner: DarkLoadingSpinner,
  breadcrumbs: Breadcrumbs,
  table: Table,
  //Cards
  blueCard: BlueCard,
  darkGrayCard: DarkGrayCard,
  grayCard: GrayCard,
  lightCard: LightCard,
  outlineCard: OutlineCard,
  yellowCard: YellowCard,
  //Buttons
  buttonConfirmed: ButtonConfirmed,
  buttonError: ButtonError,
  buttonPrimary: ButtonPrimary,
  buttonGray: ButtonGray,
  buttonEmpty: ButtonEmpty,
  buttonLight: ButtonLight,
  buttonOutlined: ButtonOutlined,
  buttonRadioChecked: ButtonRadioChecked,
  buttonSecondary: ButtonSecondary,
};

export default lightTheme;
