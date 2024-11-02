import { Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import("../pages/Home"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Memories = React.lazy(() => import("../pages/Memories"));

const EventHeading = React.lazy(() => import("../pages/EventsPage/Components/EventsHeading"));
const Centerstage = React.lazy(() => import("../pages/EventsPage/Components/CenterStage"));
const FunNcultural = React.lazy(() => import("../pages/EventsPage/Components/FunNcultural"));


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/memories' element={<Memories/>} />
      <Route path='*' element={<NotFound />} />
      <Route path='/events' element={<><EventHeading /> <Centerstage /></>} />
      <Route path='/events/funncultural' element={<><EventHeading /> <FunNcultural /></>} />
    </Routes>
  )
}
