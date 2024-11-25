import React from "react";
import CardProto from "./ui/CardPrototype";

const CardSection = (prop) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="mt-5 lg:px-10 px-5 py-5 border-2 border-blue-400 rounded-xl w-full">
        <h1 className="text-4xl my-5">{prop.title}</h1>
        <div className="flex flex-row gap-5 overflow-x-auto">
          <CardProto title="Boat Race" description="hello" />
          <CardProto title="chainsaw" />
          <CardProto />
          <CardProto />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
