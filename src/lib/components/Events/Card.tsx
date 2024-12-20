import { cn } from "$lib/utils";
import { FC, useEffect, useState } from "react";
import SlidingButton from "../Button/SlidingButton";
import ModalContent from "./ModalContent";
import { createPortal } from "react-dom";

interface CardProps {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  title: string;
  img?: string;
  description?: string;
  date?: string;
  time?: string;
}

const Card: FC<CardProps> = ({
  className,
  title,
  img,
  description,
  date,
  time,
}) => {
  const [showModal, setShowModal] = useState(false);

  const parseQueries = (search: string) => {
    const params = new URLSearchParams(search);
    return params;
  };

  useEffect(() => {
    const query = window.location.search;
    const event = parseQueries(query).get("event");
    const processedTitle = title?.toLocaleLowerCase().replace(/\s/g, "-");

    if (event === processedTitle) {
      setShowModal(() => true);
    }
  }, [title]);

  return (
    <div
      className={cn(
        "border rounded-3xl border-[#2e2c21] flex flex-col min-w-[calc(100%-50px)] max-w-[calc(100%-50px)] sm:min-w-[320px] sm:max-w-xs",
        className
      )}
    >
      <div className="relative aspect-square bg-dark-400 w-full rounded-t-3xl">
        <div className="overflow-hidden rounded-t-3xl">
          <img className="opacity-80 overflow-hidden" src={img} alt="" />
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <h1 className="text-xl uppercase">{title}</h1>
        {/* <p className="mt-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula, nunc eget dignissim lacinia, felis turpis lacinia lacus, nec
          suscipit nunc eros nec justo.
        </p> */}

        {/* Location badge */}
        {/* <div className="flex items-center mt-2 w-fit px-1 py-1 rounded-full text-xs font-mono bg-primary-400 text-black">
          <MapPin className="w-4 h-4 mr-1" />
          <p className="text-sm">Online</p>
        </div> */}
        {/* <Badge className="font-light bg-primary-400 text-black">
          <MapPin className="w-4 h-4 mr-1" />
          <p className="text-sm">Online</p>
        </Badge> */}

        <SlidingButton
          className="mt-4"
          primaryText="View Details"
          secondaryText="View Details"
          buttonProps={{
            onClick: () => setShowModal(() => true),
          }}
        />
      </div>

      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => setShowModal(() => false)}
            props={{
              description: description,
              title: title,
              date: date,
              time: time,
              img: img,
            }}
          />,
          document.body
        )}
    </div>
  );
};

export default Card;
