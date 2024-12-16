import CardSection from "$lib/components/Events/CardSection";
import EventsMenu from "$lib/components/Events/EventsMenuBar";
import P1 from "../assets/images/p2.avif";
import { EVERYDAY, FUN, GAMING } from "$lib/data/events";
import EventsHeading from "$lib/components/Events/EventsHeading";

const FunNgames = () => {
  return (
    <div>
      <EventsHeading />
      <div className="flex flex-col p-3 sm:p-10 pt-0 bg-dark-400 font-[AdieuRegular]">
        <EventsMenu />

        <div className="flex flex-col items-start gap-10 text-orange-200 w-full">
          <CardSection title="🕹️ VIDEO GAMES 🎮" cards={GAMING} />
          <CardSection title="🧩 FUN EVENTS" cards={FUN} titleImg={P1} />
          <CardSection title="📎 EVERYDAY" cards={EVERYDAY} />
        </div>
      </div>
    </div>
  );
};

export default FunNgames;
