import { useNavigation } from "src/navigation/NavigationContext";
import SlidingButton from "../Button/SlidingButton";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  src: string;
  color: string;
  i?: number;
  path?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  src,
  color,
  i,
  path,
}) => {
  const { goto } = useNavigation();

  const handleClick = () => {
    if (path) goto(path);
  };

  return (
    <div className="h-screen max-h-[900px] flex items-center justify-center sticky top-0 w-full">
      <div
        className={`flex flex-col-reverse sm:flex-row gap-5 sm:gap-0 relative h-[85vh] sm:h-[600px] overflow-hidden rounded-2xl p-0 sm:p-12 w-full`} // Increased width and height
        style={{
          backgroundColor: color,
          top: i !== undefined && i >= 0 ? `calc(-5vh + ${i * 25}px)` : "0",
        }}
      >
        {/* Left Side: Title and Description */}
        <div className="flex flex-col sm:w-1/2 px-6 pb-6 sm:pb-0 sm:pr-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 text-primary-400">
            {title}
          </h2>

          <p className="text-sm md:text-base lg:text-lg">{description}</p>

          <SlidingButton
            buttonProps={{ onClick: handleClick }}
            primaryText="Explore"
            secondaryText="Explore"
            className="mt-5"
          />
        </div>

        {/* Right Side: Image */}
        <div className="relative sm:w-1/2 h-[50vh] sm:h-full sm:rounded-2xl overflow-hidden">
          <img
            src={`${src}`}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
