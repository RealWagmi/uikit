import React from "react";
import ButtonLightComponent from "./ButtonLight";
import ButtonConfirmedComponent from "./ButtonConfirmed";
import ButtonDropdownComponent from "./ButtonDropdown";
import ButtonDropdownLightComponent from "./ButtonDropdownLight";
import ButtonEmptyComponent from "./ButtonEmpty";
import ButtonErrorComponent from "./ButtonError";
import ButtonGrayComponent from "./ButtonGray";
import ButtonOutlinedComponent from "./ButtonOutlined";
import ButtonPrimaryComponent from "./ButtonPrimary";
import ButtonRadioCheckedComponent from "./ButtonRadioChecked";
import ButtonSecondaryComponent from "./ButtonSecondary";
import SmallButtonPrimaryComponent from "./SmallButtonPrimary";
import ThemeButtonComponent from "./ThemeButton";

export default {
  title: "Components/Button",
  component: ButtonLightComponent,
  argTypes: {},
};

export const ButtonLight: React.FC<React.PropsWithChildren> = () => {
  return <ButtonLightComponent>Button Light</ButtonLightComponent>;
};

export const ButtonConfirmed: React.FC<React.PropsWithChildren> = () => {
  return <ButtonConfirmedComponent>Button Confirmed</ButtonConfirmedComponent>;
};

export const ButtonDropdown: React.FC<React.PropsWithChildren> = () => {
  return <ButtonDropdownComponent>Button Dropdown</ButtonDropdownComponent>;
};

export const ButtonDropdownLight: React.FC<React.PropsWithChildren> = () => {
  return <ButtonDropdownLightComponent>Button Dropdown Light</ButtonDropdownLightComponent>;
};

export const ButtonEmpty: React.FC<React.PropsWithChildren> = () => {
  return <ButtonEmptyComponent>Button Empty</ButtonEmptyComponent>;
};

export const ButtonError: React.FC<React.PropsWithChildren> = () => {
  return <ButtonErrorComponent>Button Error</ButtonErrorComponent>;
};

export const ButtonGray: React.FC<React.PropsWithChildren> = () => {
  return <ButtonGrayComponent>Button Gray</ButtonGrayComponent>;
};

export const ButtonOutlined: React.FC<React.PropsWithChildren> = () => {
  return <ButtonOutlinedComponent>Button Outlined</ButtonOutlinedComponent>;
};

export const ButtonPrimary: React.FC<React.PropsWithChildren> = () => {
  return <ButtonPrimaryComponent>Button Primary</ButtonPrimaryComponent>;
};

export const ButtonRadioChecked: React.FC<React.PropsWithChildren> = () => {
  return <ButtonRadioCheckedComponent>Button Radio Checked</ButtonRadioCheckedComponent>;
};

export const ButtonSecondary: React.FC<React.PropsWithChildren> = () => {
  return <ButtonSecondaryComponent>Button Secondary</ButtonSecondaryComponent>;
};

export const SmallButtonPrimary: React.FC<React.PropsWithChildren> = () => {
  return <SmallButtonPrimaryComponent>Small Button Primary</SmallButtonPrimaryComponent>;
};

export const ThemeButton: React.FC<React.PropsWithChildren> = () => {
  return <ThemeButtonComponent size={2} emphasis={0}>Theme Button</ThemeButtonComponent>;
};
