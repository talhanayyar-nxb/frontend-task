import React from "react";
import { Route, Routes } from "react-router-dom";
import BreadCrumbs from "./components/BreadCrumbs";
import Logger from "./modules/Logger/Logger";

const AppRoutes = () => {
  return (
    <>
      <BreadCrumbs />
      <Routes>
        <Route index path="/" element={<Logger />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
