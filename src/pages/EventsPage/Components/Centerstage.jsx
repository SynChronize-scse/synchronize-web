import React from "react";
import CardSection from "./CardSection";
import EventsMenu from "./EventsMenuBar";
import { flagship, robotics, coding, business } from "./Data/CenterStageData";

const EventsSection = () => {
  return (
    <div className="flex flex-col p-3 sm:p-10 pt-0 bg-dark-400 font-[AdieuRegular]">
      <EventsMenu />
      <div className="flex flex-col items-start gap-10 text-orange-200 w-full">
        <CardSection title="🏁 FLAGSHIP" cards={flagship} />
        <CardSection title="🤖 ROBOTICS" cards={robotics} />
        <CardSection title="⚔️ CODE COMBAT" cards={coding} />
        <CardSection title="🧑‍💼 BUSINESS" cards={business} />
        {/* Add more sections here as needed */}
      </div>
    </div>
  );
};

export default EventsSection;
