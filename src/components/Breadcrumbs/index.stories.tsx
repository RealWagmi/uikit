import React from "react";
import BreadcrumbsComponent from "./index";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Breadcrumbs",
  component: BreadcrumbsComponent,
  argTypes: {},
};

export const Breadcrumbs = () => {
  return (
    <BrowserRouter>
      <BreadcrumbsComponent label={"Some route"} to={"#"} />
    </BrowserRouter>
  );
};
