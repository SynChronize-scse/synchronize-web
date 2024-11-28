import React from "react";
import CardSection from "./CardSection";
import EventsMenu from "./EventsMenuBar";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const EventsSection = () => {
  return (
    <div className="flex flex-col p-3 sm:p-10 pt-0 bg-dark-400 font-[AdieuRegular]">
      <EventsMenu />

      <div className="flex flex-col items-start gap-10 text-orange-200">
        <div className="w-full">
          <CardSection title="🏁 FLAGSHIP" />
          <CardSection title="🤖 ROBOTICS" />
          <CardSection title="⚔️ CODE COMBAT" />
          <CardSection title="🧑‍💼 BUSINESS" />
          {/* <CardSection title="🙋‍♂️ TECH-Qs" />
              <CardSection title="💻 MINI HACKATHONS" /> */}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
