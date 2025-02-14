import React from "react";

import { Outlet, useHref, useNavigate } from "react-router-dom";

import { RouterProvider } from "react-aria-components";

import Navbar from "./components/Navbar";

function Root() {
  let navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <Navbar />
      <div className="mx-auto mt-8 p-4">
        <Outlet />
      </div>
    </RouterProvider>
  );
}

export default Root;
