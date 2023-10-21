import React from "react";
import MyHeader from "./MyHeader";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <>
      <MyHeader />
      <Outlet />
    </>
  );
};

export default Template;
