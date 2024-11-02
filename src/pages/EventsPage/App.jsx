import React from 'react'
import './App.css'

import EventsHeading from './Components/EventsHeading'
import Centerstage from './Components/Centerstage'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='overflow-x-hidden'>

      {/* <EventsHeading />
      <div>
        <Centerstage />
      </div> */}
      
      <div className='h-screen w-screen flex justify-center items-center'>
        <Link to='/events'>
          <div className='py-8 px-12 bg-orange-300 border-2 text-5xl border-slate-800 rounded-2xl'>
              EVENTS
          </div>
        </Link>
      </div>



    </div>
    
  )
}

export default App