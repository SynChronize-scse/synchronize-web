import { cn } from "$lib/utils";
import React, { HTMLAttributes } from "react";

interface SectionHeaderProps {
  title: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className }) => {
  return (
    <div className={cn("flex flex-col w-fit", className)}>
      <span className="uppercase whitespace-nowrap text-primary-400 text-lg sm:text-xl md:text-3xl w-fit mb-1">
        {title}
      </span>
      <div className="w-[75%] h-[1px] self-end bg-primary-400"></div>
    </div>
  );
};

export default SectionHeader;
