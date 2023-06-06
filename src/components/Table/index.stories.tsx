import React from "react";
import TableComponent from "./Table";
import PaginationComponent from "./Pagination";

export default {
  title: "Components/Table",
  component: TableComponent,
  argTypes: {},
};

export const LoadingTable: React.FC<React.PropsWithChildren> = () => {
  return <TableComponent title={"Title"} columns={[]} data={[]} loading={true} />;
};

export const EmptyTable: React.FC<React.PropsWithChildren> = () => {
  return <TableComponent title={"Title"} columns={[]} data={[]} loading={false} />;
};

export const Table: React.FC<React.PropsWithChildren> = () => {
  return <TableComponent title={"Title"} columns={[{ title: "Id", field: "id" }, { title: "Name", field: "name" }]} data={[{id: 0, name: "test"}]} loading={false} />;
};

export const Pagination: React.FC<React.PropsWithChildren> = () => {
  return <PaginationComponent current={1} total={10} handlePrev={() =>{}} handleNext={() => {}} />;
};