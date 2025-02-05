import { cn } from "$lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[38rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-2xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  img,
  elRef,
}: {
  className?: string;
  img?: string;
  elRef?: (el: HTMLDivElement) => void;
}) => {
  return (
    <div
      ref={(el) => {
        if (elRef && el) {
          // (elRef as React.MutableRefObject<HTMLDivElement>).current =
          //   el as unknown as HTMLDivElement;
          elRef(el as unknown as HTMLDivElement);
        }
      }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 dark:bg-black dark:border-white/[0.2] bg-white justify-between flex flex-col space-y-4",
        className
      )}
    >
      {img && (
        <picture className="object-cover w-full h-full rounded-xl">
          <source type="image/webp" srcSet={img} />
          <img
            className="object-cover w-full h-full rounded-xl"
            src={img}
            alt="gallery"
            loading="lazy"
            decoding="async"
          />
        </picture>
      )}
    </div>
  );
};
