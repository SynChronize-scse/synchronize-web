import React, { HTMLAttributes, useRef } from "react";
import { useScroll } from "framer-motion";
import Card from "./Card";
import { cn } from "$lib/utils";

interface StackedCardsProps {
  items: {
    title: string;
    description: string;
    src: string;
    color: string;
    path?: string;
  }[];
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

const StackedCards: React.FC<StackedCardsProps> = ({ items, className }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className={cn("relative px-3 sm:px-20", className)}>
      {items?.map((project, i) => {
        const targetScale = 1 - (items?.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default StackedCards;
