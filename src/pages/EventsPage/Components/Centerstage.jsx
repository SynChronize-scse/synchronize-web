import React from 'react'
import CardSection from './CardSection'
import { Link } from 'react-router-dom'
import CardProto from './ui/CardPrototype'
import EventsMenu from './EventsMenuBar'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



const EventsSection = () => {
    return (
        <div className='flex flex-col items-center pb-10 bg-slate-900'>

            <EventsMenu />

            <div className=' w-[90vw] -ml-8 flex flex-col items-start justify-evenly gap-10 text-orange-200'>
                <div>
                    <CardSection title="🏁 FLAGSHIP" />
                    <CardSection title="🤖 ROBOTICS" />
                    <CardSection title="⚔️ CODE COMBAT" />
                    <CardSection title="🧑‍💼 BUSINESS" />
                    {/* <CardSection title="🙋‍♂️ TECH-Qs" />
                    <CardSection title="💻 MINI HACKATHONS" /> */}
                    
                </div>
            </div>

            {/* <CardDemo1 /> */}


        </div>


    )
}

export default EventsSection