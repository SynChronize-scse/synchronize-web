import { Routes, Route } from "react-router-dom";
import React from "react";


const Home = React.lazy(() => import("../pages/Home"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Memories = React.lazy(() => import("../pages/Memories"));
const Team = React.lazy(() => import("../pages/Team"));

const EventHeading = React.lazy(() => import("../pages/EventsPage/Components/EventsHeading"));
const Centerstage = React.lazy(() => import("../pages/EventsPage/Components/CenterStage"));
const FunNgames = React.lazy(() => import("../pages/EventsPage/Components/FunNgames"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/memories' element={<Memories/>} />
      <Route path='*' element={<NotFound />} />
      <Route path='/events' element={<><EventHeading /> <Centerstage /></>} />
<<<<<<< HEAD
      <Route path='/events/funncultural' element={<><EventHeading /> <FunNgames /></>} />
=======
      <Route path='/events/funncultural' element={<><EventHeading /> <FunNcultural /></>} />
      <Route path='/team' element={<Team/>} />
>>>>>>> 9eaeec5789b4f8c15184597ce9ee1e4b841b6c1f
    </Routes>
  );
};
