import BreadcrumbsComponent from "./Breadcrumbs";
import { BrowserRouter } from "react-router-dom";
import React from "react";

export default {
  title: "Components/Breadcrumbs",
  component: BreadcrumbsComponent,
  argTypes: {},
};

export const Breadcrumbs = () => {
  return (
    <BrowserRouter>
      <BreadcrumbsComponent label={"Some route"} to={"/"} />
    </BrowserRouter>
  );
};
