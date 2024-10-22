import { cn } from "$lib/utils";
import { HTMLAttributes } from "react";

interface AboutSectionProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}
function AboutSection({ className }: AboutSectionProps) {
  return (
    <div
      className={cn(
        "flex flex-col font-[AdieuRegular] w-full px-3 sm:px-20 bg-dark-400",
        className
      )}
    >
      <div className="flex flex-col w-fit">
        <span className="uppercase whitespace-nowrap text-primary-400 text-base sm:text-xl md:text-3xl w-fit mb-1">
          About Synchronize
        </span>
        <div className="w-[75%] h-[1px] self-end bg-primary-400"></div>
      </div>

      {/* Remove this*/}
      <div className="h-[90vh]"></div>
    </div>
  );
}

export default AboutSection;
