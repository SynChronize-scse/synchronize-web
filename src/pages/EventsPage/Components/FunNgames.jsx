import React from "react";
import CardSection from "./CardSection";
import EventsMenu from "./EventsMenuBar";
import { fun, gaming, everyday } from "./Data/FunNgamesData";

const FunNgames = () => {
  return (
    <div className="flex flex-col p-3 sm:p-10 pt-0 bg-dark-400 font-[AdieuRegular]">
      <EventsMenu />

      <div className="flex flex-col items-start gap-10 text-orange-200 w-full">
        <CardSection title="🕹️ VIDEO GAMES 🎮" cards={gaming} />
        <CardSection title="🧩 FUN EVENTS" cards={fun} />
        <CardSection title="📎 EVERYDAY" cards={everyday} />
      </div>
    </div>
  );
};

export default FunNgames;
