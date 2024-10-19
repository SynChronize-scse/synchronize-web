import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Memories from '../pages/Memories'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/memories' element={<Memories/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}