import React from "react";
import BreadcrumbsComponent from "./index";
import {BrowserRouter} from "react-router-dom";

export default {
  title: "Components/Primitives",
  component: BreadcrumbsComponent,
  argTypes: {},
};

export const Breadcrumbs: React.FC<React.PropsWithChildren> = () => {
  return (
    <BrowserRouter>
        <BreadcrumbsComponent links={[{ lable: 'Some route', link: '#' }, { lable: 'Another route', link: '#' }]} />
    </BrowserRouter>
  );
};

