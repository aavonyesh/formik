import React from "react";
import UserNavbar from "./UserNavbar";
import { Outlet } from "react-router-dom";
import UserFooter from "./UserFooter";

function Layout() {
  return (
    <div>
      <UserNavbar />
      <Outlet />
      <UserFooter />
    </div>
  );
}

export default Layout;
