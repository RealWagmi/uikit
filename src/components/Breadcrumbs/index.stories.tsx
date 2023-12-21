import BreadcrumbsComponent from "./Breadcrumbs";
import React from "react";

export default {
  title: "Components/Breadcrumbs",
  component: BreadcrumbsComponent,
  argTypes: {},
};

export const Breadcrumbs = () => {
  return <BreadcrumbsComponent label={"Some route"} to={"/"} />;
};
