import React from "react";
import CardProto from "./ui/CardPrototype";

const CardSection = ({ title, cards = [] }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="mt-5 lg:px-10 px-5 py-5 border-2 border-blue-400 rounded-xl w-full">
        <h1 className="text-4xl my-5">{title}</h1>
        <div className="flex flex-row gap-5 overflow-x-auto">
          {cards.map((card, index) => (
            <CardProto
              key={index}
              title={card.title || "Untitled"}
              description={card.description || "No description available."}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
