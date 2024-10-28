import { Routes, Route } from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Memories = React.lazy(() => import("../pages/Memories"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
