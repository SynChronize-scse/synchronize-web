import { cn } from "$lib/utils";
import { FC, useState } from "react";
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

  return (
    <div
      className={cn(
        "border rounded-3xl hover:shadow-sm hover:shadow-red-500 shadow-yellow-700 border-stone-700 flex flex-col min-w-[calc(100%-50px)] max-w-[calc(100%-50px)] sm:min-w-[320px] sm:max-w-xs transition-all ease-in-out duration-200",
        className
      )}
    >
      <div className="relative aspect-square bg-dark-400 w-full rounded-t-3xl">
        <div className="overflow-hidden rounded-t-3xl">
          <img className="opacity-80 overflow-hidden" src={img} alt="" />
        </div>
      </div>
      <div className="p-4 flex flex-col justify-around flex-1">
        <h1
          className="text-2xl py-4 px-3 tracking-wider uppercase font-semibold  
from-[#fcd6aa] via-[#d8b791] to-amber-400 opacity-90 bg-gradient-to-r bg-clip-text text-transparent
        "
        >
          {title}
        </h1>

        <div className="flex justify-center">
        <SlidingButton
          className=" "
          primaryText="View Details"
          secondaryText="View Details"
          buttonProps={{
            onClick: () => setShowModal(() => true),
          }}
        />
        </div>
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
