import React from 'react'
import { Link } from 'react-router-dom'

const EventsMenu = () => {
  return (
    <div>

      <div className='h-fit p-4 w-[92vw] rounded-lg border-2 border-orange-200 flex justify-evenly gap-8'>
        <Link to='/events'><div className='text-md lg:text-xl text-orange-200 text-center'>Centerstage Events </div> {/* Active */}</Link>
        <Link to='/events/funncultural'><div className='text-md lg:text-xl text-orange-200 text-center'>Fun & Cultural</div></Link>
        <div className='text-md lg:text-xl text-orange-200 '>Workshop & Guest Talks</div>
      </div>


    </div>
  )
}

export default EventsMenu
