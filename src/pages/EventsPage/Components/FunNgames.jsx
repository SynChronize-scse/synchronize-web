import React from "react";
import CardSection from "./CardSection";
import EventsMenu from "./EventsMenuBar";

const FunNcultural = () => {
  return (
    <div className="flex flex-col p-3 sm:p-10 pt-0 bg-dark-400 font-[AdieuRegular]">
      <EventsMenu />

      <div className="flex flex-col items-start gap-10 text-orange-200">
        <div className="w-full">
        <CardSection title="🕹️ VIDEO GAMES 🎮" />
        <CardSection title="🧩 FUN EVENTS" />
        <CardSection title="📎 EVERYDAY" />
        {/* <CardSection title="📸 PHOTOBOOTH" />
            <CardSection title="🎙️ MUSIC" />
            <CardSection title="🕺 DANCE COMPETITION" /> */}
      </div>
      </div>
    </div>
  );
};

export default FunNcultural;
