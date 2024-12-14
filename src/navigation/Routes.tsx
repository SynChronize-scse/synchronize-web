import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Home = React.lazy(() => import("../pages/Home"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Memories = React.lazy(() => import("../pages/Memories"));
const Team = React.lazy(() => import("../pages/Team"));

const Centerstage = React.lazy(() => import("../pages/Centerstage"));
const FunNgames = React.lazy(() => import("../pages/FunNgames"));
const GuestTalks = React.lazy(() => import("../pages/GuestTalks"));

export const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Scrolling to top");
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/events" element={<Centerstage />} />
      <Route path="/events/funncultural" element={<FunNgames />} />
      <Route path="/events/guesttalks" element={<GuestTalks />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};
