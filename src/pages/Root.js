import React from "react";
import { Outlet } from "react-router-dom";
import ManageMarksheet from "./ManageMarksheet";

const RootLayout = () => {
  return (
    <>
      <ManageMarksheet />
      <main>{<Outlet />}</main>
    </>
  );
};

export default RootLayout;
