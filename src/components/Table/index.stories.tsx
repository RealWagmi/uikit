import React from "react";
import TableComponent from "./Table";
import PaginationComponent from "./Pagination";

export default {
  title: "Components/Primitives",
  component: TableComponent,
  argTypes: {},
};

export const Table: React.FC<React.PropsWithChildren> = () => {
  return <TableComponent title={"Title"} columns={[]} data={[]} loading={true} />;
};

export const Pagination: React.FC<React.PropsWithChildren> = () => {
  return <PaginationComponent current={1} total={10} handlePrev={() =>{}} handleNext={() => {}} />;
};