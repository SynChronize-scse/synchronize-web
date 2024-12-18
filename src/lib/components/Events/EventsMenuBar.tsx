import { Link } from "react-router-dom";

const EventsMenu = () => {
  return (
    <div className="px-2">
      <div className="h-fit p-4 rounded-lg border-2 border-orange-200 flex max-sm:flex-col justify-around gap-8">
        <Link to="/events">
          <div className="text-sm md:text-lg lg:text-xl text-orange-200 text-center">
            Centerstage Events
          </div>
          {/* Active */}
        </Link>
        <Link to="/events/funncultural">
          <div className="text-sm md:text-lg lg:text-xl text-orange-200 text-center">
            Fun and Games
          </div>
        </Link>
        <Link to="/events/guesttalks">
          <div className="text-sm md:text-lg lg:text-xl text-orange-200 text-center">
            Guest Talks
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventsMenu;
