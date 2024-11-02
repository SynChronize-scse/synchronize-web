import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import EventHeading from './Components/EventsHeading.jsx'
import Centerstage from './Components/Centerstage.jsx'
import FunNcultural from './Components/FunNcultural.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/events",
    element: <><EventHeading /> <Centerstage /></>,

  },

  {
    path: "/funncultural",
    element: <><EventHeading /> <FunNcultural /></>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
