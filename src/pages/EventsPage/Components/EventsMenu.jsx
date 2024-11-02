import React from 'react'
import { Link } from 'react-router-dom'

const EventsMenu = () => {
  return (
    <div>

      <div className='h-fit p-4 mt-2 w-[92vw] rounded-lg border-2 border-orange-200 flex flex-row justify-around '>
        <Link to='/events'><div className='text-xl text-orange-200'>Centerstage Events </div> {/* Active */}</Link>
        <Link to='/events/funncultural'><div className='text-xl text-orange-200'>Fun and Cultural</div></Link>
        <div className='text-xl text-orange-200'>Workshop and Guest Talks</div>
      </div>


    </div>
  )
}

export default EventsMenu
