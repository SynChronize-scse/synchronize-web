import React from "react";
import CardSection from "./CardSection";
import EventsMenu from "./EventsMenuBar";

const FunNcultural = () => {
  return (
    <div className="flex flex-col items-center pb-10 bg-slate-950">
      <EventsMenu />

      <div className="flex flex-col items-start justify-evenly gap-10 text-orange-200">
        <CardSection title="🕹️ VIDEO GAMES 🎮" />
        <CardSection title="🧩 FUN EVENTS" />
        <CardSection title="📎 EVERYDAY" />
        {/* <CardSection title="📸 PHOTOBOOTH" />
        <CardSection title="🎙️ MUSIC" />
        <CardSection title="🕺 DANCE COMPETITION" /> */}
      </div>
    </div>
  );
};

export default FunNcultural;
