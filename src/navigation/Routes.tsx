import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Memories from '../pages/Memories'
import EventHeading from '../pages/EventsPage/Components/EventsHeading'
import Centerstage from '../pages/EventsPage/Components/CenterStage'
import FunNcultural from '../pages/EventsPage/Components/FunNcultural'


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