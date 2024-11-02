import React from 'react'
import CardSection from './CardSection'
import { Link } from 'react-router-dom'

const FunNcultural = () => {
    return (
        <div className='flex flex-col items-center pb-10'>

            <div className='h-fit p-4 mt-2 w-[90vw] rounded-lg border-2 border-orange-200 flex flex-row justify-around '>
                <Link to='/events'><div className='text-xl'>Centerstage Events </div> {/* Active */}</Link>
                <Link to='/FunNcultural'><div className='text-xl'>Fun and Cultural</div></Link>
                <div className='text-xl'>Workshop and Guest Talks</div>
            </div>

            <div className='w-[90vw] flex flex-col items-start justify-evenly gap-10'>
                <CardSection title="🕹️ VIDEO GAMES 🎮" />
                <CardSection title="🧩 MAZE HUNT" />
                <CardSection title="📎 ORIGAMI" />
                <CardSection title="📸 PHOTOBOOTH" />
                <CardSection title="🎙️ MUSIC" />
                <CardSection title="🕺 DANCE COMPETITION" />
            </div>


        </div>


    )
}

export default FunNcultural