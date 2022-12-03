import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BreadCrumbs from "./components/BreadCrumbs";
import Loader from "./components/loader/Loader";
import { ToastProvider } from "react-toast-notifications";
const Log = React.lazy(() => import("./modules/Logger/Logger"));

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ToastProvider>
          <BreadCrumbs />
          <Routes>
            <Route
              exact
              index
              path="/"
              element={<Navigate to="/administration/logger" />}
            />
            <Route index path="/administration/logger" element={<Log />} />
          </Routes>
        </ToastProvider>
      </Suspense>
    </>
  );
};

export default AppRoutes;
