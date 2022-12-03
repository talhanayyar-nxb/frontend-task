import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Loader from "./components/loader/Loader";
import NavBar from "./components/navbar/NavBar";

const Log = React.lazy(() => import("./modules/Logger/Logger"));

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ToastProvider>
          <NavBar />
          <Routes>
            <Route exact index path="/" element={<Navigate to="/administration/logger" />} />
            <Route exact path="/administration" element={<Navigate to="/administration/logger" />} />
            <Route exact path="/administration/logger" element={<Log />} />
          </Routes>
        </ToastProvider>
      </Suspense>
    </>
  );
};

export default AppRoutes;
