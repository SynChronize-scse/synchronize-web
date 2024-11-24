import React from "react";
import CardProto from "./ui/CardPrototype";

const CardSection = (prop) => {
  return (
    <>
      <div className="flex justify-center items-center scrollbar-hide ">
        <div className="h-[65vh] w-[90vw] mt-5 mx-5 lg:px-10 px-5 pt-5 border-2 border-blue-400 rounded-xl">
          <h1 className="text-4xl m-3 mt-2 mb-7 ml-5">{prop.title}</h1>
          <div className="w-full flex justify-start items-center gap-5 overflow-x-scroll scrollbar-hide ">
            <CardProto title='Boat Race' description="hello" />
            <CardProto />
            <CardProto />
            <CardProto />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
