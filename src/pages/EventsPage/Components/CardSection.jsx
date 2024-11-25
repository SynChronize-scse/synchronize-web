import React from "react";
import CardProto from "./ui/CardPrototype";

const CardSection = (prop) => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="h-[65vh] w-[90vw] mt-5 mx-5 lg:px-10 px-5 pt-5 border-2 border-blue-400 rounded-xl">
          <h1 className="text-4xl m-3 mt-2 mb-7 ml-5 sm:">{prop.title}</h1>
          <div className=" flex justify-start grow items-center gap-5 overflow-x-scroll scrollbar-none scroll-smooth">
            <CardProto title='Boat Race' description="hello" />
            <CardProto title='chainsaw'/>
            <CardProto />
            <CardProto />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
