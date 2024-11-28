import React from 'react'
import { Link } from 'react-router-dom'

const EventsMenu = () => {
  return (
    <div>

      <div className='h-fit p-4 rounded-lg border-2 border-orange-200 flex justify-around gap-8'>
        <Link to='/events'><div className='text-md lg:text-xl text-orange-200 text-center'>Centerstage Events </div> {/* Active */}</Link>
        <Link to='/events/funncultural'><div className='text-md lg:text-xl text-orange-200 text-center'>Fun and Games</div></Link>
        <div className='text-md lg:text-xl text-orange-200 '>Guest Talks</div>
      </div>


    </div>
  )
}

export default EventsMenu
