import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Home = React.lazy(() => import("../pages/Home"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Memories = React.lazy(() => import("../pages/Memories"));
const Team = React.lazy(() => import("../pages/Team"));

const EventHeading = React.lazy(
  () => import("../pages/EventsPage/Components/EventsHeading")
);
const Centerstage = React.lazy(
  () => import("../pages/EventsPage/Components/Centerstage")
);
const FunNgames = React.lazy(
  () => import("../pages/EventsPage/Components/FunNgames")
);

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
      <Route
        path="/events"
        element={
          <>
            <EventHeading /> <Centerstage />
          </>
        }
      />
      <Route
        path="/events/funncultural"
        element={
          <>
            <EventHeading /> <FunNgames />
          </>
        }
      />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};
