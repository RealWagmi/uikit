import { DefaultTheme } from "styled-components";
import { colors } from "./colors";
import { dark as DarkLoadingSpinner } from "../components/LoadingSpinner/theme";
import { dark as Breadcrumbs } from "../components/Breadcrumbs/theme";
import { dark as Table } from "../components/Table/theme";
//Cards
import { dark as BlueCard } from "../components/Card/BlueCard/theme";
import { dark as DarkGrayCard } from "../components/Card/DarkGrayCard/theme";
import { dark as GrayCard } from "../components/Card/GrayCard/theme";
import { dark as LightCard } from "../components/Card/LightCard/theme";
import { dark as OutlineCard } from "../components/Card/OutlineCard/theme";
import { dark as YellowCard } from "../components/Card/YellowCard/theme";
//Buttons
import { dark as BaseButton } from "../components/Button/BaseButton/theme";
import { dark as ButtonConfirmed } from "../components/Button/ButtonConfirmed/theme";
import { dark as ButtonError } from "../components/Button/ButtonError/theme";
import { dark as ButtonPrimary } from "../components/Button/ButtonPrimary/theme";
import { dark as ButtonGray } from "../components/Button/ButtonGray/theme";
import { dark as ButtonEmpty } from "../components/Button/ButtonEmpty/theme";
import { dark as ButtonLight } from "../components/Button/ButtonLight/theme";
import { dark as ButtonOutlined } from "../components/Button/ButtonOutlined/theme";
import { dark as ButtonRadioChecked } from "../components/Button/ButtonRadioChecked/theme";
import { dark as ButtonSecondary } from "../components/Button/ButtonSecondary/theme";
import { dark as ThemeButton } from "../components/Button/ThemeButton/theme";

const darkTheme: DefaultTheme = {
  colors,

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
  //Button
  baseButton: BaseButton,
  buttonConfirmed: ButtonConfirmed,
  buttonError: ButtonError,
  buttonPrimary: ButtonPrimary,
  buttonGray: ButtonGray,
  buttonEmpty: ButtonEmpty,
  buttonLight: ButtonLight,
  buttonOutlined: ButtonOutlined,
  buttonRadioChecked: ButtonRadioChecked,
  buttonSecondary: ButtonSecondary,
  themeButton: ThemeButton,
};

export default darkTheme;
