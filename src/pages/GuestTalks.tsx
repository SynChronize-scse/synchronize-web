import { GUESTLECTURES } from "$lib/data/events";
import CardSection from "$lib/components/Events/CardSection";
import EventsMenu from "$lib/components/Events/EventsMenuBar";
import EventsHeading from "$lib/components/Events/EventsHeading";

const GuestTalks = () => {
  return (
    <div>
      <EventsHeading />
      <div className="flex flex-col p-3 sm:p-10 lg:px-20 pt-0 bg-dark-400 font-[AdieuRegular]">
        <EventsMenu />

        <div className="flex flex-col items-start gap-10 text-orange-200 w-full">
          <CardSection title="GUEST LECTURES" cards={GUESTLECTURES} />
        </div>
      </div>
    </div>
  );
};

export default GuestTalks;
